import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { checkEligibility } from '../utils/bloodDonation';

export function BloodDonation() {
  const { userData } = useAuth();
  const navigate = useNavigate();
  const [isEligible, setIsEligible] = React.useState<boolean | null>(null);

  const handleEligibilityCheck = () => {
    const result = checkEligibility(userData);
    setIsEligible(result);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Blood Donation</h1>
            <Button variant="secondary" onClick={() => navigate('/dashboard')}>
              Back to Dashboard
            </Button>
          </div>

          <div className="space-y-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-red-900 mb-2">
                Eligibility Check
              </h2>
              <p className="text-red-700 mb-4">
                Before proceeding with blood donation, let's check if you're eligible.
              </p>
              <Button onClick={handleEligibilityCheck}>Check Eligibility</Button>
            </div>

            {isEligible !== null && (
              <div className={`p-4 rounded-lg ${isEligible ? 'bg-green-50' : 'bg-yellow-50'}`}>
                {isEligible ? (
                  <>
                    <h3 className="text-lg font-semibold text-green-900 mb-2">
                      You're Eligible!
                    </h3>
                    <p className="text-green-700 mb-4">
                      Great news! You can proceed with blood donation.
                    </p>
                    <Button>Find Nearby Donation Centers</Button>
                  </>
                ) : (
                  <>
                    <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                      Not Eligible at This Time
                    </h3>
                    <p className="text-yellow-700">
                      Based on your medical history, you're not eligible for blood donation at this time.
                      Please consult with a healthcare provider for more information.
                    </p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}