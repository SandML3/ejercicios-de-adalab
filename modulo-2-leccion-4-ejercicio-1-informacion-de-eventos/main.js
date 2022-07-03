'use strict';

const textInput = document.getElementById("text");
const copy = document.querySelector(".copy")

textInput.addEventListener("keyup", () => {
    copy.innerHTML = textInput.value;
})
