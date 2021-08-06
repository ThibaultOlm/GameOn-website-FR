// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".content .close");
const modalIconResponsive = document.querySelector(".icon");

/*---- Fonction permettant l'affichage du menu burger en responsive-----*/

modalIconResponsive.addEventListener("click", editNav);

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive"; // x.className = x.className + " responsive"
  } else {
    x.className = "topnav";
  }
}


/*---- Fonction permettant d'ouvrir et de fermer la fenetre modale-----*/

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Click to leave
modalClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

/*----------------------- GESTION  DU FORMULAIRE -------------------------*/

// Les variables 

const form = document.querySelector("#formulaire");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdayDate = document.querySelector("#birthdate");
const quantityTournament = document.querySelector("#quantity");
const modalSubmit = document.querySelector(".btn-submit");


form.addEventListener('submit', submitValidateTest);

function submitValidateTest(e) {

  e.preventDefault();

  console.log("Prénom : " + firstName.value);
  console.log("Nom : " + lastName.value);
  console.log("Adresse email : " + email.value);
  console.log("Date de naissance : " + birthdayDate.value);

}


