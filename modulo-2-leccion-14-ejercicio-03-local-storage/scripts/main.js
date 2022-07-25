'use strict';

const inputNameElement = document.querySelector('#name');
const inputSurnameElement = document.querySelector('#surname');
const textElement = document.querySelector('.info')
const buttonElement = document.querySelector('.button');

const handlerFunction = (ev) => {
    ev.preventDefault();
    const inputNameValue = inputNameElement.value;
    const inputSurnameValue = inputSurnameElement.value;

    fetch(`https://swapi.py4e.com/api/people/?search=${inputNameValue ||inputSurnameValue}`)
        .then(response => response.json())
       
        .then(data => {
        
            for (let element in data.results) {
                const name = data.results[element].name.split(' ')
                console.log(name);

                textElement.innerHTML += `<p>Nombre:  ${data.results[element].name}, género:  ${data.results[element].gender} </p>`

                localStorage.setItem(`name${element}`, name[0]);
                localStorage.setItem(`surname${element}`, name[1]);
            }
        })
}


buttonElement.addEventListener('click', handlerFunction)