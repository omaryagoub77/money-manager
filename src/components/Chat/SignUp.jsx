import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <input type="email" ref={emailRef} placeholder="Email" required className="w-full p-2 mb-4 border rounded"/>
        <input type="password" ref={passwordRef} placeholder="Password" required className="w-full p-2 mb-4 border rounded"/>
        <input type="password" ref={passwordConfirmRef} placeholder="Confirm Password" required className="w-full p-2 mb-4 border rounded"/>
        <button disabled={loading} className="w-full bg-[#075e54] text-white p-2 rounded">Sign Up</button>
        <p className="mt-4 text-center text-gray-600">
          Already have an account? <Link to="/signin" className="text-blue-600">Sign In</Link>
        </p>
      </form>
    </div>
  );
}
