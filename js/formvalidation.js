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

//  Sign up Form Validation
var error_user_name = document.getElementById("error_user_name");
var error_user_email = document.getElementById("error_user_email");
var error_user_password = document.getElementById("error_user_password");
var error_user_id = document.getElementById("error_user_id");

function signupname(username) {
  if (username.value.match(letters)) {
    error_user_name.style.display = "none";
    username.style.border = "1px solid #ced4da";
    return true;
  } else {
    username.style.border = "1px solid red";
    error_user_name.style.display = "block";
    error_user_name.innerHTML = "User Name must have alphabet characters only";
    username.focus();
    return false;
  }
}
function signupemail(useremail) {
  if (useremail.value.match(mailformat)) {
    error_user_email.style.display = "none";
    useremail.style.border = "1px solid #ced4da";
    return true;
  } else {
    useremail.style.border = "1px solid red";
    error_user_email.style.display = "block";
    error_user_email.innerHTML = "Enter a valid email !";
    useremail.focus();
    return false;
  }
}
function password(userpassword) {
  if (userpassword.value.match(passw)) {
    userpassword.style.border = "1px solid #ced4da";
    return true;
  } else {
    userpassword.style.border = "1px solid red";
    error_user_password.style.display = "block";
    error_user_password.innerHTML =
      "Password 7 to 15 characters which contain at least one numeric digit and a special character !";
    userpassword.focus();
    return false;
  }
}
function signupid(userid) {
  var userid_len = userid.value.length;
  if (userid_len >= 1 && userid.value.match(numbers)) {
    userid.style.border = "1px solid #ced4da";
    error_user_id.style.display = "none";
    return true;
  } else {
    userid.style.border = "1px solid red";
    error_user_id.style.display = "block";
    error_user_id.innerHTML =
      "Membership No should not be empty  length be between 1 to 4";
    userid.focus();
    return false;
  }
}
// Login Validation

var login_error_email =document.getElementById("login_error_email")
var login_error_password =document.getElementById("login_error_password")

function loginemail(useremail) {
  if (useremail.value.match(mailformat)) {
    login_error_email.style.display = "none";
    useremail.style.border = "1px solid #ced4da";
    return true;
  } else {
    useremail.style.border = "1px solid red";
    login_error_email.style.display = "block";
    login_error_email.innerHTML = "Enter a valid email !";
    useremail.focus();
    return false;
  }
}
function loginpassword(userpassword) {
  if (userpassword.value.match(passw)) {
    userpassword.style.border = "1px solid #ced4da";
    login_error_password.style.display = "none";
    return true;
  } else {
    userpassword.style.border = "1px solid red";
    login_error_password.style.display = "block";
    login_error_password.innerHTML =
      "Password 7 to 15 characters which contain at least one numeric digit and a special character !";
    userpassword.focus();
    return false;
  }
}
// Logion Validation End
var forget_error_email = document.getElementById("forget_error_email")
 
function foremail(useremail) {
  if (useremail.value.match(mailformat)) {
    forget_error_email.style.display = "none";
    useremail.style.border = "1px solid #ced4da";
    return true;
  } else {
    useremail.style.border = "1px solid red";
    forget_error_email.style.display = "block";
    forget_error_email.innerHTML = "Enter a valid email !";
    useremail.focus();
    return false;
  }
}


export { signupname, signupemail, password, signupid ,loginemail ,loginpassword ,foremail };
