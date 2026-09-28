// Get the current year for the footer
const currentYear = document.querySelector("#current-year");

currentYear.textContent = new Date().getFullYear();


// Newsletter form
const newsletterForm = document.querySelector("#newsletter-form");
const formMessage = document.querySelector("#form-message");

newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.querySelector("#name");
    const name = nameInput.value.trim();

    formMessage.textContent =
        `Thanks for subscribing, ${name}!`;

    newsletterForm.reset();

    nameInput.focus();
});