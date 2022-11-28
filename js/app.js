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

var actualCategoryItem = 4;

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
    var x = window.matchMedia("(min-width: 50rem)");

    item_category = item.querySelector("p");
    if (x.matches) {
      if (item_category.textContent == "Category") {
        if (actualCategoryItem == 0) {
          actualCategoryItem = 4;
          categoryItem[1].classList.remove("activo1");
          categoryItem[2].classList.remove("activo2");
          categoryItem[3].classList.remove("activo3");
        } else {
          actualCategoryItem = 0;
          categoryItem[0].classList.remove("activo");
          categoryItem[1].classList.remove("activo1");
          categoryItem[2].classList.remove("activo2");
          categoryItem[3].classList.remove("activo3");
        }
      } else if (item_category.textContent == "Author") {
        if (actualCategoryItem == 1) {
          actualCategoryItem = 4;
          categoryItem[1].classList.remove("activo");
          categoryItem[2].classList.remove("activo2");
          categoryItem[3].classList.remove("activo3");
        } else {
          actualCategoryItem = 1;
          categoryItem[0].classList.remove("activo");
          categoryItem[1].classList.remove("activo1");
          categoryItem[2].classList.remove("activo2");
          categoryItem[3].classList.remove("activo3");
        }
      } else if (item_category.textContent == "Company") {
        if (actualCategoryItem == 2) {
          actualCategoryItem = 4;
          categoryItem[1].classList.remove("activo1");
          categoryItem[2].classList.remove("activo");
          categoryItem[3].classList.remove("activo3");
        } else {
          actualCategoryItem = 2;
          categoryItem[0].classList.remove("activo");
          categoryItem[1].classList.remove("activo1");
          categoryItem[2].classList.remove("activo2");
          categoryItem[3].classList.remove("activo3");
        }
      } else if (item_category.textContent == "Best Seller") {
        if (actualCategoryItem == 3) {
          actualCategoryItem = 4;
          categoryItem[1].classList.remove("activo1");
          categoryItem[2].classList.remove("activo2");
          categoryItem[3].classList.remove("activo");
        } else {
          actualCategoryItem = 3;
          categoryItem[0].classList.remove("activo");
          categoryItem[1].classList.remove("activo1");
          categoryItem[2].classList.remove("activo2");
          categoryItem[3].classList.remove("activo3");
        }
      }
    }

    if (item_category.textContent == "Category") {
      categoryItem[0].classList.toggle("activo");
    } else if (item_category.textContent == "Author") {
      categoryItem[1].classList.toggle("activo1");
    } else if (item_category.textContent == "Company") {
      categoryItem[2].classList.toggle("activo2");
    } else if (item_category.textContent == "Best Seller") {
      categoryItem[3].classList.toggle("activo3");
    }
  });
});
