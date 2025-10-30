import React, { useState, useEffect } from "react";
import { db, deleteDoc, doc } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp, getDocs } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import Alert from "../components/Alert";
import "./DepositPage.css";

export default function DepositPage() {
  const { currentUser } = useAuth();

  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [deposits, setDeposits] = useState([]);
  const [fetchingDeposits, setFetchingDeposits] = useState(true);

  const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME || "dlrxomdfh"; // set VITE_CLOUD_NAME in .env
  const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET || "Shop-preset"; // set VITE_UPLOAD_PRESET in .env

  // Fetch user deposits
  useEffect(() => {
    const fetchDeposits = async () => {
      if (!currentUser) return;
      
      setFetchingDeposits(true);
      try {
        // Get all deposits
        const querySnapshot = await getDocs(collection(db, "deposits"));
        const depositsData = [];
        querySnapshot.forEach((doc) => {
          const deposit = { id: doc.id, ...doc.data() };
          // Filter by current user's ID
          if (deposit.userId === currentUser.uid) {
            depositsData.push(deposit);
          }
        });
        
        // Sort by timestamp (newest first)
        depositsData.sort((a, b) => {
          if (!a.timestamp) return 1;
          if (!b.timestamp) return -1;
          return b.timestamp.toDate() - a.timestamp.toDate();
        });
        
        setDeposits(depositsData);
      } catch (err) {
        console.error("Error fetching deposits:", err);
        setError("Failed to load deposit history");
      } finally {
        setFetchingDeposits(false);
      }
    };

    fetchDeposits();
  }, [currentUser]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setError("Only JPG/PNG/WebP images are allowed");
      return;
    }
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount || !message || !image) {
      setError("Please fill all fields and upload an image");
      return;
    }

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      // Upload to Cloudinary
      const fd = new FormData();
      fd.append("file", image);
      fd.append("upload_preset", UPLOAD_PRESET);

      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (!data.secure_url) throw new Error("Image upload failed");

      // Save deposit to Firestore
      await addDoc(collection(db, "deposits"), {
        userId: currentUser.uid,
        amount: parseFloat(amount),
        message,
        imageUrl: data.secure_url,
        timestamp: serverTimestamp(),
        status: "pending",
      });

      setAmount("");
      setMessage("");
      setImage(null);
      setPreview(null);
      setSuccess("Deposit submitted successfully!");
      
      // Refresh deposits list
      const querySnapshot = await getDocs(collection(db, "deposits"));
      const depositsData = [];
      querySnapshot.forEach((doc) => {
        const deposit = { id: doc.id, ...doc.data() };
        if (deposit.userId === currentUser.uid) {
          depositsData.push(deposit);
        }
      });
      
      // Sort by timestamp (newest first)
      depositsData.sort((a, b) => {
        if (!a.timestamp) return 1;
        if (!b.timestamp) return -1;
        return b.timestamp.toDate() - a.timestamp.toDate();
      });
      
      setDeposits(depositsData);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to submit deposit");
    } finally {
      setLoading(false);
    }
  };

  // get the status bg color of the deposit 
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

  // Format timestamp for display
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    
    const date = timestamp.toDate();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    
    return `${hours}:${minutes} · ${day} ${month}`;
  };

  return (
    <div className="whatsapp-container">
      


      {/* Chat Container */}
      <div className="chat-container">

                {/* Deposit Form */}
        <div className="form-container">
          <h2 className="form-title">Submit New Deposit</h2>
          
          <form onSubmit={handleSubmit} className="form-group">
            <input
              type="number"
              placeholder="Amount deposited"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="form-input"
              min="0"
              step="0.01"
              required
            />

            <input
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-input"
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="form-input"
            />

            {preview && (
              <img src={preview} alt="Preview" className="image-preview" />
            )}

            <button
              type="submit"
              disabled={loading}
              className="form-button"
            >
              {loading ? (
                <>
                  <div className="spinner"></div>
                  Submitting...
                </>
              ) : (
                "Submit Deposit"
              )}
            </button>
          </form>
        </div>
        {/* Success/Error Messages */}
        {error && <Alert type="error" message={error} />}
        {success && <Alert type="success" message={success} />}

        {/* Deposits History as Chat Bubbles */}
        {fetchingDeposits ? (
          <div className="loading-indicator">
            <div className="loading-dots">
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
            </div>
          </div>
        ) : deposits.length === 0 ? (
          <div className="empty-state">
            No deposit history yet
          </div>
        ) : (
          deposits.map((deposit) => (
            <div key={deposit.id} className="message-bubble">
              <div className="message-bubble-content">
                <div className="message-bubble-bg">
                  {deposit.imageUrl && (
                    <div>
                      <img 
                        src={deposit.imageUrl} 
                        alt="Deposit receipt" 
                        className="message-image"
                      />
                    </div>
                  )}
                  <div className="message-text">
                    <p className="message-amount">${deposit.amount}</p>
                    <p className="message-note">{deposit.message}</p>
 <div className={`request-status ${getStatusClass(deposit.status)}`}>
                      {deposit.status}
                    </div>                    <p className="message-timestamp">
                      {formatTimestamp(deposit.timestamp)}
                    </p>
             
                  </div>
                </div>
              </div>
            </div>
          ))
        )}





      </div>
    </div>
  );
}