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
// Add as many IDs as you want here. 
// The first 4 should match the ones on your main page.
const weddingPhotos = [
  "1L2JoZwvhAv42V4OEJABD7uJ37Ag7c13f", // Image 1
  "1jsHCpXiut4FFV-tRKvy4MXOsPyNk-5li", // Image 2
  "1r0eMkvSH5pe7_8P0X3WmmR70I33D-d9z", // Image 3
  "1LEmRhpHNxb28hrujGWTUHNEMpR4KO8Gr", // Image 4
  "1ScTVBVItMVolOlxB4vxUtJ1jhRglNfGx", // These will only show up in the Popup
  "1-ShtJHcNg8szH-Mufv-__LZq58nCaWlvE",
  "1U6V4GfBykSd979hgqh9Q8e__gejHE5fhE"
];
