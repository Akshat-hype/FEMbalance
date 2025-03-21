import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4AXcpdAc0X7F4yB7b3ue8ivsJZPcSjAA",
  authDomain: "fembalance-e1cbe.firebaseapp.com",
  projectId: "fembalance-e1cbe",
  storageBucket: "fembalance-e1cbe.firebasestorage.app",
  messagingSenderId: "243117987562",
  appId: "1:243117987562:web:0497c589c035728f226993",
  measurementId: "G-Z9DXV7VCHZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, setDoc, getDoc, updateDoc, arrayUnion };
