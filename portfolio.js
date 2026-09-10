// mobile menu

const menuButton = document.querySelector("#menuBtn");
const navLinks = document.querySelector("#navLinks");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});


// contact form

const form = document.querySelector("#contactForm");
const result = document.querySelector("#result");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector("#name").value;

    result.innerText = "Thanks " + name + "! Your message has been received.";

    form.reset();
});


// current year in footer

document.querySelector("#year").innerText = new Date().getFullYear();
