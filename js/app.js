var members = [
  {
    SNo: 1,
    Name: "Abdul Rasheed M.Yousuf Kaliwala",
    Designation: "President",
    MobileNo: "0300-2336335",
  },
  {
    SNo: 2,
    Name: "Aslam Abdul Ghani Qadwani",
    Designation: "Vice President",
    MobileNo: "0300-2314001",
  },
  {
    SNo: 3,
    Name: "Mehmood M Yousuf Kaliwala",
    Designation: "General Secetary",
    MobileNo: "0300-2336339",
  },
  {
    SNo: 4,
    Name: "Haji Abdullah Koraya",
    Designation: "Joint Secetary",
    MobileNo: "0300-2248950",
  },
  {
    SNo: 5,
    Name: "Sajjad Yousuf Saylani",
    Designation: "Joint Secetary",
    MobileNo: "0304-8524676",
  },
  {
    SNo: 6,
    Name: "Farooq Ali Koraya",
    Designation: "Finance Secetary",
    MobileNo: "0321-3577106",
  },
  {
    SNo: 7,
    Name: "Muhammad Qasim Anjarwala",
    Designation: "Publicity Secetary",
    MobileNo: "0323-2898008",
  },
  {
    SNo: 8,
    Name: "Nadeem Abdul Shakoor Javeri",
    Designation: "Member of Managing Committee",
    MobileNo: "03xx-xxxxxxx",
  },
  {
    SNo: 9,
    Name: "Imran Abdul Ghani Anjarawala",
    Designation: "Member of Managing Committee",
    MobileNo: "0321-2436455",
  },
  {
    SNo: 10,
    Name: "Uzair Altaf Koraya",
    Designation: "Member of Managing Committee",
    MobileNo: "0333-4238981",
  },
  {
    SNo: 11,
    Name: "Farrukh Abdul Aziz Surya",
    Designation: "Member of Managing Committee",
    MobileNo: "0314-2990185",
  },
  {
    SNo: 12,
    Name: "Abdul Majeed Abdul Rehman Mulani",
    Designation: "Member of Managing Committee",
    MobileNo: "03xx-xxxxxxxx",
  },
  {
    SNo: 13,
    Name: "Muhammad Ashraf Potia",
    Designation: "Member of Managing Committee",
    MobileNo: "03xx-xxxxxxxxx",
  },
  {
    SNo: 14,
    Name: "Muhammad Imran Lakhani",
    Designation: "Member of Managing Committee",
    MobileNo: "0320-1295636",
  },
  {
    SNo: 15,
    Name: "Fayyaz Muhammad Irshad Saylani",
    Designation: "Member of Managing Committee",
    MobileNo: "0323-2847189",
  },
  {
    SNo: 16,
    Name: "Muhammad Jameel M.Hussain Koraya",
    Designation: "Member of Managing Committee",
    MobileNo: "0331-9207574",
  },
  {
    SNo: 17,
    Name: "Zahid Usman Tarwala",
    Designation: "Member of Managing Committee",
    MobileNo: "0301-2173632",
  },
];

var card_parent = document.getElementById("card_parent");

var cardshow = () => {
  for (let i = 0; i < members.length; i++) {
    card_parent.innerHTML += `<div class="custom_card">
        <div class="shape">
            <div class="image"></div>
        </div>
        <h4>${members[i].Name}</h4>
        <h6>${members[i].Designation}</h6>
        <h6>${members[i].MobileNo}</h6>
    </div>`;
    console.log(members[i].Name);
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
    console.log(members[i].Name);
  }
};

cardshow();
table_data_show();
