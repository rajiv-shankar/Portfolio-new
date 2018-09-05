// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set initial menu state (set value of var 'showMenu' to false)
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {  // if showMenu = false (initial state)
    // 'classList' property returns the class name(s) of element as DOMTokenList object
    menuBtn.classList.add("close");  // add "close" class name to <div class="menu-btn">
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Change menu state
    showMenu = true;

  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set menu state
    showMenu = false;

  }
}
