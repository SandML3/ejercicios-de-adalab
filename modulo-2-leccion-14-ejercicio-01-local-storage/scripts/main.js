'use strict';

const inputElement = document.querySelector('#text');
const textElement = document.querySelector('.p');

const handlerFunction = (ev) => {
    ev.preventDefault();
    console.log(ev.key)
    textElement.innerHTML = inputElement.value;
    localStorage.setItem("text", inputElement.value);
}

inputElement.addEventListener('keyup', handlerFunction);

const text = localStorage.getItem("text");
inputElement.value = text;
textElement.innerHTML = text;