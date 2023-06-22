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
  child,
  remove,
  update,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
import {
  ref as sRef,
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-storage.js";

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXWLxSQXYxQmGH7uA-dGYaewumISUKe6o",
  authDomain: "cmjchakiwara.firebaseapp.com",
  storageURL: "https://cmjchakiwara-default-rtdb.firebaseio.com",
  projectId: "cmjchakiwara",
  storageBucket: "cmjchakiwara.appspot.com",
  messagingSenderId: "1010262813226",
  appId: "1:1010262813226:web:b4a41ecaec20ac42da3153",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);
// Storage Image Upload
let uploadfile = (file) => {
  return new Promise((resolve, reject) => {
    console.log(file);
    const storageRef = sRef(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        reject(error);
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
          console.log("File available at", downloadURL);
        });
      }
    );
  });
};

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
  child,
  remove,
  update,
  uploadfile,
};
