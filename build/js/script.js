const startMobileMenu = function () {
  const buttonMenu = document.querySelector(".mobile-menu__button");
  const menuActivate = document.querySelector(".mobile-menu__items");
  const hidden = document.querySelectorAll(".mobile-hidden");
  const itemMenu = document.querySelectorAll(".main-nav__item-content")


  window.onload = function () {
    buttonMenu.classList.remove("mobile-menu__button--active");
    menuActivate.classList.remove("mobile-menu__items--active");
    buttonMenu.classList.remove("mobile-menu__button--hidden")


    buttonMenu.addEventListener("click", function () {
      menuActivate.classList.toggle("mobile-menu__items--active");
      buttonMenu.classList.toggle("mobile-menu__button--active");

      hidden.forEach(function (el) {
        el.classList.toggle("visually-hidden");
      });
    })
  };

  itemMenu.forEach(function (item) {
    item.addEventListener("click", function () {
      hidden.forEach(function (el) {
        el.classList.remove("visually-hidden");
      });

      buttonMenu.classList.remove("mobile-menu__button--active");
      menuActivate.classList.remove("mobile-menu__items--active");
    })
  });
}
startMobileMenu();
