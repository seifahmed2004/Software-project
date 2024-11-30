import React, { useState } from 'react';
import { AuthCard } from '../components/auth/AuthCard';
import { AuthInput } from '../components/auth/AuthInput';
import { AuthButton } from '../components/auth/AuthButton';
import { validateEmail, validatePassword } from '../utils/validation';
import { useFormError } from '../hooks/useFormError';

export function Login({ onSwitchMode }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { errors, setError, clearError, clearAllErrors } = useFormError();

  const validateForm = () => {
    let isValid = true;

    if (!email) {
      setError('email', 'Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setError('email', 'Please enter a valid email');
      isValid = false;
    } else {
      clearError('email');
    }

    if (!password) {
      setError('password', 'Password is required');
      isValid = false;
    } else if (!validatePassword(password)) {
      setError('password', 'Password must be at least 8 characters');
      isValid = false;
    } else {
      clearError('password');
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearAllErrors();
    
    if (validateForm()) {
      // Handle login logic here
      console.log('Login form is valid', { email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <AuthCard title="Sign In">
        <AuthInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          required
        />
        <AuthInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          required
        />
        <AuthButton type="submit">Sign In</AuthButton>
        
        <p className="text-center mt-4">
           Don't have an account?{' '}
           <button type="button" onClick={onSwitchMode} className="link">
            Sign Up
           </button>
        </p>
      </AuthCard>
    </form>
  );
}