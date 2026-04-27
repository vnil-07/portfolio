const preloader = document.getElementById("preloader");
const siteHeader = document.getElementById("siteHeader");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const year = document.getElementById("year");
const typingText = document.getElementById("typingText");

const tagline = "Diploma CSE Student | Web Developer | AI Enthusiast";

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.classList.add("hide");
  }, 900);
});

year.textContent = new Date().getFullYear();

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-menu a, .footer-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const updateHeader = () => {
  siteHeader.classList.toggle("scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
    rootMargin: "0px 0px -40px 0px"
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && typingText) {
  let index = 0;
  typingText.textContent = "";

  const typeTagline = () => {
    typingText.textContent = tagline.slice(0, index);
    index += 1;

    if (index <= tagline.length) {
      setTimeout(typeTagline, 38);
    }
  };

  setTimeout(typeTagline, 1200);
}
