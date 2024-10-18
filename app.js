const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
  container.classList.add("sign-up-mode2");
});

sign_in_btn2.addEventListener("click", () => {
  container.classList.remove("sign-up-mode2");
});

document
  .querySelector(".sign-in-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const signInUsername = document.querySelector(
      ".sign-in-form input[type='text']"
    ).value;

    const signInPassword = document.querySelector(
      ".sign-in-form input[type='password']"
    ).value;

    const signUpUsername = document.querySelector(
      ".sign-up-form input[type='text']"
    ).value;

    const signUpEmail = document.querySelector(
      ".sign-up-form input[type='email']"
    ).value;
    const signUpPassword = document.querySelector(
      ".sign-up-form input[type='password']"
    ).value;

    if (username === "user" && password === "pass") {
      window.location.href = "Index.html";
    } else {
      alert("Invalid credentials!");
    }
  });
