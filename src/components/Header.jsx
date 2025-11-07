import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/signin');
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  // Close mobile menu when resizing to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.mobile-menu-content') && !e.target.closest('.mobile-menu-toggle')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/deposit', label: 'Deposit' },
    { path: '/chat', label: 'Chat' },
    { path: '/loans', label: 'Loans' },
    { path: '/payback', label: 'Payback' },
    { path: '/profile', label: 'Profile' }
  ];

  return (
    <>
      <header className="money-box-header">
        <div className="header-container">
          <div className="header-brand">
            <div className="header-title">Money Box</div>
          </div>

          <button
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(v => !v)}
          >
            <span className="hamburger" />
          </button>

          <nav className="header-nav">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.path} className="nav-item">
                  <Link to={link.path} className={`nav-link ${isActive(link.path) ? 'active' : ''}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
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

      {/* Mobile menu overlay and content */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`} />
      <div className={`mobile-menu-content ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.path} className="mobile-nav-item">
              <Link to={link.path} className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-auth-controls">
          {currentUser ? (
            <>
              <div className="user-email mb-2">{currentUser.email}</div>
              <button className="btn btn-block" onClick={handleLogout}>Sign Out</button>
            </>
          ) : (
            <>
              <Link to="/signin" className="btn btn-block mb-2">Sign In</Link>
              <Link to="/signup" className="btn btn-outline btn-block">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;