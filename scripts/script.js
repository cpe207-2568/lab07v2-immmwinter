// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const passWordInput = document.querySelector("#password-input");
const emailInput = document.querySelector("#email-input");
const confirmInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

passWordInput.onkeyup = () => {
  passWordInput.classList.remove("is-valid");
  passWordInput.classList.remove("is-invalid");
};

confirmInput.onkeyup = () => {
  confirmInput.classList.remove("is-valid");
  confirmInput.classList.remove("is-invalid");
};

// (lastname, email, password, confirm password)

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false;
  isEmailOk = false;
  isPassWordOK = false;
  isConfirmOK = false;

  // validate first name
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  if (lastNameInput.value.trim() === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  // validate email
  if (validateEmail(emailInput.value)) {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  } else {
    emailInput.classList.add("is-invalid");
  }

  // validate password
  if (passWordInput.value.length >= 6) {
    passWordInput.classList.add("is-valid");
    isPassWordOK = true;
  } else {
    passWordInput.classList.add("is-invalid");
  }

  // validate confirm password
  if (confirmInput.value === passWordInput.value && confirmInput.value !== "") {
    confirmInput.classList.add("is-valid");
    isConfirmOK = true;
  } else {
    confirmInput.classList.add("is-invalid");
  }

  if (
    isFirstNameOk &&
    isLastNameOk &&
    isEmailOk &&
    isPassWordOK &&
    isConfirmOK
  ) {
    alert("Registered successfully");
  }
};

// add callback function for Reset button.
resetBtn.onclick = () => {
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  passWordInput.value = "";
  confirmInput.value = "";

  const inputs = [
    firstNameInput,
    lastNameInput,
    emailInput,
    passWordInput,
    confirmInput,
  ];

  for (const input of inputs) {
    input.classList.remove("is-valid", "is-invalid");
  }
};
