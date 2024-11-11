// js for menu toggle

let menuItems = document.getElementById("menuItems");

function menuToggle() {
  if (menuItems.className === "topnav") {
    menuItems.className += " responsive";
  } else {
    menuItems.className = "topnav";
  }
}

// js for the image gallery

var productImg = document.getElementById("productimg");
var smallImg = document.getElementsByClassName("smallimg");

smallImg[0].onclick = function () {
  productImg.src = smallImg[0].src;
  console.log("clicked");
};

smallImg[1].onclick = function () {
  productImg.src = smallImg[1].src;
  console.log("clicked");
};

smallImg[2].onclick = function () {
  productImg.src = smallImg[2].src;
  console.log("clicked");
};

smallImg[3].onclick = function () {
  productImg.src = smallImg[3].src;
  console.log("clicked");
};

// js for the sign in and login form

let loginForm = document.getElementById("loginForm");
let rgrForm = document.getElementById("rgrForm");
let indicator = document.getElementById("indicator");

function register() {
  rgrForm.style.transform = "translateX(0px)";
  loginForm.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
}

function login() {
  rgrForm.style.transform = "translateX(300px)";
  loginForm.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
  console.log("clicked");
}
