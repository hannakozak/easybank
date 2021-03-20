'use strict';

const navigation_icon = document.querySelector(".navigation__icon");
const icon_close = document.querySelector(".icon--close");
const icon_open = document.querySelector(".icon--open");
const nav = document.querySelector(".navigation__nav");
const navigation_link = document.querySelectorAll(".navigation__link");
const section = document.querySelector(".section-about");

navigation_icon.addEventListener("click", toggleMenu);


function toggleMenu () {
  nav.classList.toggle("showMenu");
  section.classList.toggle("overlay");
  if (nav.classList.contains("showMenu")) {
    icon_close.style.display = "block";
    icon_open.style.display = "none";
  } else {
    icon_close.style.display = "none";
    icon_open.style.display = "block";
  }
}

navigation_link.forEach( 
  function(link) { 
    link.addEventListener("click", toggleMenu);
  }
)



