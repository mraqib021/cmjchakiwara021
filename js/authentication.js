import {
  signupemail,
  signupid,
  signupname,
  password,
  loginemail,
  foremail,
} from "./formvalidation.js";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
  ref,
  set,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  onValue,
  get,
} from "./firebase.js";

var logout_btn = document.getElementById("logout_btn");
var hide_purpose = document.getElementById("hide_purpose");
var app_submit = document.getElementById("app_submit");
// console.log(app_submit);
// User Login ?
window.check = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // console.log(user.uid);
      logout_btn.style.display = "block";
      hide_purpose.style.display = "none";
    } else {
      // console.log(app_submit);
      // console.log(user);
    }
  });
};
window.checklogin = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // console.log(user.uid);
      logout_btn.style.display = "block";
      hide_purpose.style.display = "none";
      app_submit.setAttribute("onclick", "appsubmit()");
      // console.log(app_submit);
    } else {
      app_submit.removeAttribute("onclick");
      app_submit.setAttribute("onclick", "pleaselogin()");
      // console.log(app_submit);
      // console.log(user);
    }
  });
};
// Please Login
window.pleaselogin = () => {
  swal({
    icon: "info",
    title: "Please Login",
  });
  setInterval(() => {
    window.location.replace("../pages/login.html");
  }, 2000);
};
// Logout
window.logout = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      setInterval(() => {
        logout_btn.style.display = "none";
        hide_purpose.style.display = "block";
      }, 2000);
    })
    .catch((error) => {
      // An error happened.
    });
};
// User Signup
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
              onAuthStateChanged(auth, (user) => {
                if (user) {
                  // console.log(user.uid);
                  setInterval(() => {
                    window.location.replace("../index.html");
                  }, 2000);
                } else {
                  setInterval(() => {
                    window.location.replace("login.html");
                  }, 2000);
                  // console.log(user);
                }
              });
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
var loginmail = document.getElementById("loginmail");
var loginpassw = document.getElementById("loginpassword");
var error_show = document.getElementById("error_show");
window.login = () => {
  console.log(db);
  if (loginemail(loginmail)) {
    signInWithEmailAndPassword(auth, loginmail.value, loginpassw.value)
      .then((res) => {
        // console.log(res)
        error_show.style.display = "none";
        var user = res.user;
        if (user) {
          console.log(user);
          onValue(ref(db, "users/" + user.uid), (snapshot) => {
            // console.log(snapshot);
            // console.log(snapshot.val());
            if (snapshot.exists()) {
              // console.log(value);
              swal({
                title: "Good job!",
                text: "Login Succesfully !",
                icon: "success",
              });
              setInterval(() => {
                window.location.replace("../index.html");
              }, 2000);
            } else {
              console.log(res);
              swal({
                title: "Good job!",
                text: "Admin Login Succesfully !",
                icon: "success",
              });
              onAuthStateChanged(auth, (user) => {
                if (user) {
                  // console.log(user.uid);
                  setInterval(() => {
                    window.location.replace("../adminpages/dashboard.html");
                  }, 2000);
                } else {
                  setInterval(() => {
                    window.location.replace("../login.html");
                  }, 2000);
                  // console.log(app_submit);
                  // console.log(user);
                }
              });
            }
          });
        } else {
          // User Not Available
          console.log(user);
        }
        // ...
      })
      .catch((err) => {
        error_show.style.display = "block";
        error_show.innerHTML = err.code;
        // console.log(error_show)
        // console.log(err);
      });
  }
  return false;
};

// Login Complete

// Admin Signup Start
window.adminsignup = () => {
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
              set(ref(db, "admin/" + user.uid), {
                username: username.value,
                email: useremail.value,
                password: userpassword.value,
                memberid: userid.value,
                uid: user.uid,
              });
              swal({
                title: "Good job!",
                text: "Create Admin Account Succesfully !",
                icon: "success",
              });
              setInterval(() => {
                window.location.replace("../pages/login.html");
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
// Admin Signup Complete

// Forget Password Start

var forgetemail = document.getElementById("forgetemail");
var main_box = document.getElementById("main_box");
var email_sent = document.getElementById("email_sent");
var for_error_show = document.getElementById("for_error_show");
window.forget = () => {
  if (foremail(forgetemail)) {
    sendPasswordResetEmail(auth, forgetemail.value)
      .then((res) => {
        for_error_show.style.display = "none";
        main_box.style.display = "none";
        email_sent.style.display = "block";
        setInterval(() => {
          window.location.replace("login.html");
        }, 2000);
      })
      .catch((errr) => {
        for_error_show.style.display = "block";
        for_error_show.innerHTML = errr.code;
        console.log(errr.code);
      });
  }
  return false;
};
