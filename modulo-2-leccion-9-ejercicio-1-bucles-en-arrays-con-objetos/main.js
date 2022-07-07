'use strict'


const adalabers = [
    {
        name : 'María',
        age : 29,
        carrer : 'diseñadora'
    },

    {
        name : 'Lucía',
        age : 31,
        carrer : 'ingeniera química'
    },

    {
        name : 'Susana',
        age : 34,
        carrer : 'periodista'
    },

    {
        name : 'Rocío',
        age : 25,
        carrer : 'actriz'
    },

    {
        name : 'Inmnaculada',
        age : 21,
        carrer : 'diseñadora'
    },  

    {
        name : 'Sandra',
        age : 11,
        carrer : 'diseñadora'
    },  
];

function countAdalabers (adalabers) {
    return adalabers.length;
}

function averageAge (adalabers) {
    let totalAge = 0;
    for (let item in adalabers) {
        totalAge += adalabers[item].age;
    };
    return totalAge / adalabers.length;
}

const theYoungest = () => {
    const adalabersAges = [];
    for (let item in adalabers) {
        adalabersAges.push(adalabers[item].age); 
    }
    adalabersAges.sort()
  
    for (let item in adalabers) {
        if (adalabers[item].age === adalabersAges[0]) {
            return adalabers[item].name;
        }
    }
};

const countDesigners = () => {
    let designersCounter = 0;
    for (let item in adalabers) {
        if (adalabers[item].carrer === 'diseñadora') {
            designersCounter += 1;
        }
    }
    return designersCounter;
}

console.log(countAdalabers(adalabers));
console.log(averageAge(adalabers));
console.log(theYoungest(adalabers));
console.log(countDesigners(adalabers));