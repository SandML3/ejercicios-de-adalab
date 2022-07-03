'use strict'

// function calculator (borderBox, width, padding, borderSize) {
//     let widthContent;
//     let widthBox;
//     if (borderBox) {
//         widthContent = width;
//         widthBox = width + padding + borderSize;
//         return `El ancho del contenido es: ${width}px y el ancho total de la caja es: ${widthBox}px.`
//     } else {
//         widthContent = width;
//         widthBox = width;
//         return `El ancho del contenido es: ${width}px y el ancho total de la caja es: ${widthBox}px.`
//     }
// }

const boxSize = (borderBox, width, padding, borderSize) => borderBox ?`El ancho del contenido es: ${width}px y el ancho total de la caja es: ${width + padding + borderSize}px.` :`El ancho del contenido es: ${width}px y el ancho total de la caja es: ${width}px.`;

console.log(boxSize (true, 3, 2, 5));
console.log(boxSize (false, 3, 2, 5));
console.log(boxSize (true, 9, 2, 5));