import React from 'react';
import { Droplets } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function AuthLayout({ children, title }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-center mb-8">
          <Droplets className="h-12 w-12 text-red-500" />
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">{title}</h1>
        {children}
      </div>
    </div>
  );
}