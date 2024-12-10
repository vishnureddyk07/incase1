import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { EmergencyQRCode } from '../components/EmergencyQRCode';
import { QuickActions } from '../components/QuickActions';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';

export function Dashboard() {
  const { user, userData, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || !userData)) {
      navigate('/', { replace: true });
    }
  }, [user, userData, loading, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user || !userData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome, {userData.fullName}
            </h1>
            <div className="space-x-2">
              <Button onClick={() => navigate('/profile')} variant="secondary">
                Edit Profile
              </Button>
              <Button onClick={handleLogout} variant="secondary">
                Logout
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <EmergencyQRCode userData={userData} />
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
}