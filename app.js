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

    if (signInUsername === "user" && signInPassword === "pass") {
      window.location.href = "Index.html"; // Redirect to Index page
    } else {
      alert("Invalid credentials!");
    }
  });

document
  .querySelector("#sign-up-btn")
  .addEventListener("click", () => {
    document.querySelector(".container").classList.add("sign-up-mode");
  });

document
  .querySelector("#sign-in-btn")
  .addEventListener("click", () => {
    document.querySelector(".container").classList.remove("sign-up-mode");
  });

document
  .querySelector("#sign-up-btn2")
  .addEventListener("click", () => {
    document.querySelector(".container").classList.add("sign-up-mode");
  });

document
  .querySelector("#sign-in-btn2")
  .addEventListener("click", () => {
    document.querySelector(".container").classList.remove("sign-up-mode");
    window.location.href = "Index.html"; // Redirect to Index page after signing in
  });

  document.addEventListener('DOMContentLoaded', function() { // Line 1 (Ensures the DOM is fully loaded before script runs)
    // Handle Sign In Button Click
    document.querySelector("#sign-in-btn2").addEventListener("click", () => {  // Line 2
        console.log("Sign In button clicked!");  // For debugging
        window.location.href = "Index.html";  // Line 3
    });

    // Handle Sign Up Button Click
    document.querySelector("#sign-up-btn2").addEventListener("click", () => {  // Line 4
        document.querySelector(".container").classList.add("sign-up-mode");  // Line 5
    });
});  // Line 6
