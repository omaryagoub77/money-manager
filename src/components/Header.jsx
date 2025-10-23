import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/signin');
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
    <header className="money-box-header">
      <div className="header-container">
        <div className="header-brand">
          <div className="header-title">Money Box</div>
        </div>

        <button
          className="mobile-menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span className="hamburger" />
        </button>

        <nav className={`header-nav ${open ? 'open' : ''}`} aria-hidden={!open && window.innerWidth < 480}>
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link></li>
            <li className="nav-item"><Link to="/deposit" className={`nav-link ${isActive('/deposit') ? 'active' : ''}`}>Deposit</Link></li>
            <li className="nav-item"><Link to="/chat" className={`nav-link ${isActive('/chat') ? 'active' : ''}`}>Chat</Link></li>
            <li className="nav-item"><Link to="/cashout" className={`nav-link ${isActive('/cashout') ? 'active' : ''}`}>Cashout</Link></li>
            <li className="nav-item"><Link to="/profile" className={`nav-link ${isActive('/profile') ? 'active' : ''}`}>Profile</Link></li>
          </ul>

          <div className="auth-controls">
            {currentUser ? (
              <>
                <span className="user-email">{currentUser.email.split('@')[0]}</span>
                <button className="btn-ghost" onClick={handleLogout}>Sign Out</button>
              </>
            ) : (
              <>
                <Link to="/signin" className="btn">Sign In</Link>
                <Link to="/signup" className="btn btn-outline">Sign Up</Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;