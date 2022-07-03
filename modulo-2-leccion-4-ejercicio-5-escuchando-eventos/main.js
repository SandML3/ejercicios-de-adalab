'use strict';

const container = document.querySelector(".container");

window.addEventListener("scroll", () => {
    container.classList.toggle("minnor", window.scrollY < 250);
    container.classList.toggle("higher", window.scrollY > 250);
});

