const btnHamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

btnHamburger.addEventListener("click", () => {
  btnHamburger.classList.toggle("is-active");
  menu.classList.toggle("menu-active");
});
