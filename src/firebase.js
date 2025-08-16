

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBRPHgeWKFllWI91xIizwyN6vf5_ewRyFA",
  authDomain: "quantora-website.firebaseapp.com",
  projectId: "quantora-website",
  storageBucket: "quantora-website.firebasestorage.app",
  messagingSenderId: "847030502235",
  appId: "1:847030502235:web:1e267872d92ba7f8fd507e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };