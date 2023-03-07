// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfWZJL-dgk44zFWAW_GVlaxw8LgoRpS7Y",
  authDomain: "closhop-395cd.firebaseapp.com",
  projectId: "closhop-395cd",
  storageBucket: "closhop-395cd.appspot.com",
  messagingSenderId: "535645172716",
  appId: "1:535645172716:web:0c869f64a62d349fb546c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;