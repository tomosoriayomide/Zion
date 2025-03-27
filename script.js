let name1 = document.getElementById("firstName");
let name2 = document.getElementById("lastName");
let mail = document.getElementById("email");
let pageOne = document.getElementById("cont1");
let pageOneb = document.getElementById("bg");
let pageTwo = document.getElementById("cont2");
let pageThree = document.getElementById("cont3");
let pageFour = document.getElementById("cont4");
let userName = document.getElementById("user");
let userName2 = document.getElementById("name2");
let error = document.getElementById("error");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");
let email1 = document.getElementById("emailUser1");
let logout = document.getElementById("logout");
let login = document.getElementById("submit");
function page2() {
  pageOneb.style.display = "none";
  pageOne.style.display = "none";
  pageTwo.style.display = "grid";
  //   name1.value = "";
  //   name2.value = "";
  //   mail.value = "";
  firstName();
  email();
  lastName();
  save();
}
function save() {
  let users = [];
  // let user = [];
  const login = {
    firstName: firstName(),
    lastName: lastName(),
    email: email(),
  };
  //   login.firstName = name1.value;
  //   login.lastName = name2.value;
  //   login.email = mail.value;
  //   let user = users++;
  console.log(login);
  users.push(JSON.stringify(login));
  // user.push(JSON.stringify(login));
  localStorage.setItem("user", users);
  // localStorage.setItem("user", user);
}
// let store = localStorage.setItem(name1.value, name2.value, mail.value);
// console.log("stored", store);
function firstName() {
  if (name1.value === "") {
    error.style.display = "flex";
    pageTwo.style.display = "none";
    pageOne.style.display = "block";
    pageOneb.style.display = "block";
    console.log("empty");
  }
  return (userName.innerHTML = name1.value);
}
function lastName() {
  if (name2.value === "") {
    error2.style.display = "flex";
    pageTwo.style.display = "none";
    pageOneb.style.display = "block";
    pageOne.style.display = "block";
    console.log("empty");
  }
  return (userName2.innerHTML = name2.value);
}
function email() {
  //   email1.innerHTML = mail.value;
  if (mail.value === "") {
    error3.style.display = "flex";
    pageTwo.style.display = "none";
    pageOneb.style.display = "block";
    pageOne.style.display = "block";
    console.log("empty");
  }
  return (email1.innerHTML = mail.value);
}
function increase() {
  login.style.marginTop = 10 + "px";
  login.style.padding = 30 + "px";
  //   login.style.boxShadow = '0px 2px 10px 10px gray';
  //   login.style.display = "none";
  // login.style.display = "none";
}
function decrease() {
  // login.style.display = "block";
  login.style.padding = 20 + "px";
  //   login.style.boxShadow = 5 + 5 + 5 + 5 + "px";
  login.style.marginTop = 0 + "px";
  //   login.style.display = "none";
}
function submit() {
  pageThree.style.display = "block";
  //   console.log("next");
}
function no() {
  pageThree.style.display = "none";
}
function yes() {
  pageThree.style.display = "none";
  pageFour.style.display = "block";
}
function logs() {
  pageOneb.style.display = "block";
  pageOne.style.display = "block";
  pageTwo.style.display = " none";
  pageThree.style.display = "none";
  pageFour.style.display = "none";
  alert("Success !!!!!");
}
// function backToHome() {
//   pageOne.style.display = "none";
//     pageTwo.style.display = "block";
//     pageThree.style.display = "block";
//     pageFour.style.display = "none";
// }
