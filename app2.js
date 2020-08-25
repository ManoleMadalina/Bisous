/*Burger Menu*/
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-bar");
  const navLinks = document.querySelectorAll(".nav-link");

  burger.addEventListener("click", () => {
    //ToggleNav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.7
        }s`;
      }
    });
    //Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
