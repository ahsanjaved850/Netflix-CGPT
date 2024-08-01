// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5zEaLPC-4AOfPovLiOtRUPChVe8FPdjU",
  authDomain: "netflix-cgpt-b3ef2.firebaseapp.com",
  projectId: "netflix-cgpt-b3ef2",
  storageBucket: "netflix-cgpt-b3ef2.appspot.com",
  messagingSenderId: "131082045885",
  appId: "1:131082045885:web:76042f6dec96d2e2546ad4",
  measurementId: "G-8MED5JJCPT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
