// Test
console.log("Js is working");

const menu_icon = document.querySelector(".header__menu-icon");
const menu = document.querySelector(".header__menu");

menu_icon.addEventListener("click", function () {
  if (menu_icon.classList.contains("menu-icon-close")) {
    menu_icon.classList.remove("menu-icon-close");
    menu_icon.classList.add("menu-icon-open");

    menu.classList.add("menu-open");
    menu.classList.remove("menu-close");

    document.body.style.overflow = "hidden";
  } else {
    menu_icon.classList.add("menu-icon-close");
    menu_icon.classList.remove("menu-icon-open");

    menu.classList.remove("menu-open");
    menu.classList.add("menu-close");

    document.body.style.overflow = "auto";
  }
});
