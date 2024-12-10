import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { updateProfile } from '../utils/profile';
import type { UserProfile } from '../types/user';

export function Profile() {
  const { userData } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<UserProfile>({
    defaultValues: userData
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data: UserProfile) => {
    try {
      setIsLoading(true);
      await updateProfile(data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Profile update error:', error);
      alert('Failed to update profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
            <Button variant="secondary" onClick={() => navigate('/dashboard')}>
              Back to Dashboard
            </Button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Form fields similar to Register component */}
            <Button type="submit" isLoading={isLoading} className="w-full">
              Save Changes
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}