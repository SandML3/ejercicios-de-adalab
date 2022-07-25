'use strict';

let counter = 57;
let uds = 'segundos';

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector(".time");
  time.innerHTML = `Escrito hace ${counter} ${uds}`;
  if (counter === 60) {
    counter = 1;
    uds = 'minutos'
    time.innerHTML = `Escrito hace ${counter} ${uds}`;
  } 
};

setInterval(incrementAndShowCounter, 2000);