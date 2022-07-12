'use strict';

const searchInputElement = document.querySelector('#searchInput');
const buttonElement = document.querySelector('.button');
const textElement = document.querySelector('.text');


const validateInputSearch = () => {
    let username;
    if (searchInputElement.value) {
        username = searchInputElement.value;
        textElement.innerHTML = '';
        return username;
    } else {
        username = undefined;
        textElement.innerHTML = 'Debes introducir un nombre de usuario.';
    };
}


function getUserInfo (ev) {
    ev.preventDefault();
    const username = validateInputSearch();
    const textName = document.querySelector('.name');
    const numberRepos = document.querySelector('.numberRepos')
    const image = document.querySelector('.image');
    console.log(username)
    
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            textName.innerHTML = `Nombre de usuario: ${data.login}`;
            image.src = data.avatar_url;
            image.title = `Imagen de perfil de ${data.login}`;
            numberRepos.innerHTML = `Número de repositorios: ${data.public_repos}`;
        });
    }


buttonElement.addEventListener('click', getUserInfo)