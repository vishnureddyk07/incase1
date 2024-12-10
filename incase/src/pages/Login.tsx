import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, AuthError } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { AuthLayout } from '../components/AuthLayout';
import { AuthForm } from '../components/AuthForm';
import { getAuthErrorMessage } from '../utils/auth';

export function Login() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const handleLogin = async (data: { email: string; password: string }) => {
    try {
      setIsLoading(true);
      setError('');
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError(getAuthErrorMessage(err as AuthError));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout title="Welcome Back">
      <AuthForm
        onSubmit={handleLogin}
        isLoading={isLoading}
        error={error}
      />
      <p className="mt-4 text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <Link to="/register" className="text-red-500 hover:text-red-600 font-medium">
          Create Account
        </Link>
      </p>
    </AuthLayout>
  );
}