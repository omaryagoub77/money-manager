import React, { useState, useEffect, useRef } from 'react';
import { db } from '../../firebaseConfig';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../../context/AuthContext';
import './ChatBox.css';

export default function ChatBox() {
  const { currentUser } = useAuth();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef();

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));
    const unsubscribe = onSnapshot(q, snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const sendMessage = async e => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    try {
      await addDoc(collection(db, 'messages'), {
        text: newMessage,
        userId: currentUser.uid,
        userName: currentUser.email.split('@')[0],
        timestamp: serverTimestamp()
      });
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Format timestamp for display
  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    
    const date = timestamp.toDate();
    return date.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
  };

  return (
    <div className="chat-container">
      {/* Chat Header */}
      <div className="chat-header">
        <div className="chat-header-avatar">
          {currentUser?.email?.charAt(0).toUpperCase() || 'U'}
        </div>
        <div className="chat-header-info">
          <h1>Chat Room</h1>
          <p>{messages.length} participants</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="messages-container">
        {loading ? (
          <div className="loading-indicator">
            <div className="loading-dots">
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
            </div>
          </div>
        ) : messages.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">💬</div>
            <div className="empty-state-text">No messages yet. Start a conversation!</div>
          </div>
        ) : (
          messages.map(msg => (
            <div 
              key={msg.id} 
              className={`message ${msg.userId === currentUser.uid ? 'message-sent' : 'message-received'}`}
            >
              {msg.userId !== currentUser.uid && (
                <div className="message-avatar message-avatar-received">
                  {msg.userName.charAt(0).toUpperCase()}
                </div>
              )}
              <div className={`message-bubble ${msg.userId === currentUser.uid ? 'message-bubble-sent' : 'message-bubble-received'}`}>
                <div className="message-text">{msg.text}</div>
                <div className="message-timestamp">
                  {formatTime(msg.timestamp)}
                </div>
              </div>
              {msg.userId === currentUser.uid && (
                <div className="message-avatar message-avatar-sent">
                  {msg.userName.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={sendMessage} className="input-container">
        <div className="input-wrapper">
          <input 
            type="text" 
            className="message-input"
            placeholder="Type a message..." 
            value={newMessage} 
            onChange={e => setNewMessage(e.target.value)}
          />
        </div>
        <button 
          type="submit" 
          className="send-button"
          disabled={!newMessage.trim()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="send-icon">
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </button>
      </form>
    </div>
  );
}