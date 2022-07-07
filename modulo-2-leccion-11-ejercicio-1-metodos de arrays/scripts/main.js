'use strict';

const get100Numbers = () => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(i + 1);
    }
    return arr;
}

const arr = get100Numbers();
console.log(get100Numbers());

// const addArr = arr.push(101,102);
// console.log(addArr); Probando que al guardar un push en una constante y hacer console.log de esta nos devuelve la dimensión del array.
