var members = [
  {
    SNo: 1,
    Name: "Abdul Rasheed M.Yousuf",
    Surname: "Kaliwala",
    Designation: "President",
    MobileNo: "0300-2336335",
    image: "../images/Rasheed.jpg",
  },
  {
    SNo: 2,
    Name: "Aslam Abdul Ghani",
    Surname: "Qadwani",
    Designation: "Vice President",
    MobileNo: "0300-2314001",
    image: "../images/Aslam.jpg",
  },
  {
    SNo: 3,
    Name: "Mehmood Muhammad Yousuf",
    Surname: "Kaliwala",
    Designation: "General Secetary",
    MobileNo: "0300-2336339",
    image: "../images/Mehmood.jpg",
  },
  {
    SNo: 4,
    Name: "Haji Abdullah",
    Surname: "Koraya",
    Designation: "Joint Secetary",
    MobileNo: "0300-2248950",
    image: "../images/haji.jpg",
  },
  {
    SNo: 5,
    Name: "Sajjad Yousuf",
    Surname: "Saylani",
    Designation: "Joint Secetary",
    MobileNo: "0304-8524676",
    image: "../images/Parveez.jpg",
  },
  {
    SNo: 6,
    Name: "Farooq Ali",
    Surname: "Koraya",
    Designation: "Finance Secetary",
    MobileNo: "0321-3577106",
    image: "../images/Farooq.jpg",
  },
  {
    SNo: 7,
    Name: "Muhammad Qasim",
    Surname: "Anjarwala",
    Designation: "Publicity Secetary",
    MobileNo: "0323-2898008",
    image: "../images/Qasim.jpg",
  },
  {
    SNo: 8,
    Name: "Nadeem Abdul Shakoor",
    Surname: "Javeri",
    Designation: "Member of Managing Committee",
    MobileNo: "03xx-xxxxxxx",
    image: "../images/Nadeem.jpeg",
  },
  {
    SNo: 9,
    Name: "Imran Abdul Ghani",
    Surname: "Anjarwala",
    Designation: "Member of Managing Committee",
    MobileNo: "0321-2436455",
    image: "../images/Imran.jpg",
  },
  {
    SNo: 10,
    Name: "Uzair Altaf",
    Surname: "Koraya",
    Designation: "Member of Managing Committee",
    MobileNo: "0333-4238981",
    image: "../images/Uzair.jpg",
  },
  {
    SNo: 11,
    Name: "Farrukh Abdul Aziz",
    Surname: "Surya",
    Designation: "Member of Managing Committee",
    MobileNo: "0314-2990185",
    image: "../images/Farukh.jpg",
  },
  {
    SNo: 12,
    Name: "Abdul Majeed Abdul Rehman",
    Surname: "Mullani",
    Designation: "Member of Managing Committee",
    MobileNo: "03xx-xxxxxxxx",
    image: "../images/Majeed.jpeg",
  },
  {
    SNo: 13,
    Name: "Muhammad Ashraf",
    Surname: "Potia",
    Designation: "Member of Managing Committee",
    MobileNo: "03xx-xxxxxxxxx",
    image: "../images/Ashraf.jpg",
  },
  {
    SNo: 14,
    Name: "Muhammad Imran",
    Surname: "Lakhani",
    Designation: "Member of Managing Committee",
    MobileNo: "0320-1295636",
    image: "../images/Aslam(2).jpg",
  },
  {
    SNo: 15,
    Name: "Fayyaz Muhammad Irshad",
    Surname: "Saylani",
    Designation: "Member of Managing Committee",
    MobileNo: "0323-2847189",
    image: "../images/Fayyaz.jpg",
  },
  {
    SNo: 16,
    Name: "Muhammad Jameel M.Hussain",
    Surname: "Koraya",
    Designation: "Member of Managing Committee",
    MobileNo: "0331-9207574",
    image: "../images/Jameel.jpg",
  },
  {
    SNo: 17,
    Name: "Zahid Usman",
    Surname: "Taarwala",
    Designation: "Member of Managing Committee",
    MobileNo: "0301-2173632",
    image: "../images/Zahid.jpg",
  },
];

var card_parent = document.getElementById("card_parent");
var cardshow = () => {
  for (let i = 0; i < members.length; i++) {
    card_parent.innerHTML += `<div class="custom_card">
        <div class="shape">
        <img src="../images/svg.svg"></img>
        </div>
          <div class="image">
            <img src="${members[i].image}" alt="">
          </div>
        <h4>${members[i].Name}</h4>
        <h5>${members[i].Surname}</h5>
        <h5>${members[i].Designation}</h5>
        <h5>${members[i].MobileNo}</h5>
    </div>`;
    // console.log(members[i].image);
  }
};

var table_show = document.getElementById("table_show");
var table_data_show = () => {
  for (let i = 0; i < members.length; i++) {
    table_show.innerHTML += `
    <tr>
        <td>${members[i].SNo}</td>
        <td>${members[i].Name}</td>
        <td>${members[i].Designation}</td>
        <td>${members[i].MobileNo}</td>
    </tr>`;
    // console.log(members[i].Name);
  }
};

var cmsf_card_parent = document.getElementById("cmsf_card_parent");
var cmsfcardshow = () => {
  for (let i = 0; i < members.length; i++) {
    cmsf_card_parent.innerHTML += `<div class="custom_card">
        <div class="shape">
        <img src="../images/svg.svg"></img>
        </div>
          <div class="image">
            <img src="${members[i].image}" alt="">
          </div>
        <h4>${members[i].Name}</h4>
        <h5>${members[i].Surname}</h5>
        <h5>${members[i].Designation}</h5>
        <h5>${members[i].MobileNo}</h5>
    </div>`;
  }
};
