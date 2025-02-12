document.addEventListener("DOMContentLoaded", function () {
  // Handle Sign In Button Click (for form submission)
  document.querySelector(".sign-in-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const signInUsername = document.querySelector(".sign-in-form input[type='text']").value;
    const signInPassword = document.querySelector(".sign-in-form input[type='password']").value;

    if (signInUsername === "user" && signInPassword === "pass") {
      window.location.href = "Index.html"; // Redirect to Index page if credentials are correct
    } else {
      // Display an error message for invalid credentials
      const errorMessage = document.querySelector("#error-message");
      errorMessage.style.display = "block";
    }
  });
  

  // Handle Sign Up/Sign In Button Clicks for changing panels
  document.querySelector("#sign-up-btn").addEventListener("click", () => {
    document.querySelector(".container").classList.add("sign-up-mode"); // Show Sign Up panel
  });

  document.querySelector("#sign-in-btn").addEventListener("click", () => {
    document.querySelector(".container").classList.remove("sign-up-mode"); // Show Sign In panel
  });

  document.querySelector("#sign-up-btn2").addEventListener("click", () => {
    document.querySelector(".container").classList.add("sign-up-mode"); // Show Sign Up panel on another button click
  });

  document.querySelector("#sign-in-btn2").addEventListener("click", () => {
    document.querySelector(".container").classList.remove("sign-up-mode"); // Show Sign In panel on another button click
    window.location.href = "Index.html"; // Redirect to Index page after signing in
  });
});
