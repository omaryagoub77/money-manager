import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import { PrivateRoute } from './components/Chat/PrivateRoute';

const SignIn = lazy(() => import('./components/Chat/SignIn'));
const SignUp = lazy(() => import('./components/Chat/SignUp'));
const DepositPage = lazy(() => import('./pages/DepositPage'));
const ChatPage = lazy(() => import('./pages/ChatPage'));
const Home = lazy(() => import('./pages/Home'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const CashoutPage = lazy(() => import('./pages/CashoutPage'));
const TestTailwind = lazy(() => import('./TestTailwind'));

function App() {
  return (
    <AuthProvider>
      <Header />
      <Suspense fallback={<div style={{padding:20}}>Loading...</div>}>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/deposit" element={<PrivateRoute><DepositPage /></PrivateRoute>} />
          <Route path="/chat" element={<PrivateRoute><ChatPage /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
          <Route path="/cashout" element={<PrivateRoute><CashoutPage /></PrivateRoute>} />
          <Route path="/test" element={<TestTailwind />} />
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;