import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const { currentUser } = useAuth();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="money-box-header">
      <div className="header-container">
        <nav className="header-nav">
          <div className="header-title">Money Box</div>
          <ul className="nav-list">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/deposit" 
                className={`nav-link ${isActive('/deposit') ? 'active' : ''}`}
              >
                Deposit
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/chat" 
                className={`nav-link ${isActive('/chat') ? 'active' : ''}`}
              >
                Chat
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/cashout" 
                className={`nav-link ${isActive('/cashout') ? 'active' : ''}`}
              >
                Cashout
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/profile" 
                className={`nav-link ${isActive('/profile') ? 'active' : ''}`}
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;