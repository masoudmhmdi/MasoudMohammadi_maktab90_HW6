const form = document.getElementById("form");
const phoneInput = document.getElementById("phone-number");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("pass");
const rePassInput = document.getElementById("re-pass");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validNum();
  validpass();
  validEmail();
});

const validNum = () => {
  const regex = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;
  regex.test(phoneInput.value)
    ? console.log("phone is true")
    : console.log("phone is false");
};

const validpass = () => {
  if (
    passInput.value === rePassInput.value &&
    passInput.value !== "" &&
    rePassInput.value !== ""
  )
    console.log("pass is true");
  else {
    console.log("pass is false");
  }
};

const validEmail = function () {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  regex.test(emailInput.value)
    ? console.log("email is true")
    : console.log("email is false");
};
