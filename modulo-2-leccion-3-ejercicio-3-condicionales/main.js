'use strict';

function recogerDatos () {
    const dogAge = document.getElementById("dog__age").value;
    const result = document.querySelector(".result");
    
    if (dogAge == 1) {
        return result.innerHTML = `La edad de tu perro corresponde a 15 años humanos.`
    
    } else if (dogAge == 2) {
        return result.innerHTML = `La edad de tu perro corresponde a ${15 + 9} años humanos.`
    } else if (dogAge > 2 && dogAge < 30) {
        return result.innerHTML = `La edad de tu perro corresponde a ${(dogAge-2) * 5 + 15 + 9} humanos.`
    } else {
        return result.innerHTML = `La edad es incorrecta. La cifra debe estar comprendida entre 0 y 30 años.`
    }
    
}

