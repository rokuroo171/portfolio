// main.js
// handles navbar scroll effect + reveal animations on scroll

// add border to navbar when user scrolls down
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// reveal elements on scroll
// any element with class .reveal will fade in when it enters the viewport
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // stop observing once visible
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => observer.observe(el));