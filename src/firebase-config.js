// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbUMAc5p6yz_Iik784uYS7A1iJc4zYYuE",
  authDomain: "ewave-b9bd2.firebaseapp.com",
  projectId: "ewave-b9bd2",
  storageBucket: "ewave-b9bd2.appspot.com",
  messagingSenderId: "569377793338",
  appId: "1:569377793338:web:cff140b904d805c0ea9c03",
  measurementId: "G-Q4G3LZN2YF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();