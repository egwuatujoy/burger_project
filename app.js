const navOpen = document.querySelector("#nav-open");
const navClose = document.querySelector("#nav-close");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
console.log(navMenu);

// TOGGLE THE MENU BTN

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

// REMOVE MENU MOBILE DESIGN

navLinks.forEach((link) => {
  link.addEventListener("click", linkMenu);
});

function linkMenu() {
  const navMenu = document.querySelector("#nav-menu");
  navMenu.classList.remove("show-menu");
}

// SHOW HEADER

function showHeader() {
  const headerContainer = document.querySelector("#header");
  if (scrollY >= 50) {
    headerContainer.classList.add("shadow-header");
  } else {
    headerContainer.classList.remove("shadow-header");
  }
}

window.addEventListener("scroll", showHeader);
