function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive"; // x.className = x.className + " responsive"
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".content .close");
const modalIconResponsive = document.querySelector(".icon");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

modalClose.addEventListener("click", closeModal);

modalIconResponsive.addEventListener("click", editNav);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}