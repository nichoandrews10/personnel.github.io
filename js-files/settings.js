// Get Data
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector("#email");
const phoneNumberInput = document.querySelector("#phone-number");
const addressInput = document.querySelector("#address");
const birthDateInput = document.querySelector("#birth-date");
const passwordInput = document.querySelector("#password");
const errorNodes = document.querySelectorAll(".error")

const btn = document.getElementsByClassName("submit");

function validateForm() {

    clearMessages();

    if(nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(addressInput.value.length < 1) {
        errorNodes[1].innerText = "Please enter your address";
        addressInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(emailInput.value)) {
        errorNodes[3].innerText = "Invalid email address";
        emailInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!phoneNoIsValid(phoneNumberInput.value)) {
        errorNodes[4].innerText = "Please enter a valid phone number";
        phoneNumberInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){
        success.innerText = "Success!";
    }
}

// Clear Error
function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    emailInput.classList.remove("error-border");
    phoneNumberInput.classList.remove("error-border");
    addressInput.classList.remove("error-border");
}

// Email Validation
function emailIsValid(emailInput) {
    let emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(emailInput);
}

// Phone Number Validation
function phoneNoIsValid(phoneNumberInput) {
    let phonePattern = /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/g;
    return phonePattern.test(phoneNumberInput);
}

// Password Validation
function passwordIsValid(passwordInput) {
    let passwordPattern = /^(?=.*[0-9])[a-zA-Z0-9]{8,10}$/;
    return passwordPattern.test(passwordInput);
}