const menu = document.querySelector(".menu");
const navUl = document.querySelector(".nav-ul");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
  navUl.classList.toggle("active");
  menu.classList.toggle("mobile-open");

  // Prevent scrolling if mobile-open
  if (menu.classList[1] == "mobile-open") {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "scroll";
  }
});
