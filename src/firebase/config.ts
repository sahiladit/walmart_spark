import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyB36ry8DJeHkAD8GRezstmwY8fztRLyKg4",
  authDomain: "lawgic-dac0d.firebaseapp.com",
  projectId: "lawgic-dac0d",
  storageBucket: "lawgic-dac0d.firebasestorage.app",
  messagingSenderId: "516992027397",
  appId: "1:516992027397:web:2c099f5d9bf13c20c7856c",
  measurementId: "G-81PVXVXW0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;