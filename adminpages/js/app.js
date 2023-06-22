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
  child,
  remove,
  update,
  uploadfile,
} from "../../js/firebase.js";

var name = document.getElementById("name");
var surname = document.getElementById("surname");
var designation = document.getElementById("designation");
var mobileno = document.getElementById("mobileno");
var image = document.getElementById("image");
var close = document.getElementById("close");
window.add = async () => {
  // alert("hello");
  var reference = push(ref(db, "Managements/"));
  console.log(reference.key);
  var obj = {
    name: name.value,
    surname: surname.value,
    designation: designation.value,
    mobileno: mobileno.value,
    image: await uploadfile(image.files[0]),
  };
  obj.uid = reference.key;
  set(reference, obj);
  close.click("");
  swal({
    title: "Member Add Succesfully !",
    icon: "success",
  });
  name.value = " ";
  surname.value = " ";
  designation.value = " ";
  mobileno.value = " ";
  // image.value = " ";
  console.log(name.value);
  console.log(surname.value);
  console.log(designation.value);
  console.log(mobileno.value);
  console.log(image.files.name);
};
var card_parent = document.getElementById("card_parent");
var table_show = document.getElementById("table_show");
var managecard = document.getElementById("managecard");
window.managecardsow = () => {
  const dbRef = ref(db);
  // console.log(dbRef);
  get(child(dbRef, "Managements/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        var x = Object.values(snapshot.val());
        for (var i = 0; i < 3; i++) {
          managecard.innerHTML += `<div class="custom_card">
          <div class="shape">
          <img src="../images/svg.svg"></img>
          </div>
          <div class="image">
          <img src="${x[i].image}" alt="">
          </div>
          <h4>${x[i].name}</h4>
          <h5>${x[i].surname}</h5>
          <h5>${x[i].designation}</h5>
          <h5>${x[i].mobileno}</h5>
          </div>`;
        }
      } else {
        console.log("No Data Found");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
window.renderdataadmin = () => {
  const dbRef = ref(db);
  // console.log(dbRef);
  get(child(dbRef, "Managements/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        var x = Object.values(snapshot.val());
        var no = 1;
        for (var i = 0; i < x.length; i++) {
          var uid = `${x[i].uid}`;
          card_parent.innerHTML += `<div class="custom_card">
          <div class="shape">
          <img src="../images/svg.svg"></img>
          </div>
          <div class="image">
          <img src="${x[i].image}" alt="">
          </div>
          <h4>${x[i].name}</h4>
          <h5>${x[i].surname}</h5>
          <h5>${x[i].designation}</h5>
          <h5>${x[i].mobileno}</h5>
          <div>
          <button class="btn btn-primary py-2 px-3 rounded" data-bs-toggle="modal" data-bs-target="#editModal" onclick="editcard('${x[i].uid}')">Edit Card<button>
          <button class="btn btn-primary py-2 px-3 rounded" onclick="deletecard('${x[i].uid}')">Delete Card<button>
          </div
          </div>`;
          table_show.innerHTML += `<tr>
          <td>${no++}</td>
          <td>${x[i].name}</td>
          <td>${x[i].surname}</td>
          <td>${x[i].designation}</td>
          <td>${x[i].mobileno}</td>
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
window.renderdata = () => {
  const dbRef = ref(db);
  // console.log(dbRef);
  get(child(dbRef, "Managements/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        var x = Object.values(snapshot.val());
        var no = 1;
        for (var i = 0; i < x.length; i++) {
          var uid = `${x[i].uid}`;
          card_parent.innerHTML += `<div class="custom_card">
          <div class="shape">
          <img src="../images/svg.svg"></img>
          </div>
          <div class="image">
          <img src="${x[i].image}" alt="">
          </div>
          <h4>${x[i].name}</h4>
          <h5>${x[i].surname}</h5>
          <h5>${x[i].designation}</h5>
          <h5>${x[i].mobileno}</h5>
          </div>`;
          table_show.innerHTML += `<tr>
          <td>${no++}</td>
          <td>${x[i].name}</td>
          <td>${x[i].surname}</td>
          <td>${x[i].designation}</td>
          <td>${x[i].mobileno}</td>
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
var editname = document.getElementById("editname");
var editsurname = document.getElementById("editsurname");
var editdesignation = document.getElementById("editdesignation");
var editmobileno = document.getElementById("editmobileno");
var editimage = document.getElementById("editimage");
var closed = document.getElementById("closed");
var edituid;

window.editcard = (uid) => {
  editname.value = "";
  editsurname.value = "";
  editdesignation.value = "";
  editmobileno.value = "";
  editimage.value = "";
  console.log("uid" + uid);
  const dbRef = ref(db);
  console.log(dbRef);
  console.log(db);
  get(child(dbRef, `Managements/${uid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        let x = snapshot.val();
        console.log(x);
        editname.value = x.name;
        editsurname.value = x.surname;
        editdesignation.value = x.designation;
        editmobileno.value = x.mobileno;
        edituid = x.uid;
      } else {
        console.log("No Data Found");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
window.updatecard = async () => {
  const dbRef = ref(db);
  console.log(edituid);
  console.log(
    (editimage.files[0] == editimage.files[0] + "==" + editimage.files[0]) == ""
  );
  console.log(editimage.files.length);
  if (editimage.files.length == 0) {
    swal({
      title: "Please Enter Image",
    });
  } else {
    var obj = {
      name: editname.value,
      surname: editsurname.value,
      designation: editdesignation.value,
      mobileno: editmobileno.value,
      image: await uploadfile(editimage.files[0]),
    };
    // console.log(reference);
    var reference = ref(db, `Managements/${edituid}`);
    update(reference, obj);
    closed.click();
    window.location.reload();
  }
};
window.deletecard = (uid) => {
  console.log(uid);
  remove(ref(db, `Managements/${uid}`));
  alert("delete Complete");
  window.location.reload();
};
