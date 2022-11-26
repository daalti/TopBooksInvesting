const btnMenu = document.querySelector(".header .header-container .btn-menu");
const menu = document.querySelector(".header .header-container .nav");
const close = document.querySelector(".close");
const body = document.querySelector("body");
const categoryMain = document.querySelector(
  ".header .header-container .nav .category"
);
const category = document.querySelector(
  ".header .header-container .nav .item-category"
);
const categoryItem = document.querySelector(
  ".header .header-container .nav .menu-item-container"
);

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("activo");
  categoryMain.classList.toggle("activo");
  body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  menu.classList.toggle("activo");
  categoryMain.classList.toggle("activo");
  body.style.overflow = "auto";
  categoryItem.classList.remove("activo");
});

category.addEventListener("click", () => {
  categoryItem.classList.toggle("activo");
});
