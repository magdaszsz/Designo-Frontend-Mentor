const navToggler = document.querySelector(".nav-toggler");
const nav = document.querySelector("nav");
const list = document.querySelector(".nav-list");

const form = document.querySelector("form");
const userName = document.getElementById("name");
const text = document.getElementById("textarea");
const email = document.getElementById("email");
const allInputs = document.querySelectorAll("input");

navToggler.addEventListener("click", () => {
  navToggler.classList.toggle("show");
  if (list.classList.contains("slidein")) {
    list.classList.remove("slidein");
    list.classList.add("slideout");
  } else {
    list.classList.remove("slideout");
    list.classList.add("slidein");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

 function isEmail(email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
     email
   );
 }

 function setError(input, message) {
   const inputWrapper = input.parentElement;
   const small = inputWrapper.querySelector("small");
   inputWrapper.className = "input-wrapper error";
   small.innerText = message;
 }

 function setSuccess(input) {
   const inputWrapper = input.parentElement;
   inputWrapper.className = "input-wrapper success";
 }

function checkInputs() {
  const userNameValue = userName.value.trim();
  const textValue = text.value.trim();
  const emailValue = email.value.trim();

  if (userNameValue === "") {
    setError(userName, "Field cannot be empty");
  } else {
    setSuccess(userName);
  }

  if (textValue === "") {
    setError(text, "Field cannot be empty");
  } else {
    setSuccess(text);
  }

  
  

  if (emailValue === "") {
    setError(email, "Field cannot be empty");
  } else if (!isEmail(emailValue)) {
    setError(email, "Please enter a valid email");
  } else {
    setSuccess(email);
  }

  
}
