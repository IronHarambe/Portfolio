const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// Scroll reveal animations
window.sr = ScrollReveal();

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "10rem",
  delay: 300,
  mobile: false,
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600,
  mobile: false,
});
