'use strict';

const notification = document.querySelector(".container");
const notificationTitle = document.querySelector(".container__title");
const notificationText = document.querySelector(".container__text");


if (notification.classList.contains("warning")) {
    notificationTitle.innerHTML = `Aviso`;
    notificationText.innerHTML = `Tenga cuidadín`;
} else if (notification.classList.contains("error")) {
    notificationTitle.innerHTML = `Error`;
    notificationText.innerHTML = `Ha surgido un error`;
} else if (notification.classList.contains("success")) {
    notificationTitle.innerHTML = `Correcto`;
    notificationText.innerHTML = `Los datos son correctos`;
}

// Listo para añadir la clase desde la consola del navegador con notification.classList.add("warning")