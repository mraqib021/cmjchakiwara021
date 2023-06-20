import {
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
} from "../../js/firebase.js";

console.log(db)