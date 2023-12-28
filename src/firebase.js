import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "graphhub-ad5d8.firebaseapp.com",
  projectId: "graphhub-ad5d8",
  storageBucket: "graphhub-ad5d8.appspot.com",
  messagingSenderId: "149619287880",
  appId: "1:149619287880:web:492f5454dba5b9a342757d",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
export const auth = getAuth();
