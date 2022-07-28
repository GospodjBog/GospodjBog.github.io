document.querySelector("h1").onclick = function () {
  let reName = document.querySelector("h1");
  reName.textContent = "Я же попросил не нажимать";
};

document.querySelector("h2").onclick = function () {
  let reName = document.querySelector("h2");
  reName.textContent = `Хватит нажимать, там же написано "НЕ НАЖИМАТЬ"`;
};

let myButton1 = document.getElementById("1");

myButton1.onclick = function () {
  let myImage = document.querySelector("img");
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Лисичка.jpg") {
    myImage.setAttribute("src", "images/Лисичка2.jpg");
  } else {
    myImage.setAttribute("src", "images/Лисичка.jpg");
  }
};

var myButton2 = document.getElementById("2");
var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Привет, моя любимая, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Привет, моя любимая, " + storedName;
}

myButton2.onclick = function () {
  setUserName();
};

docum
