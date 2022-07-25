'use strict';

const inputNameElement = document.querySelector('#name');
const inputSurnameElement = document.querySelector('#surname');
const textElement = document.querySelector('.info')
const buttonElement = document.querySelector('.button');

const handlerFunction = (ev) => {
    ev.preventDefault();
    const inputNameValue = inputNameElement.value;
    const inputSurnameValue = inputSurnameElement.value;
    const peopleNameList = []
    textElement.innerHTML = ""
    
    const apiCall = (inputNameValue, inputSurnameValue) => {
        fetch(`https://swapi.py4e.com/api/people/?search=${inputNameValue ||inputSurnameValue}`)
        .then(response => response.json())
       
        .then(data => {
        
            for (let element in data.results) {
                const name = data.results[element].name.split(' ')

                textElement.innerHTML += `<p>Nombre:  ${data.results[element].name}, género:  ${data.results[element].gender} </p>`

                const peopleNameObj = {
                    name : name[0],
                    surname : name[1]
                }

                peopleNameList.push(peopleNameObj);
                localStorage.setItem(`names`, JSON.stringify(peopleNameList))  
            }
        })
    }

    console.log(localStorage.getItem('names'))
    if (localStorage.getItem('names') === null) {
        apiCall(inputNameValue, inputSurnameValue);
    } else {
        const namesLS = JSON.parse( localStorage.getItem('names'));
        for (let person in namesLS) {
            if (namesLS[person].name.includes(inputNameValue) || namesLS[person].surname.includes(inputSurnameValue)) {
                console.log('Están guardados')
                textElement.innerHTML += `<p>Nombre:  ${namesLS[person].name} ${namesLS[person].surname} </p>`
            } else {
                apiCall(inputNameValue, inputSurnameValue);
            }
    }}
}


buttonElement.addEventListener('click', handlerFunction);