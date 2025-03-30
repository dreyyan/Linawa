// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdoC_34ywdY67BtE4hMpntAogZ2C0lgUA",
  authDomain: "democratech-f02ef.firebaseapp.com",
  projectId: "democratech-f02ef",
  storageBucket: "democratech-f02ef.firebasestorage.app",
  messagingSenderId: "263175884617",
  appId: "1:263175884617:web:aff1bffeeed88d86bb5498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);