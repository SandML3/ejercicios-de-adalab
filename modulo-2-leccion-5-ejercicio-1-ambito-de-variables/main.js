'use strict'

// modificamos una variable de ámbito global
let secretLetter = 'y';


function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}


// console.log(mySecretLetter()); // devuelve "x"
// console.log(secretLetter); // devuelve "x"

console.log(secretLetter); // devuelve "y"
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"

//Al cambiar el orden de los console.log() pasamos de ejecutar la función después de imprimir la variable en consola, de forma que al imprimirla se refleja su valor orginal, y será posteriormente, al ejecutar la función, cuándo su valor se cambie. Podríamos comporbarlo con un tercer console.log() tras la ejecución de la función, y esta vez sí que debería imprimir el valor "x".