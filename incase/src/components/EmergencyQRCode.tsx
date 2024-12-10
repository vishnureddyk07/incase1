import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import type { UserProfile } from '../types/user';

interface EmergencyQRCodeProps {
  userData: UserProfile;
}

export function EmergencyQRCode({ userData }: EmergencyQRCodeProps) {
  const emergencyData = {
    name: userData.fullName,
    bloodGroup: userData.bloodGroup,
    emergencyContact: userData.emergencyContact,
    medicalConditions: userData.medicalHistory.conditions,
    allergies: userData.medicalHistory.allergies,
    medications: userData.medicalHistory.medications,
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Emergency QR Code</h2>
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <QRCodeCanvas
          value={JSON.stringify(emergencyData)}
          size={200}
          level="H"
          className="mx-auto"
        />
        <p className="text-sm text-gray-600 text-center mt-2">
          Scan this code in case of emergency
        </p>
      </div>
    </div>
  );
}