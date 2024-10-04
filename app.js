const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const sign_in_btn2= document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click",() => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click",() => {
    container.classList.remove("sign-up-mode")
});

sign_up_btn2.addEventListener("click",() => {
    container.classList.add("sign-up-mode2");
});

sign_in_btn2.addEventListener("click",() => {
    container.classList.remove("sign-up-mode2")
});

document.querySelector(".sign-in-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.querySelector("input[type='text']").value;
    const password = document.querySelector("input[type='password']").value;

    if (username === "user" && password === "pass") { 
        window.location.href = "index.html"; 
    } else {
        alert("Invalid credentials!"); 
    }
});

