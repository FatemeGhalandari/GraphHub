import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { isFirebaseConfigured } from "./config/appMode";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "graphhub-ad5d8.firebaseapp.com",
  projectId: "graphhub-ad5d8",
  storageBucket: "graphhub-ad5d8.appspot.com",
  messagingSenderId: "149619287880",
  appId: "1:149619287880:web:492f5454dba5b9a342757d",
};

// Initialize Firebase only for live app mode.
const firebase = isFirebaseConfigured ? initializeApp(firebaseConfig) : null;

export const db = firebase ? getFirestore(firebase) : null;
export default firebase;
export const auth = firebase ? getAuth(firebase) : null;
export const storage = firebase ? getStorage(firebase) : null;
