// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3959EtqHj9ZRu0cSibhCKnN1DpNc5kVY",
  authDomain: "eatzella.firebaseapp.com",
  projectId: "eatzella",
  storageBucket: "eatzella.firebasestorage.app",
  messagingSenderId: "615547763788",
  appId: "1:615547763788:web:294199dca11eb9af3108e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
export const googleAuthProvider = new GoogleAuthProvider();
export const db= getFirestore(app);
