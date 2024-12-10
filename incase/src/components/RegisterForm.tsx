import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './Button';
import type { UserProfile } from '../types/user';

interface RegisterFormProps {
  onSubmit: (data: Partial<UserProfile> & { password: string }) => Promise<void>;
  isLoading: boolean;
  error: string;
}

export function RegisterForm({ onSubmit, isLoading, error }: RegisterFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            {...register('fullName', { required: 'Full name is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
          {errors.fullName && (
            <span className="text-red-500 text-sm">{errors.fullName.message as string}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message as string}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password.message as string}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Blood Group</label>
          <select
            {...register('bloodGroup', { required: 'Blood group is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          {errors.bloodGroup && (
            <span className="text-red-500 text-sm">{errors.bloodGroup.message as string}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            {...register('dateOfBirth', { required: 'Date of birth is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
          {errors.dateOfBirth && (
            <span className="text-red-500 text-sm">{errors.dateOfBirth.message as string}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            {...register('phone', { required: 'Phone number is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone.message as string}</span>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <textarea
          {...register('address', { required: 'Address is required' })}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
        />
        {errors.address && (
          <span className="text-red-500 text-sm">{errors.address.message as string}</span>
        )}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Emergency Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              {...register('emergencyContact.name', { required: 'Emergency contact name is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
            {errors.emergencyContact?.name && (
              <span className="text-red-500 text-sm">{errors.emergencyContact.name.message as string}</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Relationship</label>
            <input
              type="text"
              {...register('emergencyContact.relationship', { required: 'Relationship is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
            {errors.emergencyContact?.relationship && (
              <span className="text-red-500 text-sm">{errors.emergencyContact.relationship.message as string}</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              {...register('emergencyContact.phone', { required: 'Emergency contact phone is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
            {errors.emergencyContact?.phone && (
              <span className="text-red-500 text-sm">{errors.emergencyContact.phone.message as string}</span>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Medical History</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Medical Conditions</label>
            <textarea
              {...register('medicalHistory.conditions')}
              placeholder="Enter medical conditions (one per line)"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Allergies</label>
            <textarea
              {...register('medicalHistory.allergies')}
              placeholder="Enter allergies (one per line)"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Current Medications</label>
            <textarea
              {...register('medicalHistory.medications')}
              placeholder="Enter medications (one per line)"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Consent</h3>
        <div className="space-y-2">
          <div className="flex items-start">
            <input
              type="checkbox"
              {...register('consentChecklist.dataUsage', { required: 'Data usage consent is required' })}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
            />
            <label className="ml-2 block text-sm text-gray-700">
              I consent to the storage and usage of my data for emergency purposes
            </label>
          </div>
          {errors.consentChecklist?.dataUsage && (
            <span className="text-red-500 text-sm block">{errors.consentChecklist.dataUsage.message as string}</span>
          )}

          <div className="flex items-start">
            <input
              type="checkbox"
              {...register('consentChecklist.emergencyAccess', { required: 'Emergency access consent is required' })}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
            />
            <label className="ml-2 block text-sm text-gray-700">
              I allow emergency responders to access my medical information in case of emergency
            </label>
          </div>
          {errors.consentChecklist?.emergencyAccess && (
            <span className="text-red-500 text-sm block">{errors.consentChecklist.emergencyAccess.message as string}</span>
          )}

          <div className="flex items-start">
            <input
              type="checkbox"
              {...register('consentChecklist.bloodDonor')}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
            />
            <label className="ml-2 block text-sm text-gray-700">
              I am willing to be contacted for blood donation
            </label>
          </div>
        </div>
      </div>

      <Button type="submit" isLoading={isLoading} className="w-full">
        Create Account
      </Button>
    </form>
  );
}