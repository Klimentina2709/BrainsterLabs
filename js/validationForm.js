const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const company = document.getElementById("company");
const options = document.getElementById("options");
const number = document.getElementById("number");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const companyValue = company.value.trim();
  const optionsValue = options.value.trim();
  const numberValue = number.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Полето за име е празно");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Полето за meil е празно");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email не е валиден");
  } else {
    setSuccessFor(email);
  }

  // optionsss here
  if (optionsValue === "") {
    setErrorFor(options, "Полето за име е празно");
  } else {
    setSuccessFor(options);
  }

  if (companyValue === "") {
    setErrorFor(company, "Полето не смее да биде празно");
  } else {
    setSuccessFor(company);
  }

  if (numberValue === "") {
    setErrorFor(number, "Полето не смее да биде празно");
  } else if (numberValue.length < 6) {
    setErrorFor(number, "Телефонскиот број е многу краток");
  } else {
    setSuccessFor(number);
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    // add error message
    small.innerText = message;
    formControl.className = "form-control error";
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
  }

  function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
}
