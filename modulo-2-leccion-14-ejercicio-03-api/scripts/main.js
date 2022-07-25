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
            for (let element in data.results) {
                textElement.innerHTML += `<p>Nombre:  ${data.results[element].name}, género:  ${data.results[element].gender} </p>`
            }
        })
}


buttonElement.addEventListener('click', handlerFunction);

// Al abrir la pestaña Network aparece vacía así que comienza a hacer peticiones con la pestaña abierta. Con la información que obtienes de esta pestaña averigua:
    // dónde está el método de petición: seleccionando Fetch/XHR y pinchando sobre el elemento en name. Request method.
    // el código de la respuesta (recuerda que 200 es OK). Status code.
    // en las cabeceras de la petición busca una llamada user-agent, ¿qué puedes decir de su contenido?: Parecen compatibilidades con navegadores.
    // la respuesta del servidor en JSON. En la sección response de la petición.
    // al recargar la página aparecen un montón de peticiones en la pestaña Network, ¿sabrías filtrar solo las que son de AJAX? Pista: antes de fetch las peticiones se hacían con el objeto XMLHttpRequest (XHR): seleccionando Fetch/XHR