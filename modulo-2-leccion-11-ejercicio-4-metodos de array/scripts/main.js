'use strict';


const tasks = [
    { name: "Recoger setas en el campo", completed: true },
    { name: "Comprar pilas", completed: true },
    { name: "Poner una lavadora de blancos", completed: true },
    { name: "Aprender cómo se realizan las peticiones al servidor en JavaScript", completed: false,},
  ];


const textTaskCount = document.querySelector('.counter');

let tasksDone = tasks.filter(task => task.completed).length;

textTaskCount.innerHTML = `Tienes ${tasks.length} tareas. ${tasksDone} completadas y ${tasks.length - tasksDone} por realizar`

for (let i = 0; i < tasks.length; i++) {
document.querySelector('.main').innerHTML += `<p class="text${i + 1} ">${i + 1}. ${tasks[i].name}</p><input type="checkbox" class="checkbox${i + 1} checkbox" id="${i}"/>`;
if (tasks[i].completed) {
    document.querySelector(`.text${i + 1}`).classList.add('completed');
    document.querySelector(`.checkbox${i + 1}`).setAttribute('checked','');
};
};

const inputTask = document.querySelectorAll('.checkbox');


const checkingInputs = (input) => {
    if (input.hasAttribute('checked')) {
        input.removeAttribute('checked');
        tasks[input.id].completed = false;
        document.querySelector(`.text${parseInt(input.id) + 1}`).classList.remove('completed');
    } else {
        input.setAttribute('checked', '');
        tasks[input.id].completed = true;
        document.querySelector(`.text${parseInt(input.id) + 1}`).classList.add('completed');
    };
};

const updateCounter = () => document.querySelector('.counter').innerHTML = `Tienes ${tasks.length} tareas. ${tasks.filter(task => task.completed).length} completadas y ${tasks.length - tasks.filter(task => task.completed).length} por realizar`;


const handlerInput = (event) => {
    event.preventDefault();
    const input = event.currentTarget;
    checkingInputs(input);
    updateCounter();
};


inputTask.forEach(input => input.addEventListener('change', handlerInput));

