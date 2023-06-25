import {
  validatename,
  validateEmail,
  validatefather,
  validatesurname,
  validatemembership,
  validatecnic,
  validatemobie,
  validatewhatsno,
  validateaddres,
  validatecnicfront,
  validatecnicback,
  validateletter,
} from "./formvalidation.js";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
  ref,
  set,
  push,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  onValue,
  child,
  get,
  uploadfile,
  update,
} from "./firebase.js";
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
// Application Submit Start
window.appsubmit = async () => {
  if (validatename(applicantname)) {
    if (validateEmail(email)) {
      if (validatefather(fathername)) {
        if (validatesurname(surname)) {
          if (validatemembership(membershipno, 1, 4)) {
            if (validatecnic(Cnic)) {
              if (validatemobie(Mobilenumber)) {
                if (validatewhatsno(whatsappno)) {
                  if (validatecnicfront(cnicfront)) {
                    if (validatecnicback(cnicback)) {
                      if (validateletter(letterrec)) {
                        if (validateaddres(inputAddress)) {
                          var reference = push(ref(db, "Applications/"));
                          // console.log(reference.key);
                          var obj = {
                            name: applicantname.value,
                            email: email.value,
                            fathername: fathername.value,
                            surname: surname.value,
                            membership: membershipno.value,
                            cnicno: Cnic.value,
                            mobilenumber: Mobilenumber.value,
                            whatsappno: whatsappno.value,
                            cnicfrontimg: await uploadfile(cnicfront.files[0]),
                            cnicbackimg: await uploadfile(cnicback.files[0]),
                            letterrecimg: await uploadfile(letterrec.files[0]),
                            address: inputAddress.value,
                          };
                          obj.uid = reference.key;
                          set(reference, obj);
                        }
                      }
                    }
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
};
// Application Submit Complete
var application_show = document.getElementById("application_show");
window.application_data_show = () => {
  const dbRef = ref(db);
  get(child(dbRef, "Applications/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        var x = Object.values(snapshot.val());
        // console.log(x);
        var index = 0;
        for (var i = 0; i < x.length; i++) {
          index++;
          application_show.innerHTML += `
            <tr data-bs-toggle="modal" data-bs-target="#exampleModal" style="cursor: pointer;" onclick="call('${x[i].uid}')">
            <td class="text-center">${index}</td>
            <td class="text-center">${x[i].name}</td>
            <td class="text-center">${x[i].fathername}</td>
            <td class="text-center">${x[i].membership}</td>
            <td class="text-center">${x[i].cnicno}</td>
            <td class="text-center">${x[i].mobilenumber}</td>
            </tr>`;
        }
      } else {
        console.log("No Data Found");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
// Application Data Render
var Review_content = document.getElementById("Review_content");
window.call = (id) => {
  const dbRef = ref(db);
  get(child(dbRef, `Applications/${id}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        let x = snapshot.val();
        // console.log(x);
        Review_content.innerHTML = `
                <div class="row g-3">
                    <div class="col-12">
                        <div class="box">
                        <h6>Name : ${x.name}</h6>
                        <h6>Email : ${x.email}</h6>
                        <h6>Contact Number : ${x.mobilenumber}</h6>
                        <h6>Surname : ${x.surname}</h6>
                        <h6>Membership No : ${x.membership}</h6>
                        <h6>Address : ${x.address}</h6>
                        <img width="100%" style="object-fit:contain;" heigth="100px" src="${x.letterrecimg}"/>
                    </div>
                  </div>
                 <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" onclick="reject('${x.uid}')">Reject</button>
                      <button type="button" class="btn btn-primary" onclick="approve('${x.uid}')">Approve</button>
                </div>
          `;
      } else {
        console.log("No Data Found");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(id);
};
window.approve = (id) => {
  setInterval(() => {
    window.location.reload();
  }, 2000);
  var obj = {
    status: "Approved",
  };
  var reference = ref(db, `Applications/${id}`);
  console.log(reference);
  console.log(id);
  update(reference, obj);
};
window.reject = (id) => {
  setInterval(() => {
    window.location.reload();
  }, 2000);
  var obj = {
    status: "Rejected",
  };
  var reference = ref(db, `Applications/${id}`);
  console.log(reference);
  console.log(id);
  update(reference, obj);
};
var approved_application_show = document.getElementById(
  "approved_application_show"
);
window.approved_application = () => {
  const dbRef = ref(db);
  get(child(dbRef, "Applications/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        var x = Object.values(snapshot.val());
        // console.log(x);
        for (var i = 0; i < x.length; i++) {
          // console.log(x[i].status)
          if (x[i].status == "Approved") {
            // console.log(x[i].status);
            // console.log(x[i].uid);
            var index = 0;
            index++;
            approved_application_show.innerHTML += `
              <tr>
              <td class="text-center">${index}</td>
              <td class="text-center">${x[i].name}</td>
              <td class="text-center">${x[i].fathername}</td>
              <td class="text-center">${x[i].membership}</td>
              <td class="text-center">${x[i].cnicno}</td>
              <td class="text-center">${x[i].mobilenumber}</td>
              </tr>`;
          }
        }
      } else {
        console.log("No Data Found");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
// Rejected Application Render
var Rejected_application_show = document.getElementById(
  "Rejected_application_show"
);
window.rejected_application = () => {
  const dbRef = ref(db);
  get(child(dbRef, "Applications/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        var x = Object.values(snapshot.val());
        // console.log(x);
        for (var i = 0; i < x.length; i++) {
          // console.log(x[i].status)
          if (x[i].status == "Rejected") {
            // console.log(x[i].status);
            // console.log(x[i].uid);
            var index = 0;
            index++;
            Rejected_application_show.innerHTML += `
              <tr>
              <td class="text-center">${index}</td>
              <td class="text-center">${x[i].name}</td>
              <td class="text-center">${x[i].fathername}</td>
              <td class="text-center">${x[i].membership}</td>
              <td class="text-center">${x[i].cnicno}</td>
              <td class="text-center">${x[i].mobilenumber}</td>
              </tr>`;
          }
        }
      } else {
        console.log("No Data Found");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
// Pending Applications Render
var Pending_application_show = document.getElementById(
  "Pending_application_show"
);
window.pending_application = () => {
  const dbRef = ref(db);
  get(child(dbRef, "Applications/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        var x = Object.values(snapshot.val());
        console.log(typeof x);
        for (var i = 0; i < x.length; i++) {
          // console.log(x[i].status)
          if (x[i].status == undefined) {
            // console.log(x[i].status);
            // console.log(x[i].uid);
            var index = 0;
            index++;
            Pending_application_show.innerHTML += `
              <tr>
              <td class="text-center">${index}</td>
              <td class="text-center">${x[i].name}</td>
              <td class="text-center">${x[i].fathername}</td>
              <td class="text-center">${x[i].membership}</td>
              <td class="text-center">${x[i].cnicno}</td>
              <td class="text-center">${x[i].mobilenumber}</td>
              </tr>`;
          }
        }
      } else {
        Pending_application_show.innerHTML = `<p>No Application Pending</p>`;
        console.log("No Data Found");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
