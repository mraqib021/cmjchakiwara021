// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  get,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXWLxSQXYxQmGH7uA-dGYaewumISUKe6o",
  authDomain: "cmjchakiwara.firebaseapp.com",
  databaseURL: "https://cmjchakiwara-default-rtdb.firebaseio.com",
  projectId: "cmjchakiwara",
  storageBucket: "cmjchakiwara.appspot.com",
  messagingSenderId: "1010262813226",
  appId: "1:1010262813226:web:b4a41ecaec20ac42da3153",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export {
  auth,
  createUserWithEmailAndPassword,
  db,
  ref,
  set,
  push,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  onValue,
  get,
};
