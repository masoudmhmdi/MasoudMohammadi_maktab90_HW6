const form = document.getElementById("form");
const phoneInput = document.getElementById("phone-number");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("pass");
const rePassInput = document.getElementById("re-pass");
const firstNameInput = document.getElementById("firstname");
const middleNameInput = document.getElementById("middle-name");
const lastNameInput = document.getElementById("last-name");
const addresInput = document.getElementById("addres");
const mailRadio = document.getElementById("mail");
const femailRadio = document.getElementById("femail");
const otherRadio = document.getElementById("Other");
// console.log(firstNameInput,lastNameInput,middleNameInput)

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    firstNameInput.value !== "" &&
    lastNameInput.value !== "" &&
    middleNameInput.value !== "" &&
    validNum() &&
    validpass() &&
    radioValid()
  )
    console.log("hello");
  validpass();
  validNum();
  validEmail();
  radioValid();
  if (firstNameInput.value === "") console.log("firs name input is empty");
  if (lastNameInput.value === "") console.log("last name input is empty");
  if (middleNameInput.value === "") console.log("middle name input is empty");
  if (addresInput.value === "") console.log("addres input is empty");
});

const validNum = () => {
  const regex = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;
  if (regex.test(phoneInput.value)) return true;
  else {
    console.log("number is not valid");
  }
};

const validpass = () => {
  if (
    passInput.value === rePassInput.value &&
    passInput.value !== "" &&
    rePassInput.value !== ""
  )
    return true;
  else {
    console.log("pass is false");
  }
};

const validEmail = function () {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(emailInput.value)) return true;
  else {
    console.log("email is not valid");
  }
};

function radioValid() {
  if (mailRadio.checked || femailRadio.checked || otherRadio.checked)
    return true;
  else {
    console.log("radio is not selected");
  }
}
