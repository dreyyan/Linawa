// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4OAxyiqm1UgyCJj0zptPNsWQxWa7Nwq0",
  authDomain: "voteph-democratech.firebaseapp.com",
  databaseURL: "https://voteph-democratech-default-rtdb.firebaseio.com",
  projectId: "voteph-democratech",
  storageBucket: "voteph-democratech.firebasestorage.app",
  messagingSenderId: "709154236329",
  appId: "1:709154236329:web:6925c590c62be4d0ed06b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db, collection, addDoc};
