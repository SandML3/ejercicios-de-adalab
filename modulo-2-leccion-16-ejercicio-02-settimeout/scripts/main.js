'use strict';

/* 
2. Mejorar el contador de uvas
Vamos a modificar nuestra solución del ejercicio 2. Contador de Uvas para que, en lugar de seguir ejecutando la función indefinidamente, detengamos su ejecución con clearInterval. */

let counter = 0;
const divElement = document.createElement('div');
const imageElement = `<img src="https://thumbs.dreamstime.com/b/una-uva-aislada-en-el-primer-blanco-del-fondo-116838233.jpg" />`
document.body.appendChild(divElement);


const incrementAndShowCounter = () => {
    counter++;

    divElement.innerHTML += imageElement;
    const time = document.querySelector(".time");
    time.innerHTML = `${counter} uvas`
    if (counter >= 12) {
      time.innerHTML = '¡Fin de las campanadas!';
      clearInterval(countdown)
      console.log(counter)
    }
};

const countdown = setInterval(incrementAndShowCounter, 1000);