import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { AuthLayout } from '../components/AuthLayout';
import { RegisterForm } from '../components/RegisterForm';
import { getAuthErrorMessage } from '../utils/auth';
import type { UserProfile } from '../types/user';

export function Register() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const handleRegister = async (data: Partial<UserProfile> & { password: string }) => {
    try {
      setIsLoading(true);
      setError('');

      // Create auth account
      const userCredential = await createUserWithEmailAndPassword(auth, data.email!, data.password);

      // Prepare user profile data
      const userProfile: Partial<UserProfile> = {
        ...data,
        createdAt: new Date().toISOString(),
        medicalHistory: {
          conditions: data.medicalHistory?.conditions?.split('\n').filter(Boolean) || [],
          allergies: data.medicalHistory?.allergies?.split('\n').filter(Boolean) || [],
          medications: data.medicalHistory?.medications?.split('\n').filter(Boolean) || [],
        },
      };

      // Remove sensitive data
      delete userProfile.password;

      // Save user profile
      await setDoc(doc(db, 'users', userCredential.user.uid), userProfile);
      navigate('/dashboard');
    } catch (err: any) {
      console.error('Registration error:', err);
      setError(getAuthErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout title="Create Account">
      <RegisterForm
        onSubmit={handleRegister}
        isLoading={isLoading}
        error={error}
      />
    </AuthLayout>
  );
}