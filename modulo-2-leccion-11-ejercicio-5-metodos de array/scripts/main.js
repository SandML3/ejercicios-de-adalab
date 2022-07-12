'use strict';


const main = document.querySelector('.main');

const christmasTreeCreator = (height) => {
    for (let i = 0; i < height; i++) {
        main.innerHTML += `<p>${'▲'.repeat(i + 1)}</p>`
    }
}

christmasTreeCreator(8);