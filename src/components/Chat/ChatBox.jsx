import React, { useState, useEffect, useRef } from 'react';
import { db } from '../../firebaseConfig';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';
import { useAuth } from '../../context/AuthContext';
import './ChatBox.css';

export default function ChatBox() {
  const { currentUser } = useAuth();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [onlineUsers, setOnlineUsers] = useState({});
  const messagesEndRef = useRef();
  const presenceIntervalRef = useRef(null);

  // Set user online status when component mounts
  useEffect(() => {
    if (!currentUser) return;

    /**
     * Sets the user's online status to true in Firestore
     * Creates the user document if it doesn't exist
     */
    const setUserOnline = async () => {
      try {
        const userRef = doc(db, 'users', currentUser.uid);
        const userDoc = await getDoc(userRef);
        
        if (userDoc.exists()) {
          // Update existing document
          await updateDoc(userRef, {
            isOnline: true,
            lastActive: serverTimestamp()
          });
        } else {
          // Create new document
          await setDoc(userRef, {
            isOnline: true,
            lastActive: serverTimestamp(),
            email: currentUser.email,
            displayName: currentUser.email.split('@')[0]
          });
        }
      } catch (error) {
        console.error('Error setting user online:', error);
      }
    };

    setUserOnline();

    /**
     * Set up periodic presence update (every 30 seconds)
     * This helps to detect when a user is still active even if they don't send messages
     */
    presenceIntervalRef.current = setInterval(async () => {
      try {
        const userRef = doc(db, 'users', currentUser.uid);
        await updateDoc(userRef, {
          lastActive: serverTimestamp()
        });
      } catch (error) {
        console.error('Error updating presence:', error);
      }
    }, 30000);

    /**
     * Handle page unload to set user offline
     * This ensures the user is marked as offline even if they close the browser abruptly
     */
    const handleBeforeUnload = async () => {
      try {
        const userRef = doc(db, 'users', currentUser.uid);
        await updateDoc(userRef, {
          isOnline: false,
          lastActive: serverTimestamp()
        });
      } catch (error) {
        console.error('Error setting user offline:', error);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup function
    return () => {
      // Clear interval
      if (presenceIntervalRef.current) {
        clearInterval(presenceIntervalRef.current);
      }
      
      // Remove event listener
      window.removeEventListener('beforeunload', handleBeforeUnload);
      
      // Set user offline when component unmounts
      handleBeforeUnload();
    };
  }, [currentUser]);

  /**
   * Set up listeners for messages and user online status changes
   * This allows real-time updates of both messages and online status indicators
   */
  useEffect(() => {
    if (!currentUser) return;

    // Set up messages listener
    const messagesQuery = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));
    const messagesUnsubscribe = onSnapshot(messagesQuery, snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });

    // Set up online status listener
    const usersQuery = collection(db, 'users');
    const usersUnsubscribe = onSnapshot(usersQuery, snapshot => {
      const usersStatus = {};
      snapshot.forEach(doc => {
        const userData = doc.data();
        usersStatus[doc.id] = {
          isOnline: userData.isOnline || false,
          lastActive: userData.lastActive,
          displayName: userData.displayName || userData.email?.split('@')[0] || 'Unknown'
        };
      });
      setOnlineUsers(usersStatus);
    });

    // Cleanup both listeners when component unmounts
    return () => {
      messagesUnsubscribe();
      usersUnsubscribe();
    };
  }, [currentUser]);

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

  /**
   * Get a sorted list of online users
   * Filters for users with isOnline: true and sorts by display name
   */
  const getSortedOnlineUsers = () => {
    return Object.entries(onlineUsers)
      .filter(([_, status]) => status.isOnline)
      .sort(([_, a], [__, b]) => a.displayName.localeCompare(b.displayName));
  };

  return (
    <div className="chat-container">
      {/* Chat Header */}
      <div className="chat-header">
        <div className="chat-header-avatar">
          {currentUser?.email?.charAt(0).toUpperCase() || 'U'}
          {/* Online status indicator for current user */}
          <div 
            className={`online-status-indicator ${onlineUsers[currentUser?.uid]?.isOnline ? 'online' : 'offline'}`}
            title={onlineUsers[currentUser?.uid]?.isOnline ? 'Online' : 'Offline'}
          />
        </div>
        <div className="chat-header-info">
          <h1>Chat Room</h1>
          <p>{messages.length} Messages</p>
        </div>
      </div>

      {/* Online Users Bar */}
      <div className="online-users-bar">
        <div className="online-users-label">Online Now:</div>
        <div className="online-users-list">
          {getSortedOnlineUsers().map(([userId, status]) => (
            <div key={userId} className="online-user">
              <div className="online-user-avatar">
                {status.displayName.charAt(0).toUpperCase()}
                <div 
                  className="online-status-indicator online"
                  title="Online"
                />
              </div>
              <span className="online-user-name">{status.displayName}</span>
            </div>
          ))}
          {getSortedOnlineUsers().length === 0 && (
            <div className="no-online-users">No users online</div>
          )}
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
                  {/* Online status indicator for message sender */}
                  <div 
                    className={`online-status-indicator ${onlineUsers[msg.userId]?.isOnline ? 'online' : 'offline'}`}
                    title={onlineUsers[msg.userId]?.isOnline ? 'Online' : 'Offline'}
                  />
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
                  {/* Online status indicator for current user in their own message */}
                  <div 
                    className={`online-status-indicator ${onlineUsers[msg.userId]?.isOnline ? 'online' : 'offline'}`}
                    title={onlineUsers[msg.userId]?.isOnline ? 'Online' : 'Offline'}
                  />
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