import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

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
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    console.log("User authenticated:", user); // ✅ Debug log

    // Firestore Reference
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        createdAt: new Date(),
      });
      console.log("✅ User data stored in Firestore!");
    } else {
      console.log("ℹ️ User already exists in Firestore.");
    }
  } catch (error) {
    console.error("❌ Error signing in with Google:", error);
  }
};

export { auth, signInWithGoogle };
