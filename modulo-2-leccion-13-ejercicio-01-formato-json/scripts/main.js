'use strict';

const imgElement = document.querySelector('.img');
const buttonElement = document.querySelector('#button')


function getChihuahua (ev) {
    ev.preventDefault();
    fetch(`https://dog.ceo/api/breed/chihuahua/images/random`)
    .then(response => response.json())
    // .then(data => console.log(data.message))
    .then(data => {
        imgElement.src = data.message;
        imgElement.title = 'Chihuahua';
    });
}


buttonElement.addEventListener('click', getChihuahua)