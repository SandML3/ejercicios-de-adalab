'use strict'

const pearBasket = {};
pearBasket.numMax = 40;
pearBasket.numMin = 1;
pearBasket.numCurrent = 8;
pearBasket.numInitial = 2;
pearBasket.addPear = function () {
    return this.numCurrent += 1;
};
pearBasket.restPear = function () {
    return this.numCurrent -= 1;
};
pearBasket.initializePear = function () {
    return this.numCurrent = this.numInitial;
};


console.log(pearBasket.numCurrent);
console.log(pearBasket.addPear());
console.log(pearBasket.numCurrent);
console.log(pearBasket.restPear());
console.log(pearBasket.numCurrent);
console.log(pearBasket.initializePear());
console.log(pearBasket.numCurrent);