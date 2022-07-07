'use strict'


const sendButton = document.querySelector('.button');


const favouriteBooks = [];

const restoreInput = () => document.querySelector('.form__input').value = '';
const arrayCreator = () => {
    let inputText = document.querySelector('.form__input').value;
    favouriteBooks.push(inputText);
    return favouriteBooks;
};


const boot = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`¡A mí también me encantó ${arr[i]}! Tenemos mucho en común, humana`);
    }
}

const handlerSendButton = (ev) => {
    ev.preventDefault();
    const arr = arrayCreator();
    restoreInput();
    console.log(favouriteBooks);
    boot(arr);
};


sendButton.addEventListener('click', handlerSendButton);