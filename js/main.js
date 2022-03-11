const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu")
const mobileMenuLink = document.querySelectorAll(".mobile-menu-link")
let menuOpen = false

// functionlity to hamburger menu, hides and shows mobile menu version of nav. 

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add('open')
    mobileMenu.classList.add('menu-active')
    menuOpen = true
  }else {
    menuBtn.classList.remove('open')
    mobileMenu.classList.remove('menu-active')
    menuOpen = false
  }
  
});

// When user clicks nav link, returns hamburger menu to  default state and hides menu

mobileMenuLink.forEach(element => {
  element.addEventListener('click', () =>{
    mobileMenu.classList.remove("menu-active")
    menuBtn.classList.remove('open')
    menuOpen = false
  })
})