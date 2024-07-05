// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nitk-website-c21db.firebaseapp.com",
  projectId: "nitk-website-c21db",
  storageBucket: "nitk-website-c21db.appspot.com",
  messagingSenderId: "53146082420",
  appId: "1:53146082420:web:e2926578cdf55cb4fa4521"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);