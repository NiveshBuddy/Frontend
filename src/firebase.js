// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { signInWithPhoneNumber } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDioczyUBnGesiuPRR2nhrqIZasNTITCtE",
  authDomain: "niveshbuddy-7351d.firebaseapp.com",
  projectId: "niveshbuddy-7351d",
  storageBucket: "niveshbuddy-7351d.appspot.com",
  messagingSenderId: "1075869404000",
  appId: "1:1075869404000:web:3eb17f95a6285ac6c6ec05",
  measurementId: "G-PJ09B6LGC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);