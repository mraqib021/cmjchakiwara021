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
  if (Validatename(applicantname)) {
    if (ValidateEmail(email)) {
      if (Validatefather(fathername)) {
        if (Validatesurname(surname)) {
          if (Validatemembership(membershipno, 1, 4)) {
            if (Validatecnic(Cnic)) {
              if (Validatemobie(Mobilenumber)) {
                if (Validatewhatsno(whatsappno)) {
                  if (Validateaddres(inputAddress)) {
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
var letters = /^[A-Za-z]+$/;
var alphanumeric = /^[0-9a-zA-Z]+$/;
var numbers = /^[0-9]+$/;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function Validatename(applicantname) {
  if (applicantname.value.match(letters)) {
    return true;
  } else {
    alert("Applicant Name must have alphabet characters only");
    applicantname.focus();
    return false;
  }
}
function ValidateEmail(email) {
  if (email.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address !");
    email.focus();
    return false;
  }
}
function Validatefather(fathername) {
  if (fathername.value.match(letters)) {
    return true;
  } else {
    alert("Father Name must have alphabet characters only");
    fathername.focus();
    return false;
  }
}
function Validatesurname(surname) {
  if (surname.value.match(letters)) {
    return true;
  } else {
    alert("Surname must have alphabet characters only");
    surname.focus();
    return false;
  }
}
function Validatemembership(membershipno, mx, my) {
  var membershipno_len = membershipno.value.length;
    if (membershipno_len >= mx && membershipno.value.match(numbers)) {
        return true;
    }else{
        alert("Membership No should not be empty / length be between " + mx + " to " + my);
        membershipno.focus();
        return false;
    }
}
function Validatecnic(Cnic) {
  if (Cnic.value.match(numbers) && Cnic.length == 11) {
    return true;
  } else {
    alert("Cnic Number must have numeric 13 characters only");
    Cnic.focus();
    return false;
  }
}
function Validatemobie(Mobilenumber) {
  if (Mobilenumber.value.match(numbers) && Mobilenumber.length == 11) {
    return true;
  } else {
    alert("Mobile Number must have numeric 11 characters only");
    Mobilenumber.focus();
    return false;
  }
}
function Validatewhatsno(whatsappno) {
  if (whatsappno.value.match(numbers) && whatsappno.length == 11) {
    return true;
  } else {
    alert("What's App Number must have numeric 11 characters only");
    whatsappno.focus();
    return false;
  }
}
function Validateaddres(address) {
  if (address.value.match(alphanumeric)) {
    return true;
  } else {
    alert("Enter must have Alpha numeric characters only");
    address.focus();
    return false;
  }
}


