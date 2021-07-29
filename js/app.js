const menu = document.querySelector(".menu__btn");
const navMenu = document.querySelector(".nav");
const menuIcons = document.querySelector(".menu__icons");
menu.addEventListener("click", function () {
  this.classList.toggle("active");
  navMenu.classList.toggle("active");
  menuIcons.classList.toggle("active");
});
