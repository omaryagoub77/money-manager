import React, { useState, useEffect } from 'react';
import { db, deleteDoc, doc } from '../firebaseConfig';
import { collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import './Loans.css';

const CashoutPage = () => {
  const { currentUser } = useAuth();
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [reason, setReason] = useState('');
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [fetching, setFetching] = useState(true);

  // Fetch user's cashout requests
  useEffect(() => {
    if (!currentUser) return;

    // Simplified query without composite index requirement
    const q = query(
      collection(db, 'loans'),
      where('userId', '==', currentUser.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const cashoutRequests = [];
      snapshot.forEach((doc) => {
        cashoutRequests.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      // Sort by timestamp locally (newest first)
      cashoutRequests.sort((a, b) => {
        const aTime = a.timestamp?.toDate?.() || new Date(0);
        const bTime = b.timestamp?.toDate?.() || new Date(0);
        return bTime - aTime;
      });
      
      setRequests(cashoutRequests);
      setFetching(false);
    }, (err) => {
      console.error('Error fetching cashout requests:', err);
      // Fallback to fetch all and filter locally
      const unsubscribeAll = onSnapshot(collection(db, 'loans'), (snapshot) => {
        const cashoutRequests = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data.userId === currentUser.uid) {
            cashoutRequests.push({
              id: doc.id,
              ...data
            });
          }
        });
        
        // Sort by timestamp locally (newest first)
        cashoutRequests.sort((a, b) => {
          const aTime = a.timestamp?.toDate?.() || new Date(0);
          const bTime = b.timestamp?.toDate?.() || new Date(0);
          return bTime - aTime;
        });
        
        setRequests(cashoutRequests);
        setFetching(false);
      });
      
      return () => unsubscribeAll();
    });

    return () => unsubscribe();
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount || !name || !reason) {
      setError('Please fill in all fields');
      return;
    }

    if (parseFloat(amount) <= 0) {
      setError('Amount must be greater than 0');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await addDoc(collection(db, 'loans'), {
        userId: currentUser.uid,
        amount: parseFloat(amount),
        name: name,
        reason: reason,
        status: 'pending', // pending, accepted, denied
        timestamp: serverTimestamp()
      });
Accepted
      // Reset form
      setAmount('');
      setName('');
      setReason('');
      setSuccess('Cashout request submitted successfully!');
    } catch (err) {
      console.error('Error submitting cashout request:', err);
      setError('Failed to submit cashout request. Please try again.');
    } finally {
      setLoading(false);
    }
  };


  const getStatusClass = (status) => {
    switch (status) {
      case 'accepted':
        return 'status-accepted';
      case 'denied':
        return 'status-denied';
      case 'pending':
      default:
        return 'status-pending';
    }
  };

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


      <div className="main-content">
        <h1 className="page-title">Loan Request</h1>
        
        {/* Cashout Form */}
        <div className="card animate-slideUp">
          <h2 className="card-title">New Request</h2>
          
          <form onSubmit={handleSubmit} className="form-group">
            {error && <div className="alert alert-error">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            
            <div>
              <label className="form-label">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="form-input"
                placeholder="Enter amount"
                min="0"
                step="0.01"
              />
            </div>
            
            <div>
              <label className="form-label">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label className="form-label">Reason</label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="form-textarea"
                placeholder="Enter reason for cashout"
                rows="3"
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="form-button"
            >
              {loading ? 'Sending...' : 'Send Request'}
            </button>
          </form>
        </div>
        
        {/* Requests List */}
        <div className="card">
          <h2 className="card-title">Your Requests</h2>
          
          {fetching ? (
            <div className="loading-indicator">
              <div className="loading-dots">
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
              </div>
            </div>
          ) : requests.length === 0 ? (
            <p className="empty-state">No cashout requests found</p>
          ) : (
            <div className="request-list">
              {requests.map((request) => (
                <div key={request.id} className="request-item animate-slideUp">
                  <div className="request-header">
                    <div className="request-info">
                      <h3>Amount: ${request.amount}</h3>
                      <p>Name: {request.name}</p>
                      <p>Reason: {request.reason}</p>
                    </div>
                    <div className={`request-status ${getStatusClass(request.status)}`}>
                      {request.status}
                    </div>
                  </div>
                  <div className="request-footer">
                    Requested on {formatDate(request.timestamp)}
                  </div>
                 
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CashoutPage;