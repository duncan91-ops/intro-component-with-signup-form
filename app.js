const form = document.querySelector(".signup__form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailAddress = document.getElementById("emailAddress");
const password = document.getElementById("password");
const formInputs = document.querySelectorAll(".form__input");
const submitButton = document.querySelector(".form__btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!firstName.value) {
    firstName.classList.add("error");
  }
  if (!lastName.value) {
    lastName.classList.add("error");
  }
  if (!password.value) {
    password.classList.add("error");
  }
  if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress.value)
  ) {
    emailAddress.classList.add("error");
  }
  let formValid = true;

  formInputs.forEach((formInput) => {
    if (formInput.classList.contains("error")) {
      formValid = false;
    }
  });

  if (formValid) {
    window.alert("Success!");
    formInputs.forEach((formInput) => {
      formInput.value = "";
    });
  }
});

formInputs.forEach((formInput) => {
  formInput.addEventListener("focus", () => {
    formInput.classList.remove("error");
  });
});
