export interface UserProfile {
  fullName: string;
  email: string;
  dateOfBirth: string;
  bloodGroup: string;
  address: string;
  phone: string;
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
  medicalHistory: {
    conditions: string[];
    allergies: string[];
    medications: string[];
  };
  photoUrl: string;
  consentChecklist: {
    dataUsage: boolean;
    emergencyAccess: boolean;
    organDonor: boolean;
    bloodDonor: boolean;
  };
}