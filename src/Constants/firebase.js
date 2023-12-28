// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlbxFG6LcihRjiD_41hcDnYHRJ8IU15eI",
  authDomain: "undangan-d91d9.firebaseapp.com",
  projectId: "undangan-d91d9",
  storageBucket: "undangan-d91d9.appspot.com",
  messagingSenderId: "503577077675",
  appId: "1:503577077675:web:26a8387cb25b5eca9ad4ee",
  measurementId: "G-0ZJ6W5M2C9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;