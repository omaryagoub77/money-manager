import React, { useState, useEffect } from 'react';
import { db } from "../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import Alert from '../components/Alert';
import './Home.css';

const Home = () => {
  const { currentUser } = useAuth();
  const [deposits, setDeposits] = useState([]);
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totals, setTotals] = useState({ deposits: 0, loans: 0 });
  const [error, setError] = useState(null);

  // Fetch user deposits and loans
  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) return;
      
      try {
        // Fetch deposits
        const depositsQuery = query(
          collection(db, "deposits"),
          where("userId", "==", currentUser.uid)
        );
        const depositsSnapshot = await getDocs(depositsQuery);
        const depositsData = [];
        let totalDeposits = 0;
        
        depositsSnapshot.forEach((doc) => {
          const data = doc.data();
          depositsData.push({ id: doc.id, ...data });
          totalDeposits += data.amount || 0;
        });
        
        // Sort deposits by timestamp (newest first)
        depositsData.sort((a, b) => {
          const aTime = a.timestamp?.toDate?.() || new Date(0);
          const bTime = b.timestamp?.toDate?.() || new Date(0);
          return bTime - aTime;
        });
        
        setDeposits(depositsData);
        
        // Fetch loans
        const loansQuery = query(
          collection(db, "loans"),
          where("userId", "==", currentUser.uid)
        );
        const loansSnapshot = await getDocs(loansQuery);
        const loansData = [];
        let totalLoans = 0;
        
        loansSnapshot.forEach((doc) => {
          const data = doc.data();
          loansData.push({ id: doc.id, ...data });
          if (data.status === 'accepted') {
            totalLoans += data.amount || 0;
          }
        });
        
        // Sort loans by timestamp (newest first)
        loansData.sort((a, b) => {
          const aTime = a.timestamp?.toDate?.() || new Date(0);
          const bTime = b.timestamp?.toDate?.() || new Date(0);
          return bTime - aTime;
        });
        
        setLoans(loansData);
        setTotals({ deposits: totalDeposits, loans: totalLoans });
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load dashboard data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUser]);

  // Format timestamp for display
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'N/A';
    
    const date = timestamp.toDate();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    
    return `${hours}:${minutes} · ${day} ${month}`;
  };

  // Get status class for styling
  const getStatusClass = (status) => {
    switch (status) {
      case 'accepted':
        return 'status-accepted';
      case 'denied':
        return 'status-denied';
      case 'pending':
        return 'status-pending';
      default:
        return 'status-pending';
    }
  };

  if (loading) {
    return (
      <div className="home-container">
        <div className="loading-indicator">
          <div className="loading-dots">
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="home-hero">
        <h1 className="home-title">Dashboard</h1>
        <p className="home-sub">Your financial overview</p>
      </div>

      {error && <Alert type="error" message={error} />}

      {/* Totals Section */}
      <div className="totals-grid">
        <div className="total-card">
          <h3>Total Deposits</h3>
          <p className="total-amount">${totals.deposits.toFixed(2)}</p>
        </div>
        <div className="total-card">
          <h3>Total Loans</h3>
          <p className="total-amount">${totals.loans.toFixed(2)}</p>
        </div>
      </div>

      {/* Deposits Table */}
      <div className="card">
        <h2>Recent Deposits</h2>
        {deposits.length === 0 ? (
          <p className="empty-state">No deposits found</p>
        ) : (
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {deposits.slice(0, 5).map((deposit) => (
                  <tr key={deposit.id}>
                    <td>${deposit.amount?.toFixed(2)}</td>
                    <td>{deposit.message || 'N/A'}</td>
                    <td>{formatTimestamp(deposit.timestamp)}</td>
                    <td>
                      <span className={`status-badge ${getStatusClass(deposit.status || 'pending')}`}>
                        {deposit.status || 'pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Loans Table */}
      <div className="card">
        <h2>Recent Loans</h2>
        {loans.length === 0 ? (
          <p className="empty-state">No loans found</p>
        ) : (
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Name</th>
                  <th>Reason</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {loans.slice(0, 5).map((loan) => (
                  <tr key={loan.id}>
                    <td>${loan.amount?.toFixed(2)}</td>
                    <td>{loan.name || 'N/A'}</td>
                    <td>{loan.reason || 'N/A'}</td>
                    <td>{formatTimestamp(loan.timestamp)}</td>
                    <td>
                      <span className={`status-badge ${getStatusClass(loan.status || 'pending')}`}>
                        {loan.status || 'pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Navigation Cards */}
      <div className="cards-grid">
        <div className="card">
          <h2>Deposit Money</h2>
          <p>Submit your deposits and track your financial history.</p>
          <a href="#/deposit">Deposit</a>
        </div>

        <div className="card">
          <h2>Request Loan</h2>
          <p>Request loans and track their status.</p>
          <a href="#/loans">Loans</a>
        </div>

        <div className="card">
          <h2>Pay Back Loans</h2>
          <p>Pay back your accepted loans.</p>
          <a href="#/payback">Pay Back</a>
        </div>

        <div className="card">
          <h2>Profile</h2>
          <p>Manage your account information and settings.</p>
          <a href="#/profile">Profile</a>
        </div>
      </div>
    </div>
  );
};

export default Home;