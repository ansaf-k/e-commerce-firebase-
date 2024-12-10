import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqXp7Z7LZ5qjbASBPfiCxXg9SgBSSxYl4",
  authDomain: "ecommerce-a05f4.firebaseapp.com",
  projectId: "ecommerce-a05f4",
  storageBucket: "ecommerce-a05f4.firebasestorage.app",
  messagingSenderId: "431818659288",
  appId: "1:431818659288:web:c46407f4ab8b2c6580cead",
  measurementId: "G-D509D3C3WJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
