import "./style.css";

const hero = document.getElementById("hero");
const sticky = hero.offsetTop;
const navbar = document.getElementById("navbar");

const hero2 = document.querySelector(".hero2");
const stick = hero2.offsetTop;
const navbar2 = document.querySelector(".navbar2")



const stickybar = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.remove("backnav");
    navbar.classList.add("sticky");
    
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("backnav");
    
  }
};
const stickybar2 = () => {
  if (window.pageYOffset >= stick) {
    navbar2.classList.add("sticky2")
  } else {
    navbar2.classList.remove("sticky2")
  }
};
window.addEventListener("scroll", () => stickybar());
window.addEventListener("scroll", () => stickybar2());
