import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

export function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
      <div className="grid gap-3">
        <Button
          onClick={() => navigate('/blood-donation')}
          className="w-full"
        >
          Blood Donation
        </Button>
        <Button
          variant="secondary"
          onClick={() => window.print()}
          className="w-full"
        >
          Print Emergency Card
        </Button>
      </div>
    </div>
  );
}