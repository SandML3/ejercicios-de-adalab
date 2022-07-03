'use strict'

const adalaber = {};
adalaber.name = "Susana";
adalaber.age = "34";
adalaber.carrer = "periodista";
adalaber.run = "Estoy corriendo";
adalaber.runMarathon = (distance) => textElement.innerHTML = `Estoy corriendo una maratón de ${distance} kilómetros.`



const textElement = document.querySelector('.text')
const adalaberTextConversor = adalaber => textElement.innerHTML = `Mi nombre es ${adalaber.name}, tengo ${adalaber.age} años y soy ${adalaber.carrer}`;

const adalaberDos = {};
adalaberDos.name = "Rocío";
adalaberDos.age = "25";
adalaberDos.carrer = "actriz";

console.log(adalaberTextConversor(adalaber));
console.log(adalaberTextConversor(adalaberDos));
adalaber.runMarathon(50);