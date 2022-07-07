'use strict'


const buttons = document.querySelectorAll('.button');
console.log(buttons);

const handlerFunction = (ev) => {
    ev.preventDefault();
    document.querySelector('.body').classList.toggle('redBackground');
}


buttons.forEach(button => button.addEventListener('click', handlerFunction));