'use strict';

/* 3. Cronómetro
Crear un cronómetro que vaya aumentando en segundos y cuando se pulse el botón de parar deje de aumentar. Cuando pulsemos el de continuar, vuelva a empezar de nuevo */
let counter = 0;
let counterFunctionIsRunning = true;
const buttonElement = document.querySelector('.button');



const counterFunction = () => {
  counter++;
  const time = document.querySelector(".time");
  time.innerHTML = `Counter: ${counter}`;

};

let counterFunctionTimer = setInterval(counterFunction, 1000);


const functionIsRunning = () => 
  counterFunctionIsRunning
      ? counterFunctionIsRunning = false
      : counterFunctionIsRunning = true;

const counterFunctionTimerBreaker = () => {
  clearInterval(counterFunctionTimer);
}

const handlerCounterFunction = () => {
  if (counterFunctionIsRunning) {
    counterFunctionTimerBreaker();
    buttonElement.innerHTML = 'Reanudar';
    functionIsRunning();
  } else {
    counterFunctionTimer = setInterval(counterFunction, 1000);
    buttonElement.innerHTML = 'Parar';
    functionIsRunning()
  }
  
}


buttonElement.addEventListener('click', handlerCounterFunction)