'use strict';

const formElement = document.querySelector('.form');
const bodyElement = document.querySelector('.body');

const handlerFunction = (ev) => {
    ev.preventDefault();
    if (ev.target.name === 'theme') {
        bodyElement.classList.remove('dark', 'light')
        bodyElement.classList.add(`${ev.target.value}`)
    }
        
    localStorage.setItem('theme', ev.target.value);
}

formElement.addEventListener('change', handlerFunction);

const theme = localStorage.getItem("theme");
bodyElement.classList.add(theme);