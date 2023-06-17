import {
  signupemail,
  signupid,
  signupname,
  password,
} from "./formvalidation.js";
import {
  auth,
  createUserWithEmailAndPassword,
  db,
  ref,
  set,
  push,
} from "./firebase.js";

var username = document.getElementById("username");
var useremail = document.getElementById("useremail");
var userpassword = document.getElementById("userpassword");
var userid = document.getElementById("userid");
var error_show = document.getElementById("error_show");

window.signup = () => {
  if (signupname(username)) {
    if (signupemail(useremail)) {
      if (password(userpassword)) {
        if (signupid(userid)) {
          createUserWithEmailAndPassword(
            auth,
            useremail.value,
            userpassword.value
          )
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user.uid);
              set(ref(db, "users/" + user.uid), {
                username: username.value,
                email: useremail.value,
                password: userpassword.value,
                memberid: userid.value,
                uid: user.uid,
              });
              swal({
                title: "Good job!",
                text: "Create Account Succesfully !",
                icon: "success",
              });
              setInterval(() => {
                window.location.replace("../index.html");
              }, 2000);
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // console.log("error Code ===> " + errorCode);
              // console.log("error Meesage ===> " + errorMessage);
              error_show.innerHTML = errorMessage;
              error_show.style.display = "block";
              // ..
            });
        }
      }
    }
  }
  return false;
};
//  Signup Complete

// Login Start
