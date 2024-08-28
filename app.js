const navOpen = document.querySelector("#nav-open");
const navClose = document.querySelector("#nav-close");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

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
  if (this.scrollY >= 50) {
    headerContainer.classList.add("shadow-header");
  } else {
    headerContainer.classList.remove("shadow-header");
  }
}

window.addEventListener("scroll", showHeader);

// SHOW SCROLL-UP

function showScroll() {
  const scrollUp = document.querySelector("#scroll-up");
  if (this.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", showScroll);

// SHOW SCROLL-UP
const allSections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollDown = window.scrollY;
  allSections.forEach((section) => {
    sectionHeight = section.offsetHeight;
    sectionTop = section.offsetTop - 58;
    sectionId = section.getAttribute("id");
    sectionClass = document.querySelector(`
      .nav-menu a[href*="${sectionId}"]`);

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);
