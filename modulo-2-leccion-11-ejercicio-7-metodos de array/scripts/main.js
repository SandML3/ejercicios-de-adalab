'use strict';


const main = document.querySelector('.main');

const christmasTreeCreator = (height) => {
    
    for (let i = 0; i < height; i++) {
        i === 0 ?main.innerHTML = `<p class="star">★</p>` :main.innerHTML += `<p class="text">${'▲'.repeat(i)}</p>`
    }

    const threeLeaves = document.querySelectorAll('.text');
    threeLeaves.forEach(item => item.innerHTML += '▲'.repeat(item.innerHTML.length/2));
   
    
}

christmasTreeCreator(6);