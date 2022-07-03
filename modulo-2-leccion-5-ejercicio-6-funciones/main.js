'use strict'

function getEl (selector) {
    const selectorToEval = selector;

    if (eval(`document.querySelector('${selector}')`) !== null) {
       return eval(`document.querySelector('${selector}')`);
    } else {
        return console.error(`No existe ningún elemento con clase, id o tag llamado ${selectorToEval}`);
    }
};


console.log(getEl('.item'));

const button = getEl(".button");
button.classList.add("highlight");

getEl('.header').classList.add('header--active')


console.log(getEl('.pepito'));