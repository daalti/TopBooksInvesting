const btnMenu = document.querySelector(".header .header-container .btn-menu");
const menu = document.querySelector(".header .header-container .nav");
const close = document.querySelector(".close");
const body = document.querySelector("body");
const categoryMain = document.querySelector(
  ".header .header-container .nav .category"
);
const category = document.querySelectorAll(
  ".header .header-container .nav .item-category"
);
const categoryItem = document.querySelectorAll(
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
  categoryItem[0].classList.remove("activo");
  categoryItem[1].classList.remove("activo");
  categoryItem[2].classList.remove("activo");
  categoryItem[3].classList.remove("activo");
});

category.forEach(function (item) {
  item.addEventListener("click", function () {
    item_category = item.querySelector("p");
    if (item_category.textContent == "Category") {
      categoryItem[0].classList.toggle("activo");
    } else if (item_category.textContent == "Author") {
      categoryItem[1].classList.toggle("activo");
    } else if (item_category.textContent == "Company") {
      categoryItem[2].classList.toggle("activo");
    } else if (item_category.textContent == "Best Seller") {
      categoryItem[3].classList.toggle("activo");
    }
  });
});
