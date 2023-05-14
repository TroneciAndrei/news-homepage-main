const openNav = document.querySelector(".openNav");
const closeNav = document.querySelector(".closeNav");
const nav = document.querySelector(".navbar");
const body = document.body;

openNav.addEventListener("click", () => {
  nav.classList.add("active");
  body.classList.add("overlay");
});

closeNav.addEventListener("click", () => {
  nav.classList.remove("active");
  body.classList.remove("overlay");
});
