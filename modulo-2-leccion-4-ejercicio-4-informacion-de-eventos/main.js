const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const button = document.querySelector(".button");
const list = document.querySelector(".list");


button.addEventListener("click", () => {
  list.innerHTML = `<li class="inception">${inception}</li>
  <li class="butterfly">${theButterFlyEffect}</li>
  <li class="eternal">${eternalSunshineOfTheSM}</li>
  <li class="blue">${blueVelvet}</li>
  <li class="split">${split}</li>`;

  const inceptionItem = list.querySelector(".inception");

  inceptionItem.addEventListener("click", () => {
    console.log(event.currentTarget.innerHTML)
  });
  list.querySelector(".butterfly").addEventListener("click", () => {
    console.log(event.currentTarget.innerHTML)
  });
  list.querySelector(".eternal").addEventListener("click", () => {
    console.log(event.currentTarget.innerHTML)
  });
  list.querySelector(".blue").addEventListener("click", () => {
    console.log(event.currentTarget.innerHTML)
  });
  list.querySelector(".split").addEventListener("click", () => {
    console.log(event.currentTarget.innerHTML)
  });

});

