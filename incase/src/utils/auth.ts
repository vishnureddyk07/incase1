import { AuthError } from 'firebase/auth';

export const getAuthErrorMessage = (error: AuthError): string => {
  switch (error.code) {
    case 'auth/invalid-credential':
      return 'Invalid email or password. Please check your credentials and try again.';
    case 'auth/user-not-found':
      return 'No account found with this email. Please check your email or create a new account.';
    case 'auth/wrong-password':
      return 'Incorrect password. Please try again or reset your password.';
    case 'auth/too-many-requests':
      return 'Too many failed login attempts. Please try again later or reset your password.';
    case 'auth/email-already-in-use':
      return 'An account with this email already exists. Please login or use a different email.';
    case 'auth/weak-password':
      return 'Password is too weak. Please use a stronger password with at least 6 characters.';
    default:
      return 'An unexpected error occurred. Please try again later.';
  }
};