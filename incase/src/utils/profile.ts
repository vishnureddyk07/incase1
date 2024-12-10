import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import type { UserProfile } from '../types/user';

export async function updateProfile(data: UserProfile): Promise<void> {
  if (!auth.currentUser) {
    throw new Error('No authenticated user');
  }

  const userRef = doc(db, 'users', auth.currentUser.uid);
  await updateDoc(userRef, data);
}