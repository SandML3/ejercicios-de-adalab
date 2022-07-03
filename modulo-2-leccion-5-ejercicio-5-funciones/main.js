'use strict'

function getEl (selector) {
    return eval(`document.querySelector('${selector}')`);
};


console.log(getEl('.item'));

const button = getEl(".button");
button.classList.add("highlight");

getEl('.header').classList.add('header--active')


