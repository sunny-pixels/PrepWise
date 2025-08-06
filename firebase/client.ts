import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCpnVvviESJyysuBUHRguAJe08hBzMpjPY",
  authDomain: "prepwise-e2834.firebaseapp.com",
  projectId: "prepwise-e2834",
  storageBucket: "prepwise-e2834.firebasestorage.app",
  messagingSenderId: "588048086693",
  appId: "1:588048086693:web:0b054a648e4cd916cf3f4c",
  measurementId: "G-3QEXF2796V"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);