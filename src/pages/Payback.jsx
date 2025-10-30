import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, query, where, onSnapshot, serverTimestamp, updateDoc, doc, getDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';

function PaybackLoansPage() {
  const { currentUser } = useAuth();
  const [acceptedLoans, setAcceptedLoans] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [alert, setAlert] = useState(null);
  const [expandedLoanId, setExpandedLoanId] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Form states
  const [paidAmount, setPaidAmount] = useState('');
  const [proofImage, setProofImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  // Cloudinary configuration
  const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME || "dlrxomdfh";
  const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET || "Shop-preset";

  // Fetch accepted loans
  useEffect(() => {
    if (!currentUser) return;

    const q = query(
      collection(db, 'loans'),
      where('userId', '==', currentUser.uid),
      where('status', '==', 'accepted')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loans = [];
      snapshot.forEach((doc) => {
        loans.push({
          id: doc.id,
          ...doc.data()
        });
      });

      // Sort by timestamp (newest first)
      loans.sort((a, b) => {
        const aTime = a.timestamp?.toDate?.() || new Date(0);
        const bTime = b.timestamp?.toDate?.() || new Date(0);
        return bTime - aTime;
      });

      setAcceptedLoans(loans);
      setFetching(false);
    }, (err) => {
      console.error('Error fetching accepted loans:', err);
      setFetching(false);
    });

    return () => unsubscribe();
  }, [currentUser]);

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

    // Calculate total payable with 10% interest
    const interest = 0.10;
    const totalPayable = loan.totalPayable || (loan.amount + (loan.amount * interest));

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
        interest: interest,
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

          {fetching ? (
            <div className="loading-indicator">
              <div className="loading-dots">
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
              </div>
            </div>
          ) : acceptedLoans.length === 0 ? (
            <p className="empty-state">No accepted loans to pay back yet.</p>
          ) : (
            <div className="request-list">
              {acceptedLoans.map((loan) => {
                const interest = 0.10;
                const totalPayable = loan.totalPayable || (loan.amount + (loan.amount * interest));
                const isExpanded = expandedLoanId === loan.id;

                // Determine if payment form should be disabled
                const paymentSubmitted = loan.paymentStatus && loan.paymentStatus !== 'pending';
                
                // Check if the entered amount is valid
                const amountValid = isAmountValid(paidAmount, totalPayable);

                return (
                  <div key={loan.id} className="request-item animate-slideUp">
                    <div className="request-header">
                      <div className="request-info">
                        <h3>
                          Amount: ${loan.amount} + 10% interest = ${totalPayable.toFixed(2)}
                        </h3>
                        <p className="request-timestamp">Requested on {formatDate(loan.timestamp)}</p>
                        <span className={`badge ${
                          loan.paymentStatus === 'approved'
                            ? 'badge-green'
                            : loan.paymentStatus === 'denied'
                            ? 'badge-red'
                            : 'badge-yellow'
                        }`}>
                          {loan.paymentStatus ? loan.paymentStatus.charAt(0).toUpperCase() + loan.paymentStatus.slice(1) : 'Pending'}
                        </span>
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
                    {paymentSubmitted && loan.paidAmount && (
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
                            <span className="interest-info">(Loan: ${loan.amount} + 10% Interest: ${(loan.amount * interest).toFixed(2)})</span>
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

      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default PaybackLoansPage;