'use strict';


//Creando paletas en DOM avanzado.

const listPalette = document.querySelector('.js-list-palette');

let palettes = [];
let favourites = [];


//Renderiza cada paleta.
const renderPalette = (palette) => {
    const liElement = document.createElement('li');
    liElement.setAttribute('class', 'palette js-palette')
    liElement.setAttribute('id', palette.id);
    const titleElement = document.createElement('h2');
    const titleContent = document.createTextNode(palette.name);
    titleElement.appendChild(titleContent);

    const divElement = document.createElement('div');
    divElement.setAttribute('class', 'palette__colors');

    const paletteColors = [];
    for (let key in palette.colors) {
        const divColorElement = document.createElement('div');
        divColorElement.setAttribute('class', 'palette__color');
        divColorElement.setAttribute('style', `background-color:#${palette.colors[key]}`);
        paletteColors.push(divColorElement);
    }
    
    listPalette.appendChild(liElement);
    liElement.appendChild(titleElement);
    liElement.appendChild(divElement);
    paletteColors.forEach(color => divElement.appendChild(color));
}

//Desglosa la lista de paletas y las manda a renderizar individualmente.
const getPalette = (palettes) => palettes.forEach(item => renderPalette(item))

const getDataApi = () => {
    fetch('https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palettes.json')
    .then(response => response.json())
    .then(data => {
        palettes = data.palettes; 
        getPalette(palettes); 
        listenerPalettes();
    })
}

getDataApi();

const handlerClick = (event) => {
    event.preventDefault();
    const paletteSelected = event.currentTarget.id;
    const paletteFound = palettes.find(palette => palette.id === paletteSelected);
    const favouriteFound = favourites.findIndex(fav => fav.id === paletteSelected);

    favouriteFound === -1
        ? favourites.push(paletteFound)
        : favourites.splice(favouriteFound, 1);
    console.log(favourites)
}

const listenerPalettes = () => {
    const paletteElement = document.querySelectorAll('.js-palette');
    paletteElement.forEach(palette => palette.addEventListener('click', handlerClick))
}

