// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "graphhub-ad5d8.firebaseapp.com",
  projectId: "graphhub-ad5d8",
  storageBucket: "graphhub-ad5d8.appspot.com",
  messagingSenderId: "149619287880",
  appId: "1:149619287880:web:492f5454dba5b9a342757d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
