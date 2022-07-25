'use strict';

/* 1. Sesión expirada
Con JavaScript, crear un código para mostrar una ventana en nuestro navegador una vez transcurridos 15 segundos que ponga "su sesión ha expirado" (creada usando HTML y CSS). */

const countdown = () => {
  
  const time = document.querySelector(".time");
  time.innerHTML = `Su sesión ha expirado`;
  clearInterval(counter)
};

setTimeout(countdown, 15000);