/* ==========================================
   GADAL RESTORES
   Navigation
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

const menuButton = document.querySelector(".menu-button");
const desktopNav = document.querySelector(".desktop-nav");

menuButton.addEventListener("click", () => {

    desktopNav.classList.toggle("mobile-open");

});