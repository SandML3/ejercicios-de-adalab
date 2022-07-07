'use strict'


const numbers = [6, 5, 79, 43, 6];
const numbers2 = [2, 1, 2, 6, 7, 10];


function averageCalculator (array) {
    let acumulator = 0;
    for (let i = 0; i < array.length; i++) {
        acumulator += array[i];
    }
    return acumulator / array.length;
};

console.log(averageCalculator(numbers));
console.log(averageCalculator(numbers2));
console.log(averageCalculator([5, 5]));

