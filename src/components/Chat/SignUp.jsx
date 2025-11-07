import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css'

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError("Passwords do not match");
    }
    try{
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/chat');
    }catch(err){
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="auth-page">
      <form onSubmit={handleSubmit} className="auth-card">
        <h2 className="auth-title">Sign Up</h2>
        {error && <div className="auth-error">{error}</div>}
        <input type="email" ref={emailRef} placeholder="Email" required className="auth-input"/>
        <input type="password" ref={passwordRef} placeholder="Password" required className="auth-input"/>
        <input type="password" ref={passwordConfirmRef} placeholder="Confirm Password" required className="auth-input"/>
        <button disabled={loading} className="auth-button">
          {loading ? (
            <>
              <span className="spinner"></span>
              Signing Up...
            </>
          ) : (
            "Sign Up"
          )}
        </button>
        <p className="auth-footer">
          Already have an account? <Link to="/signin" className="auth-link">Sign In</Link>
        </p>
      </form>
    </div>
  );
}
