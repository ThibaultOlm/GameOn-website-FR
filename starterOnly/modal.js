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
modalBtn.forEach((btn) => btn.addEventListener("click",() => modalbg.style.display = "block"));

// Click to leave
modalClose.addEventListener("click",() => modalbg.style.display = "none");


/*----------------------- GESTION  DU FORMULAIRE -------------------------*/

// Variables 

const form = document.querySelector("#formulaire");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdayDate = document.querySelector("#birthdate");
const quantityTournament = document.querySelector("#quantity");
const modalSubmit = document.querySelector(".btn-submit");

// Variables d'erreurs

const errorFirstName = document.querySelector("#errorfirstname");
const errorLastName = document.querySelector("#errorlastname");
const errorEmail = document.querySelector("#erroremail");
const errorBirthdate = document.querySelector("#errorbirthdate");
const errorQuantityTournament = document.querySelector("#errorquantitytournament");
const errorWhichTown = document.querySelector("#errorwhichtown");
const errorConditionUser = document.querySelector("#errorconditionuser");

/* Test récupération des données du formulaire

form.addEventListener('submit', submitValidateTest);

function submitValidateTest(e) {

  e.preventDefault();

  console.log("Prénom : " + firstName.value);
  console.log("Nom : " + lastName.value);
  console.log("Adresse email : " + email.value);
  console.log("Date de naissance : " + birthdayDate.value);

} */

// Click to validate form

form.addEventListener('submit', submitValidate);

// Function to validate value 

function submitValidate (e) {

  e.preventDefault(); 

  let firstNameValid = false;
  let lastNameValid = false;
  let emailValid = false;
  let birthdayDateValid = false; 
  let quantityTournamentValid = false; 
  let whichTownValid = false;
  let regExpName = /^[A-Za-z\-]{2,}$/;

  // Vérification du champ Prénom 

  if (firstName.value == "") {
    errorFirstName.innerHTML = "Veuillez préciser votre Prénom dans ce champ.";
    firstName.style.border = "2px solid #e54858";
    firstNameValid = false;
  } 
  else if (regExpName.test(firstName.value)===false) {
      errorFirstName.innerHTML = "Veuillez entrer au minimum 2 caratères et seulement des lettres.";
      firstName.style.border = "2px solid #e54858";
      firstNameValid = false;
  } 
  else {
    firstNameValid = true;
    firstName.style.border = "0px";
    errorFirstName.innerHTML = "";
  }

  // Vérification du champ Nom

  if (lastName.value == "") {
    errorLastName.innerHTML = "Veuillez préciser votre Nom dans ce champ.";
    lastName.style.border = "2px solid #e54858";
    lastNameValid = false;
  } else if (regExpName.test(lastName.value)===false) {
      errorLastName.innerHTML = "Veuillez entrer au minimum 2 caratères et seulement des lettres.";
      lastName.style.border = "2px solid #e54858";
      lastNameValid = false;
  }
  else {
    lastNameValid = true;
    lastName.style.border = "0px";
    errorLastName.innerHTML = "";
  }
}