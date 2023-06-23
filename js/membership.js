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
//
var General_Members_Show = document.getElementById("General_Members_Show");
window.all_members = () => {
  const dbRef = ref(db);
  get(child(dbRef, "Members/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        var x = Object.values(snapshot.val());
        var index = 0;
        for (var i = 0; i < 15; i++) {
          console.log(x[i]);
          index++;
          General_Members_Show.innerHTML += `
          <tr>
          <td class="text-center table_font">${index}</td>
          <td class="text-center table_font">${x[i].member_no}</td>
          <td class="text-center table_font">${x[i].username}</td>
          <td class="text-center table_font">${x[i].father_husband_name}</td>
          <td class="text-center table_font">${x[i].surname}</td>
          <td class="text-center table_font">${x[i].cnic_no}</td>
          <td class="text-center table_font">${x[i].mobile_number}</td>
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
