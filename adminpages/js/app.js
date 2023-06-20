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
  ref as sRef,
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "../../js/firebase.js";
// Storage Image Upload
var uploadfile = (file) => {
  return new Promise((resolve, reject) => {
    console.log(file);
    const storage = getStorage();
    const storageRef = sRef(storage, `management/${file}`);
    console.log(file);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
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
        // Handle unsuccessful uploads
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

var name = document.getElementById("name");
var surname = document.getElementById("surname");
var designation = document.getElementById("designation");
var mobileno = document.getElementById("mobileno");
var image = document.getElementById("image");

window.add = async () => {
  alert("hello");
  var reference = push(ref(db, "Managements/"));
  console.log(reference.key)
  set(reference, obj);
  var obj = {
    name: name.value,
    surname: surname.value,
    designation: designation.value,
    mobileno: mobileno.value,
    image: await uploadfile(image.value),
  };
  // obj.uid = reference.key;

  console.log(name.value);
  console.log(surname.value);
  console.log(designation.value);
  console.log(mobileno.value);
  console.log(image.value);
};
