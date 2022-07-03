'use strict'

const getEl = selector => eval(`document.querySelector('${selector}')`) !== null ? eval(`document.querySelector('${selector}')`) : console.error(`No existe ningún elemento con clase, id o tag llamado ${selectorToEval}`);


const pairOrNot = num => num % 2 === 0 ? true : false;


const textContent = parseInt(getEl('.text').innerHTML);

pairOrNot(textContent) === true ? console.log(`Este número es PAR: ${textContent}`) : console.log(`Este número es IMPAR: ${textContent}`);
