let form = document.querySelector("form");
let email_inp = document.querySelector("#email-inp");
let pass_inp = document.querySelector("#pass-inp");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  document.querySelector("#email-mssg").textContent = "";
  document.querySelector("#pass-mssg").textContent = "";
  document.querySelector(".loading").style.display = "none";

  // regex code for email-password validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

  let isValid = true;

  if (!emailRegex.test(email_inp.value)) {
    document.querySelector("#email-mssg").textContent = "email is invalid!";
    document.querySelector("#email-mssg").style.display = "initial";
    isValid = false;
  }
  console.dir(pass_inp.value);
  if (!passwordRegex.test(pass_inp.value)) {
    document.querySelector("#pass-mssg").textContent = "password is invalid";
    document.querySelector("#pass-mssg").style.display = "initial";
    isValid = false;
  }

  if (isValid) {
    document.querySelector(".loading").style.display = "initial";
  }
});
