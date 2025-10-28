import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, query, where, onSnapshot, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';


const PaybackLoansPage = () => {
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

  // Handle form submission
  const handleSubmitPayment = async (e, loan) => {
    e.preventDefault();
    
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
      
      // Calculate total payable with 10% interest
      const interest = 0.10;
      const totalPayable = loan.amount + (loan.amount * interest);
      
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
                const totalPayable = loan.amount + (loan.amount * interest);
                const isExpanded = expandedLoanId === loan.id;
                
                return (
                  <div key={loan.id} className="request-item animate-slideUp">
                    <div className="request-header">
                      <div className="request-info">
                        <h3>Amount: ${loan.amount} + 10% interest = ${totalPayable.toFixed(2)}</h3>
                        <p className="request-timestamp">Requested on {formatDate(loan.timestamp)}</p>
                      </div>
                      <button 
                        className="form-button"
                        onClick={() => handlePayClick(loan.id)}
                      >
                        {isExpanded ? 'Cancel' : 'Pay'}
                      </button>
                    </div>
                    
                    {/* Payment Form */}
                    <div className={`payment-form ${isExpanded ? 'show' : ''}`}>
                      <form onSubmit={(e) => handleSubmitPayment(e, loan)} className="form-group">
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
                          />
                        </div>
                        
                        <div>
                          <label className="form-label">Proof of Payment</label>
                          <input
                            type="file"
                            onChange={handleFileChange}
                            className="form-input"
                            accept="image/jpeg, image/png, image/webp"
                          />
                          
                          {imagePreview && (
                            <div className="image-preview">
                              <img src={imagePreview} alt="Proof of payment" />
                            </div>
                          )}
                        </div>
                        
                        <button
                          type="submit"
                          disabled={submitting}
                          className="form-button"
                        >
                          {submitting ? 'Submitting...' : 'Submit Payment'}
                        </button>
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
          max-height: 500px;
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
      `}</style>
    </div>
  );
};

export default PaybackLoansPage;