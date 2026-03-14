const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Reveal animations for different sections
ScrollReveal().reveal(".section__header", scrollRevealOption);
ScrollReveal().reveal(".section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".gallery__grid img", {
  ...scrollRevealOption,
  interval: 300,
});

// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});