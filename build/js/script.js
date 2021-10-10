const startMobileMenu = function () {
  const buttonMenu = document.querySelector(".mobile-menu__button");
  const menuActivate = document.querySelector(".mobile-menu__items");
  const body = document.querySelector(".page-body");
  const itemMenu = document.querySelectorAll(".main-nav__item-content")


  window.onload = function () {
    buttonMenu.classList.remove("mobile-menu__button--active");
    menuActivate.classList.remove("mobile-menu__items--active");
    buttonMenu.classList.remove("mobile-menu__button--hidden")


    buttonMenu.addEventListener("click", function () {
      menuActivate.classList.toggle("mobile-menu__items--active");
      buttonMenu.classList.toggle("mobile-menu__button--active");
      body.classList.toggle("page-body--no-scroll");
    });
  };

  itemMenu.forEach(function (item) {
    item.addEventListener("click", function () {
      body.classList.remove("page-body--no-scroll");
      setTimeout(function () { buttonMenu.classList.remove("mobile-menu__button--active") }, 500);
      setTimeout(function () { menuActivate.classList.remove("mobile-menu__items--active") }, 500);
    })
  });
}
startMobileMenu();
