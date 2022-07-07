'use strict';

const get100Numbers = () => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(i + 1);
    }
    return arr;
}

const getReversed100Numbers = () => get100Numbers().reverse();

getReversed100Numbers();

const reversedArray = getReversed100Numbers();
for (let i = 0; i < reversedArray.length; i++) {
    console.log(reversedArray[i]);
}

/* const arr = get100Numbers();
console.log(getReversed100Numbers()); */

// const addArr = arr.push(101,102);
// console.log(addArr); Probando que al guardar un push en una constante y hacer console.log de esta nos devuelve la dimensión del array.
