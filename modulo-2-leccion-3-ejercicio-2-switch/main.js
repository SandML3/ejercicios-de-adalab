'use strict';

function getData() {
    const year = parseInt(document.getElementById("year").value);
    const result = document.querySelector(".result");

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return  result.innerHTML = `Este año es bisiesto.`
    } else {
        return result.innerHTML = `El siguiente año bisiesto será el año ${year + (year % 4)}.`
    }
}


