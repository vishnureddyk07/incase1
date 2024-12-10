import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA1NUvaBKVAq7vDM0eBaaOw1ysnclKPmHI",
  authDomain: "incase-632af.firebaseapp.com",
  projectId: "incase-632af",
  storageBucket: "incase-632af.firebasestorage.app",
  messagingSenderId: "218225045436",
  appId: "1:218225045436:web:ebfa3fc0eda5f7a4b345b9",
  measurementId: "G-PC5J8M2CPS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);