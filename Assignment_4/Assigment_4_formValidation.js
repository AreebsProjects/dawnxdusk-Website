 // This file is a collection of validation functions. Each funcion fires
// on the onblur event and validates the specific field it is assigned to

const form = document.querySelector("#myForm");
var formHasErrors = false;

function validateFirstName(evt) {
  let element = document.querySelector("#firstname");
  let valid = /^[a-z.'-]+$/i.test(element.value);
  console.log(valid);
  if (!valid && element.value.length != 0) {
    console.log();
    element.setCustomValidity(
      "Please only use letters, apostrophes and dashes"
    );
    checkForErrors(element);
  } else {
    element.setCustomValidity("");
  }
}

function validateMiddleInitial(evt) {
  let element = document.querySelector("#midinit");
  let valid = /^[a-z]+$/i.test(element.value);

  if (!valid && element.value.length != 0) {
    element.setCustomValidity("Please only use letters");
    checkForErrors(element);
  } else {
    element.setCustomValidity("");
  }
}

function validateLastName(evt) {
  let element = document.querySelector("#lastname");
  let valid = /^[a-z.'-]+$/i.test(element.value);

  if (!valid && element.value.length != 0) {
    element.setCustomValidity(
      "Please only use letters, apostrophes and dashes"
    );
    checkForErrors(element);
  } else {
    element.setCustomValidity("");
  }
}

function validateDOB(evt) {
  let element = document.querySelector("#dob");
  let date = new Date(element.value);
  let dateAgo = new Date();
  let today = new Date();

  dateAgo.setFullYear(today.getFullYear() - 120);

  if (date >= today) {
    element.setCustomValidity("Date cannot be today or in the future");
    checkForErrors(element);
    return;
  } else {
    element.setCustomValidity("");
  }
  if (date <= dateAgo) {
    element.setCustomValidity("Date cannot be more than 120 years ago");
    checkForErrors(element);
    return;
  } else {
    element.setCustomValidity("");
  }
}

function validateEmail(evt) {
  let element = document.querySelector("#email");
  let valid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
    element.value
  );
  if (!valid && element.value.length != 0) {
    element.setCustomValidity("Please provide a valid email address");
    checkForErrors(element);
  } else {
    element.setCustomValidity("");
  }
}

function validateUsername(evt) {
  let element = document.querySelector("#username");
  let valid = /^[a-z0-9.'-_]+$/i.test(element.value);

  if (/^[0-9]+$/.test(element.value[0])) {
    element.setCustomValidity("First character may only be a letter");
    checkForErrors(element);
  } else {
    element.setCustomValidity("");
  }
  if (!valid && element.value.length != 0) {
    element.setCustomValidity(
      "Please only use numbers, letters, dashes and underscores"
    );
    checkForErrors(element);
  } else {
    element.setCustomValidity("");
  }
}

function validatePassword(evt) {
  let element = document.querySelector("#password");
  let valid = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z]).+$/.test(element.value);

  console.log(valid);

  if (!valid && element.value.length != 0) {
    element.setCustomValidity(
      "Password must contain at least one lowercase letter, one uppercase letter and a number"
    );
    checkForErrors(element);
  } else {
    element.setCustomValidity("");
  }
}

function checkForErrors(element) {
  if (formHasErrors) {
    formHasErrors = false;
  } else {
    element.reportValidity();
    formHasErrors = true;
  }
}
