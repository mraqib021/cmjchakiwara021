import {
  auth,
  createUserWithEmailAndPassword,
  db,
  ref,
  set,
  push,
} from "./firebase.js";
// Format Validation
var letters = /^[A-Za-z]+$/;
var alphanumeric = /^[0-9a-zA-Z]+$/;
var numbers = /^[0-9]+$/;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
// Format Validation
var applicantname = document.getElementById("name");
var email = document.getElementById("email");
var fathername = document.getElementById("fathername");
var surname = document.getElementById("surname");
var membershipno = document.getElementById("membershipno");
var Cnic = document.getElementById("Cnic");
var Mobilenumber = document.getElementById("Mobilenumber");
var whatsappno = document.getElementById("whatsappno");
var cnicfront = document.getElementById("cnicfront");
var cnicback = document.getElementById("cnicback");
var letterrec = document.getElementById("letterrec");
var inputAddress = document.getElementById("inputAddress");
function submit() {
  if (validatename(applicantname)) {
    if (validateEmail(email)) {
      if (validatefather(fathername)) {
        if (validatesurname(surname)) {
          if (validatemembership(membershipno, 1, 4)) {
            if (validatecnic(Cnic)) {
              if (validatemobie(Mobilenumber)) {
                if (validatewhatsno(whatsappno)) {
                  if (validateaddres(inputAddress)) {
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return false;
}
function validatename(applicantname) {
  if (applicantname.value.match(letters)) {
    return true;
  } else {
    alert("Applicant Name must have alphabet characters only");
    applicantname.focus();
    return false;
  }
}
function validateEmail(email) {
  if (email.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address !");
    email.focus();
    return false;
  }
}
function validatefather(fathername) {
  if (fathername.value.match(letters)) {
    return true;
  } else {
    alert("Father Name must have alphabet characters only");
    fathername.focus();
    return false;
  }
}
function validatesurname(surname) {
  if (surname.value.match(letters)) {
    return true;
  } else {
    alert("Surname must have alphabet characters only");
    surname.focus();
    return false;
  }
}
function validatemembership(membershipno, mx, my) {
  var membershipno_len = membershipno.value.length;
  if (membershipno_len >= mx && membershipno.value.match(numbers)) {
    return true;
  } else {
    alert(
      "Membership No should not be empty / length be between " +
        mx +
        " to " +
        my
    );
    membershipno.focus();
    return false;
  }
}
function validatecnic(Cnic) {
  if (Cnic.value.match(numbers) && Cnic.length == 11) {
    return true;
  } else {
    alert("Cnic Number must have numeric 13 characters only");
    Cnic.focus();
    return false;
  }
}
function validatemobie(Mobilenumber) {
  if (Mobilenumber.value.match(numbers) && Mobilenumber.length == 11) {
    return true;
  } else {
    alert("Mobile Number must have numeric 11 characters only");
    Mobilenumber.focus();
    return false;
  }
}
function validatewhatsno(whatsappno) {
  if (whatsappno.value.match(numbers) && whatsappno.length == 11) {
    return true;
  } else {
    alert("What's App Number must have numeric 11 characters only");
    whatsappno.focus();
    return false;
  }
}
function validateaddres(address) {
  if (address.value.match(alphanumeric)) {
    return true;
  } else {
    alert("Enter must have Alpha numeric characters only");
    address.focus();
    return false;
  }
}
var username = document.getElementById("username");
var useremail = document.getElementById("useremail");
var userpassword = document.getElementById("userpassword");
var userid = document.getElementById("userid");

window.signup = () => {
  if (signupname(username)) {
    if (signupemail(useremail)) {
      if (password(userpassword)) {
        if (signupid(userid, 1, 4)) {
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
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log("error Code ===> " + errorCode);
              console.log("error Meesage ===> " + errorMessage);
              // ..
            });
        }
      }
    }
  }
  return false;
};
function signupname(username) {
  if (username.value.match(letters)) {
    return true;
  } else {
    alert("User Name must have alphabet characters only");
    username.focus();
    return false;
  }
}
function signupemail(useremail) {
  if (useremail.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid useremail address !");
    useremail.focus();
    return false;
  }
}
function password(userpassword) {
  if (userpassword.value.match(passw)) {
    return true;
  } else {
    alert(
      "Password 7 to 15 characters which contain at least one numeric digit and a special character] !"
    );
    userpassword.focus();
    return false;
  }
}
function signupid(userid, mx, my) {
  var userid_len = userid.value.length;
  if (userid_len >= mx && userid.value.match(numbers)) {
    return true;
  } else {
    alert(
      "Membership No should not be empty / length be between " +
        mx +
        " to " +
        my
    );
    userid.focus();
    return false;
  }
}
