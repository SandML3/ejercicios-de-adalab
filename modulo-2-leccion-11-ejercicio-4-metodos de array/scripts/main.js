'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];
const pairsArray = [];
const multiplesOfThree = [];

const bestLostNumber = () =>{
    findPairNumbers();
    findMultiplesOfThree();
    return pairsArray.concat(multiplesOfThree);
}

const findPairNumbers = () => {
    for(let i = 0; i < lostNumbers.length; i++) {
        if (lostNumbers[i] % 2 === 0) {
            pairsArray.push(lostNumbers[i]);
        }
    }
}

const findMultiplesOfThree = () => {
    for(let i = 0; i < lostNumbers.length; i++) {
        if (lostNumbers[i] % 3 === 0) {
            multiplesOfThree.push(lostNumbers[i]);
        }
    }
};


console.log(bestLostNumber())