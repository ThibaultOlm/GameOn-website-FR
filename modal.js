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

// Constantes générales du formulaire

const form = document.querySelector("#formulaire");
const modalSubmit = document.querySelector(".btn-submit");

// Click to validate form

form.addEventListener('submit', submitValidate);

// Function to validate value 

function submitValidate (e) {

  e.preventDefault(); 

  // Définition des variables 

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

  // Définition des constantes 

  const firstName = document.querySelector("#first");
  const lastName = document.querySelector("#last");
  const email = document.querySelector("#email");
  const birthdayDate = document.querySelector("#birthdate");
  const quantityTournament = document.querySelector("#quantity");
  const whichTown = document.querySelectorAll('input[name="location"]');
  const conditionUser = document.querySelector("#checkbox1");

  // Définition des constantes d'erreur 

  const errorFirstName = document.querySelector("#errorfirstname");
  const errorLastName = document.querySelector("#errorlastname");
  const errorEmail = document.querySelector("#erroremail");
  const errorBirthdate = document.querySelector("#errorbirthdate");
  const errorQuantityTournament = document.querySelector("#errorquantitytournament");
  const errorWhichTown = document.querySelector("#errorwhichtown");
  const errorConditionUser = document.querySelector("#errorconditionuser");


  // Fonction de vérification des champs
  
  function controlInput(input,inputError,textErrorEmpty, textError,regex,isValid){
    
    if (input.value == "") {
      inputError.innerHTML = textErrorEmpty;
      input.style.border = "2px solid #e54858";
      isValid = false;
    } 
    else if (regex.test(input.value)===false) {
        inputError.innerHTML = textError;
        input.style.border = "2px solid #e54858";
        isValid = false;
    } 
    else {
      isValid = true;
      input.style.border = "0px";
      inputError.innerHTML = "";
    }

    return isValid;
  }

  // Vérification du champ Prénom

  firstNameValid = controlInput(firstName,
    errorFirstName,
    "Veuillez préciser votre Prénom dans ce champ.",
    "Veuillez entrer au minimum 2 caratères et seulement des lettres.",
    regExpName,
    firstNameValid);
  
  // Vérification du champ Nom

  lastNameValid = controlInput(lastName,
    errorLastName,
    "Veuillez préciser votre Nom dans ce champ.",
    "Veuillez entrer au minimum 2 caratères et seulement des lettres.",
    regExpName,
    lastNameValid);
  
  // Méthode 2 (test)

  /* let lastName =  {
    input : lastName,
    inputError : errorLastName,
    textError : "Veuillez préciser votre Nom dans ce champ.",
    textErrorEmpty : "Veuillez entrer au minimum 2 caratères et seulement des lettres.",
    regex : regExpName,
    isValid : lastNameValid
  }

  function controlInput(element){
    
    if (element.input.value == "") {
      element.inputError.innerHTML = textErrorEmpty;
      element.input.style.border = "2px solid #e54858";
      isValid = false;
    } 
    else if (element.regex.test(element.input.value)===false) {
      element.inputError.innerHTML = element.textError;
      element.input.style.border = "2px solid #e54858";
      element.isValid = false;
    } 
    else {
      element.isValid = true;
      element.input.style.border = "0px";
      element.inputError.innerHTML = "";
    }

    return element.isValid;
  }

  lastNameValid = controlInput(lastName) */


  // Vérification du champ Email

  emailValid = controlInput(email,
    errorEmail,
    "Veuillez préciser votre adresse email dans ce champ.",
    "L'adresse email saisie est incorrecte.",
    regExpEmail,
    emailValid);
  
  // Vérification du champ Date de naissance

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

  quantityTournamentValid = controlInput(quantityTournament,
    errorQuantityTournament,
    "Veuillez préciser dans ce champ le nombre de tournois GameOn auquel vous avez participé.",
    "Vous devez saisir seulement des chiffres.",
    regExpNumbers,
    quantityTournamentValid);
  
  // Vérification du champ Radio "Quelles villes"

  for(let i=0; i < whichTown.length; i++) {
    if(whichTown[i].checked) {
        whichTownValid = true;
        errorWhichTown.innerHTML = "";
    }
  }
    if(whichTownValid===false) {
      errorWhichTown.innerHTML = "Veuillez sélectionner au moins un choix de ville.";
    }


  // Vérification du checkbox des conditions d'utilisation

  if(conditionUser.checked) {
    errorConditionUser.innerHTML = "";
    conditionUserValid = true;
  }
  else {
    errorConditionUser.innerHTML = "Veuillez acceptez les conditions d'utilisation.";
    conditionUserValid = false;
  }

  // Validation du formulaire si toutes les conditions sont respectées 

  if (firstNameValid && lastNameValid && emailValid && birthdayDateValid && quantityTournamentValid && whichTownValid && conditionUserValid) {
    modalbg.style.display = "none";
    modalValidation.style.display = "block";
    firstName.value ="";
    lastName.value ="";
    email.value ="";
    birthdayDate.value ="";
    quantityTournament.value ="";
    for(let i=0; i < whichTown.length; i++) {
      whichTown[i].checked = whichTown[i].defaultSelected;
    }
  }
}