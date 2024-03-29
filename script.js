const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
const navLink = document.querySelectorAll(".nav--link");
const linkAction = () => {
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("header-bg")
    : header.classList.remove("header-bg");
};
window.addEventListener("scroll", scrollHeader);
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 2500,
});
sr.reveal(`.home--images`, {
  distance: "120px",
  delay: 400,
});
sr.reveal(`.home--title`, {
  delay: 1000,
});
sr.reveal(`.home--description`, {
  delay: 1200,
});
sr.reveal(`.home--button`, {
  delay: 1400,
});
sr.reveal(`.home--footer`, {
  delay: 1600,
});
sr.reveal(`.home--data div`, {
  origin: "right",
  interval: 100,
  delay: 1800,
});
