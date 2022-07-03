'use strict';

const text = document.querySelector(".text");
const main = document.querySelector(".main");
const newContent = `<p class="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aliquam. Aperiam corporis, quasi rem perferendis ipsum, doloribus nulla accusantium sed sapiente odio rerum! Sequi dolorem fugiat sit voluptas debitis ut!</p>`;


text.addEventListener("mouseover", () => {
    main.innerHTML += `${newContent}`;
});

