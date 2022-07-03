'use strict';

const nameField = document.querySelector("#name").value;
console.log(nameField)
const greeting = document.querySelector(".greetting");
const isEmpty = !nameField;

if (isEmpty === false && nameField === "Sandra" || nameField === "Pepita" ) {
    greeting.innerHTML = `Bienvenida, ${nameField}.`;
} else {
    greeting.innerHTML = `Lo siento pero el usuario que has introducido no está registrado.`;
}