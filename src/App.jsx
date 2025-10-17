import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import SignIn from './components/Chat/SignIn';
import SignUp from './components/Chat/SignUp';
import DepositPage from './pages/DepositPage';
import Header from './components/Header';
import ChatPage from './pages/ChatPage';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';
import CashoutPage from './pages/CashoutPage';
import TestTailwind from './TestTailwind';
import { PrivateRoute } from './components/Chat/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/deposit" element={<PrivateRoute><DepositPage /></PrivateRoute>} />
          <Route path="/chat" element={<PrivateRoute><ChatPage /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
          <Route path="/cashout" element={<PrivateRoute><CashoutPage /></PrivateRoute>} />
          <Route path="/test" element={<TestTailwind />} />
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;