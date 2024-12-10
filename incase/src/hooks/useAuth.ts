import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import type { UserProfile } from '../types/user';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, 
      (user) => {
        setUser(user);
        if (!user) {
          setLoading(false);
          setUserData(null);
        }
      },
      (error) => {
        console.error('Auth state error:', error);
        setError('Authentication error occurred');
        setLoading(false);
      }
    );

    return () => unsubAuth();
  }, []);

  useEffect(() => {
    let unsubDoc = () => {};

    if (user) {
      unsubDoc = onSnapshot(
        doc(db, 'users', user.uid),
        (doc) => {
          if (doc.exists()) {
            setUserData(doc.data() as UserProfile);
          } else {
            setError('User profile not found');
          }
          setLoading(false);
        },
        (error) => {
          console.error('Error fetching user data:', error);
          setError('Error loading user profile');
          setLoading(false);
        }
      );
    }

    return () => unsubDoc();
  }, [user]);

  return { user, userData, loading, error };
}