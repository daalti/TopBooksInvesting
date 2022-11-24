const btnMenu = document.querySelector(".header .header-container .btn-menu");
const menu = document.querySelector(".header .header-container .nav");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("activo");
});
