// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");  // q_All: take all elements, else only first

// Set initial showMenu state (menu closed)
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

// switches btw adding/removing "show"/"close" classes, to show/hide dropdown content:
// if menuBtn clicked, close menuBtn & show menu, menuNav, menuBranding, navItems
// "classList" property returns the class name(s) of element as DOMTokenList object
function toggleMenu() {
  if (!showMenu) {  // if showMenu = false (menu closed)
    menuBtn.classList.add("close");  // add "close" class name to <div class="menu-btn">
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    showMenu = true;  // change menu state
  } else {  // do the opposite
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Change menu state
    showMenu = false;

  }
}
