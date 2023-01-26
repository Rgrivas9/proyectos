import "./style.css";

const hero = document.getElementById("hero");
let sticky = hero.offsetTop;
const navbar = document.getElementById("navbar");

const hero2 = document.querySelector(".hero2");
let stick = hero2.offsetTop;
const navbar2 = document.querySelector(".navbar2");

const stickybar = () => {
  sticky = hero.offsetTop;
  if (window.pageYOffset >= sticky) {
    navbar.classList.remove("backnav");
    navbar.classList.add("sticky");
    navbar2.classList.remove("sticky2");
  }
  if (window.pageYOffset < sticky) {
    navbar.classList.remove("sticky");
    navbar.classList.add("backnav");
    navbar2.classList.remove("sticky2");
  }
};
const stickybar2 = () => {
  stick = hero2.offsetTop;
  if (window.pageYOffset >= stick) {
    navbar2.classList.add("sticky2");
    navbar.classList.remove("sticky");
    navbar.classList.add("backnav");
  }
  if (window.pageYOffset < stick) {
    navbar2.classList.remove("sticky2");
    navbar.classList.remove("sticky");
    navbar.classList.add("backnav");
  }
};

window.addEventListener("scroll", () => {
  if (window.innerWidth > 769) {
    stickybar();
  }
  if (window.innerWidth < 769) {
    stickybar2();
  }
});
