import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, where, onSnapshot, query, orderBy, limit, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import './Loans.css';

function PaybackLoansPage() {
  const { currentUser } = useAuth();
  const [acceptedLoans, setAcceptedLoans] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [alert, setAlert] = useState(null);
  const [expandedLoanId, setExpandedLoanId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [interestRate, setInterestRate] = useState(0.10); // Default to 0.10 as fallback
  const [loadingInterest, setLoadingInterest] = useState(true);

  // Form states
  const [paidAmount, setPaidAmount] = useState('');
  const [proofImage, setProofImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  // Cloudinary configuration
  const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME || "dlrxomdfh";
  const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET || "Shop-preset";

  // Fetch interest rate from Firestore with real-time updates
  useEffect(() => {
    const q = query(collection(db, 'interest'), orderBy('timestamp', 'desc'), limit(1));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        setInterestRate(snapshot.docs[0].data().interest);
      }
      setLoadingInterest(false);
    }, (error) => {
      console.error('Error fetching interest rate:', error);
      showAlert('Failed to fetch interest rate', 'error');
      setLoadingInterest(false);
    });
    return () => unsubscribe();
  }, []);

  // Fetch accepted loans
  useEffect(() => {
    if (!currentUser) return;
    
    const q = query(
      collection(db, 'loans'),
      where('userId', '==', currentUser.uid),
      where('status', '==', 'accepted')
    );
    
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const loansData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Loans fetched:", loansData.length);
        
        // Sort loans by priority
        const sortedLoans = sortLoansByPriority(loansData);
        setAcceptedLoans(sortedLoans);
        setFetching(false);
      },
      (error) => {
        console.error('Error fetching accepted loans:', error);
        showAlert('Failed to fetch accepted loans', 'error');
        setFetching(false);
      }
    );
    
    return () => unsubscribe();
  }, [currentUser]);

  // Function to sort loans by priority
  const sortLoansByPriority = (loans) => {
    return [...loans].sort((a, b) => {
      // Check if loan is new (created within last 24 hours)
      const isNewA = isNewLoan(a.timestamp);
      const isNewB = isNewLoan(b.timestamp);
      
      // Check if loan is awaiting approval
      const isAwaitingA = a.paidAmount && parseFloat(a.paidAmount) > 0 && a.paymentStatus === 'pending';
      const isAwaitingB = b.paidAmount && parseFloat(b.paidAmount) > 0 && b.paymentStatus === 'pending';
      
      // Priority order: New loans > Awaiting approval > Others
      if (isNewA && !isNewB) return -1;
      if (!isNewA && isNewB) return 1;
      
      if (isAwaitingA && !isAwaitingB) return -1;
      if (!isAwaitingA && isAwaitingB) return 1;
      
      // If both have same priority, sort by timestamp (newest first)
      const timeA = a.timestamp?.toDate?.() || new Date(0);
      const timeB = b.timestamp?.toDate?.() || new Date(0);
      return timeB - timeA;
    });
  };

  // Check if loan is new (created within last 24 hours)
  const isNewLoan = (timestamp) => {
    if (!timestamp) return false;
    const loanDate = timestamp.toDate();
    const now = new Date();
    const diffInHours = (now - loanDate) / (1000 * 60 * 60);
    return diffInHours < 24;
  };

  // Show alert with auto-dismiss
  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  // Handle Pay button click
  const handlePayClick = (loanId) => {
    if (expandedLoanId === loanId) {
      setExpandedLoanId(null);
    } else {
      setExpandedLoanId(loanId);
      // Reset form when opening a new loan
      setPaidAmount('');
      setProofImage(null);
      setImagePreview('');
    }
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      showAlert('Please select a valid image file (JPEG, PNG, or WebP)', 'error');
      return;
    }

    setProofImage(file);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Upload image to Cloudinary
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData
        }
      );

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  // Check if paid amount matches total payable (with small tolerance for floating-point differences)
  const isAmountValid = (paid, total) => {
    if (!paid || !total) return false;
    const paidValue = parseFloat(paid);
    const totalValue = parseFloat(total);
    return Math.abs(paidValue - totalValue) < 0.01; // Allow differences within $0.01
  };

  // Handle form submission
  const handleSubmitPayment = async (e, loan) => {
    e.preventDefault();

    // Calculate total payable with dynamic interest rate
    const totalPayable = loan.totalPayable || (loan.amount + (loan.amount * (interestRate)));

    // Validate that paid amount matches total payable
    if (!isAmountValid(paidAmount, totalPayable)) {
      showAlert(`Please enter the exact amount: $${totalPayable.toFixed(2)}`, 'error');
      return;
    }

    // Validate inputs
    if (!paidAmount || parseFloat(paidAmount) <= 0) {
      showAlert('Please enter a valid amount', 'error');
      return;
    }

    if (!proofImage) {
      showAlert('Please provide proof of payment', 'error');
      return;
    }

    setSubmitting(true);

    try {
      // Upload image to Cloudinary
      const imageUrl = await uploadImage(proofImage);

      // Update the loan document
      const loanRef = doc(db, 'loans', loan.id);
      await updateDoc(loanRef, {
        interest: interestRate,
        totalPayable: totalPayable,
        paidAmount: parseFloat(paidAmount),
        proofImageUrl: imageUrl,
        paymentStatus: 'pending',
        paymentTimestamp: serverTimestamp()
      });

      // Reset form
      setPaidAmount('');
      setProofImage(null);
      setImagePreview('');
      setExpandedLoanId(null);

      showAlert('Payment proof submitted successfully!', 'success');
    } catch (err) {
      console.error('Error submitting payment:', err);
      showAlert('Failed to submit payment. Please try again.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  // Format date helper
  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });

    return `${hours}:${minutes} · ${day} ${month}`;
  };

  return (
    <div className="whatsapp-container">
      <Header />

      {/* Alert Container */}
      {alert && (
        <div
          className={`alert alert-${alert.type}`}
          onClick={() => setAlert(null)}
        >
          {alert.message}
        </div>
      )}

      <div className="main-content">
        <h1 className="page-title">Pay Back Loans</h1>

        {/* Accepted Loans List */}
        <div className="card">
          <h2 className="card-title">Accepted Loans</h2>

          {fetching || loadingInterest ? (
            <div className="loading-indicator">
              <div className="loading-dots">
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
              </div>
              {loadingInterest && <p className="loading-text">Loading interest rate...</p>}
            </div>
          ) : acceptedLoans.length === 0 ? (
            <p className="empty-state">You currently have no accepted loans to pay back. Keep an eye here!</p>
          ) : (
            <div className="request-list">
              {acceptedLoans.map((loan) => {
                const totalPayable = loan.totalPayable || (loan.amount + (loan.amount * interestRate));
                const isExpanded = expandedLoanId === loan.id;
                const newLoan = isNewLoan(loan.timestamp);

                // Determine if payment form should be disabled
                const paymentSubmitted = loan.paidAmount && parseFloat(loan.paidAmount) > 0;
                const awaitingApproval = paymentSubmitted && loan.paymentStatus === 'pending';
                
                // Check if the entered amount is valid
                const amountValid = isAmountValid(paidAmount, totalPayable);
                
                // Determine status badge class and text
                let statusClass = 'badge-yellow';
                let statusText = 'Pending';
                
                if (loan.paymentStatus === 'approved') {
                  statusClass = 'badge-green';
                  statusText = 'Approved';
                } else if (loan.paymentStatus === 'denied') {
                  statusClass = 'badge-red';
                  statusText = 'Denied';
                } else if (awaitingApproval) {
                  statusClass = 'badge-blue';
                  statusText = 'Paid (Awaiting Approval)';
                }

                return (
                  <div key={loan.id} className={`request-item animate-slideUp ${newLoan ? 'new-loan' : ''} ${awaitingApproval ? 'awaiting-approval' : ''}`}>
                    <div className="request-header">
                      <div className="request-info">
                        <h3>
                          Amount: ${loan.amount} + {interestRate.toFixed(2)}% interest = ${totalPayable.toFixed(2)}
                          {newLoan && <span className="new-badge">NEW</span>}
                          {awaitingApproval && <span className="awaiting-badge">AWAITING APPROVAL</span>}
                        </h3>

                        <p className="request-timestamp">Requested on {formatDate(loan.timestamp)}</p>
                        <span className={`badge ${statusClass}`}>
                          {statusText}
                        </span>
                        {awaitingApproval && (
                          <p className="payment-awaiting-text">
                            Your payment has been submitted and is awaiting admin approval.
                          </p>
                        )}
                      </div>
                      <button
                        className="form-button"
                        onClick={() => handlePayClick(loan.id)}
                        disabled={paymentSubmitted}
                      >
                        {isExpanded ? 'Cancel' : paymentSubmitted ? 'Submitted' : 'Pay'}
                      </button>
                    </div>

                    {/* Show previous payment info if submitted */}
                    {paymentSubmitted && (
                      <div className="previous-payment">
                        <p><strong>Paid Amount:</strong> ${loan.paidAmount}</p>
                        {loan.proofImageUrl && (
                          <img src={loan.proofImageUrl} alt="Proof" className="previous-proof" />
                        )}
                        <p><strong>Payment Date:</strong> {formatDate(loan.paymentTimestamp)}</p>
                        {loan.paymentStatus === 'denied' && loan.reason && (
                          <p className="denied-reason">Denied Reason: {loan.reason}</p>
                        )}
                      </div>
                    )}

                    {/* Payment Form */}
                    <div className={`payment-form ${isExpanded ? 'show' : ''}`}>
                      <form onSubmit={(e) => handleSubmitPayment(e, loan)} className="form-group">
                        <div className="amount-info">
                          <p className="total-payable">
                            <strong>Total Amount Due:</strong> ${totalPayable.toFixed(2)}
                            <span className="interest-info">(Loan: ${loan.amount} + {(interestRate * 100).toFixed(0)}% Interest: ${(loan.amount * interestRate).toFixed(2)})</span>
                          </p>
                        </div>
                        
                        <div>
                          <label className="form-label">Amount Paid</label>
                          <input
                            type="number"
                            value={paidAmount}
                            onChange={(e) => setPaidAmount(e.target.value)}
                            className="form-input"
                            placeholder="Enter amount paid"
                            min="0"
                            step="0.01"
                            disabled={paymentSubmitted}
                          />
                          
                          {paidAmount && !amountValid && (
                            <div className="helper-text">
                              Please enter the exact amount: ${totalPayable.toFixed(2)}
                            </div>
                          )}
                          
                          {paidAmount && amountValid && (
                            <div className="helper-text valid">
                              ✓ Amount is correct
                            </div>
                          )}
                        </div>

                        <div>
                          <label className="form-label">Proof of Payment</label>
                          <input
                            type="file"
                            onChange={handleFileChange}
                            className="form-input"
                            accept="image/jpeg, image/png, image/webp"
                            disabled={paymentSubmitted}
                          />

                          {imagePreview && (
                            <div className="image-preview">
                              <img src={imagePreview} alt="Proof of payment" />
                            </div>
                          )}
                        </div>

                        <button
                          type="submit"
                          disabled={submitting || paymentSubmitted || !amountValid || !proofImage}
                          className={`form-button ${!amountValid || !proofImage ? 'disabled-button' : ''}`}
                        >
                          {submitting ? 'Submitting...' : 'Submit Payment'}
                        </button>
                        
                        {!amountValid && paidAmount && (
                          <div className="form-help-text">
                            You must pay the exact amount due (${totalPayable.toFixed(2)}) to submit your payment.
                          </div>
                        )}
                      </form>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .payment-form {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s ease-out;
        }
        
        .payment-form.show {
          max-height: 600px;
          transition: max-height 0.5s ease-in;
        }

        .image-preview {
          margin-top: 12px;
          border-radius: 8px;
          overflow: hidden;
          max-width: 100%;
        }

        .image-preview img {
          width: 100%;
          max-height: 200px;
          object-fit: cover;
          display: block;
        }

        .previous-payment {
          background: #f7f7f7;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 12px;
        }

        .previous-payment img.previous-proof {
          max-width: 100%;
          max-height: 150px;
          display: block;
          margin-top: 6px;
          border-radius: 6px;
        }

        .denied-reason {
          color: #b91c1c;
          margin-top: 6px;
        }

        .badge {
          display: inline-block;
          padding: 2px 8px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 500;
          margin-top: 4px;
        }

        .badge-green { background: #d1fae5; color: #065f46; }
        .badge-red { background: #fee2e2; color: #991b1b; }
        .badge-yellow { background: #fef3c7; color: #78350f; }
        .badge-blue { background: #dbeafe; color: #1e40af; }
        
        .payment-awaiting-text {
          margin-top: 4px;
          font-size: 12px;
          color: #64748b;
        }
        
        .amount-info {
          margin-bottom: 12px;
          padding: 10px;
          background-color: #f0f9ff;
          border-radius: 6px;
          border-left: 4px solid #3b82f6;
        }
        
        .total-payable {
          margin: 0;
          font-weight: 600;
          color: #1e40af;
        }
        
        .interest-info {
          display: block;
          font-size: 12px;
          color: #64748b;
          margin-top: 4px;
          font-weight: normal;
        }
        
        .helper-text {
          margin-top: 6px;
          font-size: 12px;
          color: #b91c1c;
        }
        
        .helper-text.valid {
          color: #065f46;
        }
        
        .form-help-text {
          margin-top: 10px;
          font-size: 13px;
          color: #64748b;
          text-align: center;
          padding: 8px;
          background-color: #f1f5f9;
          border-radius: 6px;
        }
        
        .disabled-button {
          background-color: #9ca3af !important;
          cursor: not-allowed !important;
        }
        
        .loading-text {
          text-align: center;
          margin-top: 10px;
          color: #64748b;
          font-size: 14px;
        }
        
        /* New loan styles */
        .new-loan {
          border-left: 4px solid #10b981;
          background: linear-gradient(to right, rgba(16, 185, 129, 0.05), transparent);
        }
        
        .new-badge {
          display: inline-block;
          margin-left: 10px;
          padding: 2px 8px;
          background-color: #10b981;
          color: white;
          border-radius: 12px;
          font-size: 10px;
          font-weight: bold;
          animation: pulse 2s infinite;
        }
        
        /* Awaiting approval styles */
        .awaiting-approval {
          border-left: 4px solid #3b82f6;
          background: linear-gradient(to right, rgba(59, 130, 246, 0.05), transparent);
        }
        
        .awaiting-badge {
          display: inline-block;
          margin-left: 10px;
          padding: 2px 8px;
          background-color: #3b82f6;
          color: white;
          border-radius: 12px;
          font-size: 10px;
          font-weight: bold;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default PaybackLoansPage;