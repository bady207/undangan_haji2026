import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC73fFe6nNRczJwvKGPtk8JsSK7-Nli4Q0",
  authDomain: "feedback-bab71.firebaseapp.com",
  projectId: "feedback-bab71",
  storageBucket: "feedback-bab71.firebasestorage.app",
  messagingSenderId: "24649810135",
  appId: "1:24649810135:web:f301d3129c2c16f7c47092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);