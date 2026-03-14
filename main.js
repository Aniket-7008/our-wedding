const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header nav", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".section__header", { ...scrollRevealOption, interval: 200 });
ScrollReveal().reveal(".section__description", { ...scrollRevealOption, delay: 300 });
ScrollReveal().reveal(".portfolio__card", { ...scrollRevealOption, interval: 300 });
ScrollReveal().reveal(".gallery__grid img", { ...scrollRevealOption, interval: 200 });

// Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
});
