'use strict';

const nameField = document.getElementById("name");
const button = document.querySelector(".button");
let name;

button.addEventListener("click", () => {
    name = nameField.value;
    console.log(`Hola ${name}`);
});

