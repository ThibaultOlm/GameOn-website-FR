// DOM Elements
const modalbg = document.querySelector("#bgroundform");
const modalValidation = document.querySelector("#bgroundvalidation");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector("#closeform");
const modalCloseValidation = document.querySelector("#closevalidation");
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

// Click to leave modal Validation
modalCloseValidation.addEventListener("click",() => modalValidation.style.display = "none");

/*----------------------- GESTION  DU FORMULAIRE -------------------------*/

// Variables générales du formulaire

const form = document.querySelector("#formulaire");
const modalSubmit = document.querySelector(".btn-submit");

// Test récupération des données du formulaire

/* form.addEventListener('submit', submitValidateTest);

function submitValidateTest(e) {

  e.preventDefault();

  console.log("Prénom : " + firstName.value);
  console.log("Nom : " + lastName.value);
  console.log("Adresse email : " + email.value);
  console.log("Date de naissance : " + birthdayDate.value);
  console.log("Nombre de tournois : " + quantityTournament.value);

  const element = document.querySelectorAll('input[name="location"]');

  for(i = 0; i < element.length; i++) {

    if(element[i].type="checkbox") {
                  
      if(element[i].checked)
          console.log(element[i].value);
   }
  }
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
  let conditionUserValid = false;
  let regExpName = /^[A-Za-z\-]{2,}$/;
  let regExpEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let regExpNumbers = /^[0-9]*$/;

  // Vérification du champ Prénom

  const firstName = document.querySelector("#first");
  const errorFirstName = document.querySelector("#errorfirstname");

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

  const lastName = document.querySelector("#last");
  const errorLastName = document.querySelector("#errorlastname");

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

  // Vérification du champ Email

  const email = document.querySelector("#email");
  const errorEmail = document.querySelector("#erroremail");

  if (email.value == "") {
    errorEmail.innerHTML = "Veuillez préciser votre adresse email dans ce champ.";
    email.style.border = "2px solid #e54858";
    emailValid = false;
  } else if (regExpEmail.test(email.value)===false) {
      errorEmail.innerHTML = "L'adresse email saisie est incorrecte.";
      email.style.border = "2px solid #e54858";
      emailValid = false;
  }
  else {
    emailValid = true;
    email.style.border = "0px";
    errorEmail.innerHTML = "";
  }

  // Vérification du champ Date de naissance

  const birthdayDate = document.querySelector("#birthdate");
  const errorBirthdate = document.querySelector("#errorbirthdate");

  if (birthdayDate.value == "") {
    errorBirthdate.innerHTML = "Veuillez préciser votre date de naissance dans ce champ.";
    birthdayDate.style.border = "2px solid #e54858";
    birthdayDateValid = false;
  } else {
    birthdayDateValid = true;
    birthdayDate.style.border = "0px";
    errorBirthdate.innerHTML = "";
  }

  // Vérification du champ nombre de tournois GameOn

  const quantityTournament = document.querySelector("#quantity");
  const errorQuantityTournament = document.querySelector("#errorquantitytournament");

  if (quantityTournament.value == "") {
    errorQuantityTournament.innerHTML = "Veuillez préciser dans ce champ le nombre de tournois GameOn auquel vous avez participé.";
    quantityTournament.style.border = "2px solid #e54858";
    quantityTournamentValid = false;
  } else if (regExpNumbers.test(quantityTournament.value)===false) {
      errorQuantityTournament.innerHTML = "Vous devez saisir seulement des chiffres.";
      quantityTournament.style.border = "2px solid #e54858";
      quantityTournamentValid = false;
  }
  else {
    quantityTournamentValid = true;
    quantityTournament.style.border = "0px";
    errorQuantityTournament.innerHTML = "";
  }

  // Vérification du champ Radio "Quelles villes"

  const whichTown = document.querySelectorAll('input[name="location"]');
  const errorWhichTown = document.querySelector("#errorwhichtown");

  for(var i=0; i < whichTown.length; i++) {
      if(whichTown[i].checked) {
        console.log(whichTown[i].value);
        whichTownValid = true;
        errorWhichTown.innerHTML = "";
      }
  }
  if(whichTownValid===false) {
    console.log("c'est une erreur");
    errorWhichTown.innerHTML = "Veuillez sélectionner au moins un choix de ville.";
  }

  // Vérification du checkbox des conditions d'utilisation

  const conditionUser = document.querySelector("#checkbox1");
  const errorConditionUser = document.querySelector("#errorconditionuser");

  if(conditionUser.checked) {
    errorConditionUser.innerHTML = "";
    conditionUserValid = true;
  }
  else {
    errorConditionUser.innerHTML = "Veuillez acceptez les conditions d'utilisation.";
    conditionUserValid = false;
  }

  // Validation du formulaire si toutes les conditions sont respectées 

  if (firstNameValid===true && lastNameValid===true && emailValid===true && birthdayDateValid===true && quantityTournamentValid===true && whichTownValid===true && conditionUserValid===true) {
    modalbg.style.display = "none";
    modalValidation.style.display = "block";
    function removeData (){
      firstName.value ="";
      lastName.value ="";
      email.value ="";
      birthdayDate.value ="";
      quantityTournament.value ="";
      whichTown.checked ="";
    }
  }
}