// Get data
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const errorNodes = document.querySelectorAll(".error")

const btn = document.getElementsByClassName("submit");
const checkboxTnc = document.getElementById("dot-1");

// Data Validation
function validateForm() {

    clearMessages();

    if(!emailIsValid(emailInput.value)) {
        errorNodes[0].innerText = "Invalid email address";
        emailInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!passwordIsValid(passwordInput.value)) {
        errorNodes[1].innerText = "Please enter a valid password";
        passwordInput.classList.add("error-border");
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
    emailInput.classList.remove("error-border");
    passwordInput.classList.remove("error-border");
}

// Email Validation
function emailIsValid(emailInput) {
    let emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(emailInput);
}

// Password Validation
function passwordIsValid(passwordInput) {
    let passwordPattern = /^(?=.*[0-9])[a-zA-Z0-9]{8,10}$/;
    return passwordPattern.test(passwordInput);
}

// More Functions
function openIndex () {
    if (emailIsValid(emailInput.value), passwordIsValid(passwordInput.value)) {
        window.location.href="index.html";
    }
}