const signupForm = document.getElementById("signu-pForm");

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const selectWhere = document.getElementById("select-where");

// crteae small element- error messages

function showError(input, message) {
  const small = input.parentElement.querySelector(".error-message");

  small.textContent = message;

  input.style.border = "2px solid #e63946";
}

function showSuccess(input) {
  const small = input.parentElement.querySelector(".error-message");

  small.textContent = "";

  input.style.border = "2px solid #2a9d8f";
}
//----------------------------------------------------------
// validation of input failds
function validateName() {
  const nameValue = fullName.value.trim();

  // only letters and spaces
  const namePattern = /^[A-Za-z\s]{3,30}$/;

  if (nameValue === "") {
    showError(fullName, "Name is required");
    return false;
  }

  if (!namePattern.test(nameValue)) {
    showError(
      fullName,
      "Name must contain only letters and at least 3 characters"
    );
    return false;
  }

  showSuccess(fullName);
  return true;
}


function validateEmail() {
  const emailValue = email.value.trim();

  const emailPattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    showError(email, "Email is required");
    return false;
  }

  if (!emailPattern.test(emailValue)) {
    showError(email, "Please enter a valid email");
    return false;
  }

  showSuccess(email);
  return true;
}


function validateSelect() {
  if (selectWhere.value === "") {
    showError(selectWhere, "Please choose one option");
    return false;
  }

  showSuccess(selectWhere);
  return true;
}

// live validation

fullName.addEventListener("input", validateName);

email.addEventListener("input", validateEmail);

selectWhere.addEventListener("change", validateSelect);

//F-sub

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isSelectValid = validateSelect();

  if (isNameValid && isEmailValid && isSelectValid) {

  const userData = {
    name: fullName.value.trim(),
    email: email.value.trim(),
    source: selectWhere.value
  };

  
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const emailExists = users.some(user => user.email === userData.email);

  if (emailExists) {
    alert("This email already exists!");
    return;
  }

  users.push(userData);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created successfully");

  signupForm.reset();

  [fullName, email, selectWhere].forEach((input) => {
    input.style.border = "none";

    const small =
      input.parentElement.querySelector(".error-message");

    if (small) small.textContent = "";
  });
}
});