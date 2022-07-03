'use strict';

const isra = document.querySelector(".teacher--isra");
const tuerto = document.querySelector(".teacher--tuerto");
const nasi = document.querySelector(".teacher--nasi");



isra.addEventListener("click", () => {
  const teacher = event.currentTarget;
  teacher.classList.toggle("teacher--selected");
  const favorite = isra.querySelector(".favorite");
  const favoriteValue = isra.querySelector(".favorite").innerHTML;
  
  if (favoriteValue == "Añadir") {
    favorite.innerHTML = "Quitar";
  } else if (favoriteValue == "Quitar") {
    favorite.innerHTML = "Añadir";
  }
})

tuerto.addEventListener("click", () => {
    const teacher = event.currentTarget;
    teacher.classList.toggle("teacher--selected");
    const favorite = tuerto.querySelector(".favorite");
    const favoriteValue = tuerto.querySelector(".favorite").innerHTML;
    
    if (favoriteValue == "Añadir") {
      favorite.innerHTML = "Quitar";
    } else if (favoriteValue == "Quitar") {
      favorite.innerHTML = "Añadir";
    }
  })


  nasi.addEventListener("click", () => {
    const teacher = event.currentTarget;
    teacher.classList.toggle("teacher--selected");
    const favorite = nasi.querySelector(".favorite");
    const favoriteValue = nasi.querySelector(".favorite").innerHTML;
    
    if (favoriteValue == "Añadir") {
      favorite.innerHTML = "Quitar";
    } else if (favoriteValue == "Quitar") {
      favorite.innerHTML = "Añadir";
    }
  })