'use strict'

function ticket (num) {
  const price = num;
  const iva = (num * 21) / 100;
  return `Precio sin IVA: ${price}, IVA ${iva}, y Total: ${price + iva}`
};

const priceOne = ticket(5);
const priceTwo = ticket(100);
const priceThree = ticket(21);



