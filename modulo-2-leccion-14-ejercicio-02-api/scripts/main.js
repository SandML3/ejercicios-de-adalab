'use strict';

const inputElement = document.querySelector('#name');
const textElement = document.querySelector('.info')
const buttonElement = document.querySelector('.button');

const handlerFunction = (ev) => {
    ev.preventDefault();
    const inputValue = inputElement.value;

    fetch(`https://swapi.py4e.com/api/people/?search=${inputValue}`)
        .then(response => response.json())
        // .then(data => console.log(data.results))
        .then(data => {
            console.log(data.results)
            for (let element in data.results) {
                textElement.innerHTML += `<p>Nombre:  ${data.results[element].name}, género:  ${data.results[element].gender} </p>`
            }
        })
}


buttonElement.addEventListener('click', handlerFunction)