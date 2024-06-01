// Import the functions you need from the SDKs you need

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGAdW4NCcJY1SQb9CM3lyWlJjM_q0C7Ns",
  authDomain: "authentication-cb8f4.firebaseapp.com",
  projectId: "authentication-cb8f4",
  storageBucket: "authentication-cb8f4.appspot.com",
  messagingSenderId: "578387941260",
  appId: "1:578387941260:web:bd0e2aa42a5606e0b8a8a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const myAuthentication = getAuth(app);
export const provider = new GoogleAuthProvider();
