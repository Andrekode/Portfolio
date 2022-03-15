const menuBtn = document.querySelector(".menu-btn");
const btnBurger = document.querySelector(".menu-btn__burger");
const mobileMenu = document.querySelector(".mobile-menu");
const d = new Date();
const currentYear = d.getFullYear(); // dynamic update of year in footer
const copyRight = document.querySelector(".copyright");

// functionlity to hamburger menu, toggles menu button and the menu.

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  mobileMenu.classList.toggle("menu-active");
});

//  returns hamburger/menu to default state when options are clicked, or user clicks outside of the menu.

window.addEventListener("mouseup", function (e) {
  if (e.target != mobileMenu && e.target != menuBtn && e.target != btnBurger) {
    mobileMenu.classList.remove("menu-active");
    menuBtn.classList.remove("open");
  }
});

//  updates text in footer with current year
copyRight.textContent += ` Copyright ${currentYear}, Andrè Mæland`;
