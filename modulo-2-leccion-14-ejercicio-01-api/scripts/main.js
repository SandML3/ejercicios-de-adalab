'use strict';


fetch(`https://swapi.py4e.com/api/`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.people)
    });

fetch(`https://swapi.py4e.com/api/people/1/?format=wookiee`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    });



// Identifica la siguiente información sobre SWAPI:
//     la URL base del API: https://swapi.py4e.com/api/.
//     si necesita autenticación: NOP, es 'a completely open API'.
//     método HTTP que deben usar las peticiones a este API: GET.
//     URL para acceder a la info del personaje "Luke Skywalker": "https://swapi.py4e.com/api/people/1/"
//     URL para acceder a la info de la película "A New Hope": "https://swapi.py4e.com/api/films/1/"
//     a qué otros recursos puedo acceder desde el API además de personajes y pelis: especies, vehículos, planetas y naves espaciales.
//     URL para acceder al listado de personajes, ¿está paginada?: SIP, solo te ofrece los 10 primeros personajes, pero hay 87.
//     cómo puedo buscar personajes mediante la URL: añadiendo al final de la url '/?search=' seguido de la palabra que queramos buscar.
//     cómo puedo hacer que el JSON de una petición se me devuelva traducido a     Wookiee:  '?format=wookiee'.