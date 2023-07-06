// Format Validation
var letters = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
var alphanumeric = /^[0-9a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
var numbers = /^[0-9]+$/;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
var imageformat = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/;
// Format Validation
var app_error_name = document.getElementById("app_error_name");
var app_error_email = document.getElementById("app_error_email");
var app_error_fathername = document.getElementById("app_error_fathername");
var app_error_surname = document.getElementById("app_error_surname");
var app_error_member = document.getElementById("app_error_member");
var app_error_cnic = document.getElementById("app_error_cnic");
var app_error_mobile = document.getElementById("app_error_mobile");
var app_error_whatsapp = document.getElementById("app_error_whatsapp");
var app_error_address = document.getElementById("app_error_address");
var app_error_cnicfront = document.getElementById("app_error_cnicfront");
var app_error_cnicback = document.getElementById("app_error_cnicback");
var app_error_letter = document.getElementById("app_error_letter");
function validatename(applicantname) {
  if (applicantname.value.match(letters)) {
    app_error_name.style.display = "none";
    applicantname.style.border = "1px solid #ced4da";
    return true;
  } else {
    applicantname.style.border = "1px solid red";
    app_error_name.style.display = "block";
    app_error_name.innerHTML =
      "Applicant Name must have alphabet characters only";
    applicantname.focus();
    return false;
  }
}
function validateEmail(email) {
  if (email.value.match(mailformat)) {
    app_error_email.style.display = "none";
    email.style.border = "1px solid #ced4da";
    return true;
  } else {
    email.style.border = "1px solid red";
    app_error_email.style.display = "block";
    app_error_email.innerHTML = "You have entered an invalid email address !";
    email.focus();
    return false;
  }
}
function validatefather(fathername) {
  if (fathername.value.match(letters)) {
    app_error_fathername.style.display = "none";
    fathername.style.border = "1px solid #ced4da";
    return true;
  } else {
    fathername.style.border = "1px solid red";
    app_error_fathername.style.display = "block";
    app_error_fathername.innerHTML =
      "Father Name must have alphabet characters only";
    fathername.focus();
    return false;
  }
}
function validatesurname(surname) {
  if (surname.value.match(letters)) {
    app_error_surname.style.display = "none";
    surname.style.border = "1px solid #ced4da";
    return true;
  } else {
    surname.style.border = "1px solid red";
    app_error_surname.style.display = "block";
    app_error_surname.innerHTML = "Surname must have alphabet characters only";
    surname.focus();
    return false;
  }
}
function validatemembership(membershipno, mx, my) {
  var membershipno_len = membershipno.value.length;
  if (membershipno_len >= mx && membershipno.value.match(numbers)) {
    app_error_member.style.display = "none";
    membershipno.style.border = "1px solid #ced4da";
    return true;
  } else {
    membershipno.style.border = "1px solid red";
    app_error_member.style.display = "block";
    app_error_member.innerHTML =
      "Membership No should not be empty / length be between " +
      mx +
      " to " +
      my;
    membershipno.focus();
    return false;
  }
}
function validatecnic(Cnic) {
  if (Cnic.value.match(numbers) && Cnic.value.length == 13) {
    app_error_cnic.style.display = "none";
    Cnic.style.border = "1px solid #ced4da";
    return true;
  } else {
    Cnic.style.border = "1px solid red";
    app_error_cnic.style.display = "block";
    app_error_cnic.innerHTML =
      "Cnic Number must have numeric 13 characters only";
    Cnic.focus();
    return false;
  }
}
function validatemobie(Mobilenumber) {
  if (Mobilenumber.value.match(numbers) && Mobilenumber.value.length == 11) {
    app_error_mobile.style.display = "none";
    Mobilenumber.style.border = "1px solid #ced4da";
    return true;
  } else {
    Mobilenumber.style.border = "1px solid red";
    app_error_mobile.style.display = "block";
    app_error_mobile.innerHTML =
      "Mobile Number must have numeric 11 characters only";
    Mobilenumber.focus();
    return false;
  }
}
function validatewhatsno(whatsappno) {
  if (whatsappno.value.match(numbers) && whatsappno.value.length == 11) {
    app_error_whatsapp.style.display = "none";
    whatsappno.style.border = "1px solid #ced4da";
    return true;
  } else {
    whatsappno.style.border = "1px solid red";
    app_error_whatsapp.style.display = "block";
    app_error_whatsapp.innerHTML =
      "What's App Number must have numeric 11 characters only";
    whatsappno.focus();
    return false;
  }
}
function validatecnicfront(cnicfrontimg) {
  if (cnicfrontimg.value.match(imageformat)) {
    app_error_cnicfront.style.display = "none";
    cnicfrontimg.style.border = "1px solid #ced4da";
    return true;
  } else {
    cnicfrontimg.style.border = "1px solid red";
    app_error_cnicfront.style.display = "block";
    app_error_cnicfront.innerHTML = "Inavlid Image Format only";
    cnicfrontimg.focus();
    return false;
  }
}
function validatecnicback(cnicbackimg) {
  if (cnicbackimg.value.match(imageformat)) {
    app_error_cnicback.style.display = "none";
    cnicbackimg.style.border = "1px solid #ced4da";
    return true;
  } else {
    cnicbackimg.style.border = "1px solid red";
    app_error_cnicback.style.display = "block";
    app_error_cnicback.innerHTML = "Inavlid Image Format only";
    cnicbackimg.focus();
    return false;
  }
}
function validateletter(letterimg) {
  if (letterimg.value.match(imageformat)) {
    app_error_letter.style.display = "none";
    letterimg.style.border = "1px solid #ced4da";
    return true;
  } else {
    letterimg.style.border = "1px solid red";
    app_error_letter.style.display = "block";
    app_error_letter.innerHTML = "Inavlid Image Format only";
    letterimg.focus();
    return false;
  }
}
function validateaddres(address) {
  if (address.value.match(alphanumeric)) {
    app_error_address.style.display = "none";
    address.style.border = "1px solid #ced4da";
    return true;
  } else {
    address.style.border = "1px solid red";
    app_error_address.style.display = "block";
    app_error_address.innerHTML =
      "Enter must have Alpha numeric characters only";
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

var login_error_email = document.getElementById("login_error_email");
var login_error_password = document.getElementById("login_error_password");

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
var forget_error_email = document.getElementById("forget_error_email");

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

export {
  signupname,
  signupemail,
  password,
  signupid,
  loginemail,
  loginpassword,
  foremail,
  validatename,
  validateEmail,
  validatefather,
  validatesurname,
  validatemembership,
  validatecnic,
  validatemobie,
  validatewhatsno,
  validateaddres,
  validatecnicfront,validatecnicback,validateletter
};
