'use strict'

const buttonElement = document.querySelector('.button');
const consoleLog = (event) => console.log(event);

buttonElement.addEventListener('click', consoleLog);

