let mainName;
let software;
let hi;
let know;
let learn;
let socialIcons;
let instagram;
let github;
let twitter;
let linkedIn;
let initialWidth;

window.onload = (e) => {
  mainName = document.querySelector(".home-text h1");
  idun = document.querySelector("#idun");
  software = document.querySelector(".home-text h2");
  hi = document.querySelector("#hi");
  know = document.querySelector("#know");
  learn = document.querySelector(".home-text h4");
  socialIcons = document.querySelectorAll(".social-icon");
  instagram = document.querySelector("#instagram");
  twitter = document.querySelector("#twitter");
  github = document.querySelector("#github");
  linkedIn = document.querySelector("#linkedin");

  initialWidth = idun.offsetWidth;
  idun.style.width = 0;
  initiateAnimation();
};

function revealText() {
  mainName.style.opacity = 1;
  console.log(initialWidth);
  mainName.classList.add("animateIn");
  idun.style.width = initialWidth + "px";
}

function animateHi() {
  hi.classList.add("animateIn");
}

function animateTheRest() {
  software.classList.add("animateIn");
  know.classList.add("animateIn");
  learn.classList.add("animateIn");
}

function animateIcons() {
  socialIcons.forEach((socialIcon) => {
    socialIcon.style.opacity = 1;
  });
  instagram.classList.add("fadeIn");
  github.classList.add("fadeIn");
  twitter.classList.add("fadeIn");
  linkedIn.classList.add("fadeIn");
}

function initiateAnimation() {
  setTimeout(animateHi, 200);
  setTimeout(revealText, 600);
  setTimeout(animateTheRest, 1200);
  setTimeout(animateIcons, 1200);
}
