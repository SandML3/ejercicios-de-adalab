'use strict';

const buttonOne = document.querySelector(".button-one")
const buttonTwo = document.querySelector(".button-two")

buttonOne.addEventListener("click", () => {
    const selectedButton = event.currentTarget;
    selectedButton.classList.toggle("button-active");
});

buttonTwo.addEventListener("click", () => {
    const selectedButton = event.currentTarget;
    selectedButton.classList.toggle("button-active");
});

