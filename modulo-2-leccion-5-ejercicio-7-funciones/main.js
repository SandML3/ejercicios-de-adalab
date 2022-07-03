'use strict'

function getEl (selector) {
    const selectorToEval = selector;

    if (eval(`document.querySelector('${selector}')`) !== null) {
       return eval(`document.querySelector('${selector}')`);
    } else {
        return console.error(`No existe ningún elemento con clase, id o tag llamado ${selectorToEval}`);
    }
};


function pairOrNot (num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


const textContent = parseInt(getEl('.text').innerHTML);

if (pairOrNot(textContent) === true) {
    console.log(`Este número es PAR: ${textContent}`);
} else {
    console.log(`Este número es IMPAR: ${textContent}`);
};
