// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBiLnQSOUKOJcHD3NlNXsCnV6FYfMchaQ",
  authDomain: "pantry-tracker-df0e7.firebaseapp.com",
  projectId: "pantry-tracker-df0e7",
  storageBucket: "pantry-tracker-df0e7.appspot.com",
  messagingSenderId: "786010172394",
  appId: "1:786010172394:web:d75f49bc1bd89c70c56093",
  measurementId: "G-9G83WWG8K1"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();
const firestore = getFirestore(app)


export { auth, firestore };