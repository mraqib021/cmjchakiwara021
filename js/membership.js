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
// var General_Members_Show = document.getElementById("General_Members_Show");
window.all_members = () => {
  const dbRef = ref(db);
  get(child(dbRef, "Members/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        var data = Object.values(snapshot.val());
        // console.log(data);
        MembersDataWork(data);
      } else {
        console.log("No Data Found");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
//

///  Fetching Member Ship Card data Start
let data_in_paging = [],
  dataSArray = [],
  ind = 3,
  Data_render = [];
let page = 4;
let totalPages;
let Normal_members_container = document.querySelector(
    ".Normal_members_container"
  ),
  normal_memeber_search = Normal_members_container.querySelector(
    ".normal_memeber_search"
  ),
  Paging_box = Normal_members_container.querySelector(".Paging_box ul"),
  Nor_memberShip_list_table = Normal_members_container.querySelector(
    ".Nor_memberShip_list"
  );
Nor_memberShip_list_table.innerHTML = `
                    <thead class="table-dark">
                      <tr>
                        <td>S no</td>
                        <td>Membership No</td>
                        <td>Name</td>
                        <td>Father / Husband Name</td>
                        <td>Sir Name</td>
                        <td>Phone No</td>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                `;
let Nor_memberShip_list = Nor_memberShip_list_table.querySelector(
  ".Nor_memberShip_list tbody"
);
normal_memeber_search.disabled = true;

const MembersDataWork = (data) => {
  normal_memeber_search.disabled = false;
  let Data_Divider = (DI_Data, Arra) => {
    for (let d = 0; d < DI_Data.length; d += 15) {
      let DA = DI_Data.slice(d, d + 15);
      Arra.push(DA);
    }
  };
  let Data_merging = (Daata, Aarra) => {
    for (let i = 0; i < Aarra.length; i++) {
      for (let j = 0; j < Aarra[i].length; j++) {
        console.log(Aarra);
        Daata.push(Aarra[i][j]);
      }
    }
  };
  Data_Divider(data, data_in_paging);
  Data_Divider(data, Data_render);

  Create_Members_list(Data_render);
  totalPages = Data_render.length;
  Paging_box.innerHTML = createPagination(totalPages, page);

  const Search_Normal_member = (e) => {
    let IntupVal = e.target.value
      .toUpperCase()
      .split(" ")
      .join("")
      .split(".")
      .join("");
    if (IntupVal.length <= 0) {
      Data_render = data_in_paging;
      Create_Members_list(Data_render);
    }
    Create_Members_list(Data_render);
    if (IntupVal.length < 1) return;
    Data_render = [];
    dataSArray = [];
    Nor_memberShip_list.innerHTML = "";
    for (let i = 0; i < data_in_paging.length; i++) {
      for (let j = 0; j < data_in_paging[i].length; j++) {
        let person_name = data_in_paging[i][j].username
          .toUpperCase()
          .split(" ")
          .join("")
          .split(".")
          .join("");
        let person_sir_name = data_in_paging[i][j].surname
          .toUpperCase()
          .split(" ")
          .join("")
          .split(".")
          .join("");
        let person_ID = data_in_paging[i][j].member_no.split(" ").join("");
        if (
          person_name.indexOf(IntupVal) >= 0 ||
          person_sir_name.indexOf(IntupVal) >= 0 ||
          person_ID.indexOf(IntupVal) >= 0
        ) {
          dataSArray.push(data_in_paging[i][j]);
        }
      }
    }
    Data_Divider(dataSArray, Data_render);
    Create_Members_list(Data_render);
    page_no(Data_render.length, 1);
    // console.log(Data_render.length);
  };

  normal_memeber_search.addEventListener("change", Search_Normal_member);
  normal_memeber_search.addEventListener("keyup", Search_Normal_member);
  normal_memeber_search.addEventListener("keypress", Search_Normal_member);
};
window.page_no = (a, b) => {
  console.log(a, b);
  createPagination(a, b);
  ind = b - 1;
  Create_Members_list(Data_render);
};

const Create_Members_list = (Data_for_Render) => {
  if (Data_for_Render.length < 1) return;
  Nor_memberShip_list.innerHTML = "";
  Data_for_Render[ind].forEach((person) => {
    Nor_memberShip_list.innerHTML += `
        <tr>
            <td class="">${person.SNo}</td>
            <td class="person_id">${person.member_no}</td>
            <td class="person_name">${person.username}</td>
            <td class="">${person.father_husband_name}</td>
            <td class="person_sir_name">${person.surname}</td>
            <td class="person_contact">${person.mobile_number}</td>
        </tr>
        `;
  });
};

window.paging_next_page = (a, b) => {
  createPagination(a, b);
  if (data_in_paging.length == ind + 1) return;
  ind = ind + 1;
  Create_Members_list(Data_render);
};
window.paging_Previous_page = (a, b) => {
  createPagination(a, b);
  if (ind <= 0) return;
  ind = ind - 1;
  Create_Members_list(Data_render);
};
//  Fetching Member Ship Card data end

//  pagintion function
function createPagination(totalPages, page) {
  let liTag = "";
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if (page > 1) {
    liTag += `<li class="btn prev"  onclick="paging_Previous_page(${totalPages}, ${
      page - 1
    })"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
  }

  if (page > 2) {
    liTag += `<li class="first numb" onclick="page_no(${totalPages}, 1)"><span>1</span></li>`;
    if (page > 3) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }
  if (page == totalPages) {
    // 81
    beforePage = beforePage - 2; // 79
  } else if (page == totalPages - 1) {
    // 80
    beforePage = beforePage - 1;
  }
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage = afterPage + 1;
  }

  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength < 0) break;
    if (plength > totalPages) {
      continue;
    }
    if (plength == 0) {
      plength = plength + 1;
    }
    if (page == plength) {
      active = "active";
    } else {
      active = "";
    }
    liTag += `<li class="numb ${active}" onclick="page_no(${totalPages}, ${plength})"><span>${plength}</span></li>`;
  }

  if (page < totalPages - 1) {
    if (page < totalPages - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="page_no(${totalPages}, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) {
    liTag += `<li class="btn next"  onclick="paging_next_page(${totalPages}, ${
      page + 1
    })"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
  }
  Paging_box.innerHTML = liTag;
  return liTag;
}
