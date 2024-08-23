const navOpen = document.querySelector("#nav-open");
const navClose = document.querySelector("#nav-close");
const navMenu = document.querySelector("#nav-menu");

if (navOpen) {
  navOpen.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
