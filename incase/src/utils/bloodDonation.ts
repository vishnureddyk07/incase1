import type { UserProfile } from '../types/user';

export function checkEligibility(userData: UserProfile | null): boolean {
  if (!userData) return false;

  // Basic eligibility checks
  const disqualifyingConditions = [
    'hiv',
    'hepatitis',
    'cancer',
    'heart disease',
    'diabetes',
    'tuberculosis'
  ];

  const disqualifyingMedications = [
    'blood thinners',
    'antibiotics',
    'aspirin',
    'anticoagulants'
  ];

  const hasDisqualifyingConditions = userData.medicalHistory.conditions.some(
    condition => disqualifyingConditions.includes(condition.toLowerCase())
  );

  const hasDisqualifyingMedications = userData.medicalHistory.medications.some(
    medication => disqualifyingMedications.includes(medication.toLowerCase())
  );

  return !hasDisqualifyingConditions && !hasDisqualifyingMedications;
}