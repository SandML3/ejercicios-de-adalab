'use strict';

const textElement = document.querySelector('.text');
const min = 0;
const max = 50;

fetch(`https://api.rand.fun/number/integer?min=${min}&max=${max}`)
    .then(response => response.json())
    .then(data => textElement.innerHTML = `El número aleatorio generado es: ${data.result}`);