 document.getElementById("date").innerHTML = new Date().toLocaleDateString();

const firstNameCookie = document.getElementById("cookie-first-name");
const secondNameCookie = document.getElementById("second-first-name-cookie");
const cookieContainer = document.getElementById("cookie-container");

if (getCookie("firstName")) {
  firstNameCookie.innerText = getCookie("firstName");
  secondNameCookie.innerText = getCookie("firstName");
} else {
  console.log(cookieContainer);
  firstNameCookie.innerText = "New user";
  cookieContainer.style.display = "none";
}

function doShit() {
  eraseCookie("firstName");
  location.reload();
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

function showReviewPopup(event) {
  event.preventDefault();
  let popupContainer = document.querySelector(".popup-container");
  popupContainer.style.display = "flex";
  let formObj = document.querySelector("form");

  let formData = Object.fromEntries(new FormData(formObj).entries());
  console.log(formData);
  let rememberMe = document.getElementById("rememberMe").checked;

  if (rememberMe) {
    setCookie("firstName", formData.firstname, 1);
  } else {
    eraseCookie("firstName");
  }
  let reviewObj = {
    name:
      formData.firstname + " " + formData.middleinit + " " + formData.lastname,
    address:
      formData.address1 +
      " " +
      formData.address2 +
      ", " +
      formData.city +
      " " +
      formData.state +
      " " +
      formData.zip,
    dob: formData.dob,
    email: formData.email,
    username: formData.username,
  };

  document.querySelector("#reviewName").textContent = reviewObj.name;

  document.querySelector("#reviewDob").textContent = reviewObj.dob;

  document.querySelector("#reviewAddress").textContent = reviewObj.address;

  document.querySelector("#reviewEmail").textContent = reviewObj.email;

  document.querySelector("#reviewUsername").textContent = reviewObj.username;
}
function closePopup() {
  let popupContainer = document.querySelector(".popup-container");
  popupContainer.style.display = "none";
}

// clear button code
const clrBtn = document.querySelector("#clrbtn");
const clrBtnText = document.querySelector("#clrbtnText");

clrBtn.onclick = (event) => {
  event.preventDefault(); // Prevent default behavior
  clrBtnText.innerHTML = "Cleared";
  clrBtn.classList.add("active");
  document.querySelector("#myForm").reset();

  setTimeout(() => {
    clrBtnText.innerHTML = "Clear All";
    clrBtn.classList.remove("active");
  }, 3000);
};

// submit button code
function validateForm(event) {
  event.preventDefault();
  const btn = document.querySelector("#btn");
  const btnText = document.querySelector("#btnText");

  if (form.checkValidity()) {
    showReviewPopup(event);
  } else {
    form.reportValidity();
  }
}
function submitForm(evt) {
  const btn = document.querySelector("#btn");
  const btnText = document.querySelector("#btnText");
  const form = document.querySelector("#myForm");

  btnText.innerHTML = "Thanks";
  btn.classList.add("active");
  setTimeout(() => {
    form.submit();
  }, "2000");
}
function onPasswordChange() {
  let passwordField = document.querySelector("#password");
  let passwordCheckField = document.querySelector("#PASSWORDcheck");

  if (
    passwordField.value !== passwordCheckField.value &&
    passwordCheckField.value
  ) {
    console.log("Passwords don't match");
    redPasswords();
  } else {
    console.log("Passwords match");
    blackPasswords();
  }
}
function redPasswords() {
  let passwordField = document.querySelector("#password");
  let passwordCheckField = document.querySelector("#PASSWORDcheck");
  passwordField.style.color = "red";
  passwordField.style.borderColor = "red";
  passwordCheckField.style.color = "red";
  passwordCheckField.style.borderColor = "red";
}
function blackPasswords() {
  let passwordField = document.querySelector("#password");
  let passwordCheckField = document.querySelector("#PASSWORDcheck");
  passwordField.style.color = "black";
  passwordField.style.borderColor = "black";
  passwordCheckField.style.color = "black";
  passwordCheckField.style.borderColor = "black";
}
function changeSliderValue(value) {
  let slider = document.querySelector("#sliderValue");
  slider.textContent = value;
}
