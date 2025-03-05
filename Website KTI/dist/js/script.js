// Hamburger menu
const btnHamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

btnHamburger.addEventListener("click", () => {
  btnHamburger.classList.toggle("is-active");
  menu.classList.toggle("menu-active");
});

// Tutup di luar sidebar tanpa harus klik hamburger icon
const hamburger = document.querySelector(".hamburger");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("menu-active");
    btnHamburger.classList.remove("is-active");
  }
});
