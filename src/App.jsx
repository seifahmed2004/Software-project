import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Login } from './pages/Login';
import { SignUp } from './pages/Signup';
import Home from './pages/Home';

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = (navigate) => {
    setIsLogin((prev) => {
      const nextMode = !prev;
      navigate(nextMode ? '/login' : '/signup'); // Navigate to the appropriate page
      return nextMode;
    });
  };

  return (
    <Router>
      <div className="auth-container">
        <div className="auth-header">
          <div className="auth-logo">
            <img src="/chefhat.svg" alt="Chef Hat" style={{ width: '50px', height: '50px' }} />
            <h1 className="auth-title">Gather & Cook</h1>
          </div>
          <p className="auth-subtitle">Your personal recipe collection</p>
        </div>

        <Routes>
          <Route
            path="/"
            element={<Navigate to={isLogin ? "/login" : "/signup"} replace />}
          />
          <Route
            path="/login"
            element={<WithNavigation Component={Login} onSwitchMode={toggleAuthMode} />}
          />
          <Route
            path="/signup"
            element={<WithNavigation Component={SignUp} onSwitchMode={toggleAuthMode} />}
          />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

// Helper component to provide navigation to Login and SignUp
function WithNavigation({ Component, onSwitchMode }) {
  const navigate = useNavigate();
  return <Component onSwitchMode={() => onSwitchMode(navigate)} />;
}
