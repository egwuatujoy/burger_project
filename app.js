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

// SCROLL REVEAL ANIMATION

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  // reset: true, Animation repeat
});

sr.reveal(`.home-data , .footer`);
sr.reveal(`.home-dish`, { delay: 500, distance: "100px", origin: "bottom" });
sr.reveal(`.home-burger`, { delay: 500, distance: "100px", duration: 1500 });
sr.reveal(`.home-ingredients`, {
  delay: 1600,
  interval: 100,
});

sr.reveal(`.recipe-img, .delivery-img, .contact-image`, {
  origin: "left",
});
sr.reveal(`.recipe-data , .delivery-data, .contact-data`, {
  origin: "right",
});

sr.reveal(`.popular-card`, {
  interval: 100,
});
