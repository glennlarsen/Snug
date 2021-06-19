const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const formSuccess = document.querySelector("#formSuccess");

function validateForm(event){
    event.preventDefault();

    if (checkLength(name.value, 1) === true) {
        name.style.border = "1px solid green";
        nameError.style.display = "none";
    } else {
        name.style.border = "1px solid red";
        nameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        email.style.border = "1px solid green";
        emailError.style.display = "none";
    } else {
        email.style.border = "1px solid red";
        emailError.style.display = "block";
    }

    if (checkLength(message.value, 10) === true) {
        message.style.border = "1px solid green";
        messageError.style.display = "none";
    } else {
        message.style.border = "1px solid red";
        messageError.style.display = "block";
    }

    if (checkLength(name.value, 1) === true && validateEmail(email.value) === true && 
        checkLength(message.value, 10) === true) {
            formSuccess.style.display = "block";
            form.reset();
        } else {
            formSuccess.style.display = "none";
        }


}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}