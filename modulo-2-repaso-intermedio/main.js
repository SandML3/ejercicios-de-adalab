const selectFeeling = document.querySelector('.main__select--feeling');
const updateButton = document.querySelector('.main__button--update');
const textFeeling = document.querySelector('.main__face');
const background = document.querySelector('.main');


const updateFeelingText = () => textFeeling.innerHTML = selectFeeling.value;
const aleatoryNumerGenerator = () => Math.round(Math.random() * (100));
const isPairOrNot = (number) => number % 2 === 0 ? true : false;
const changeBackgroundColor = (number) => !isPairOrNot(number) ?background.classList.add('numberOdd') :background.classList.remove('numberOdd');

const handlerFunction = (event) => {
    updateFeelingText();
    const aleatoryNumber = aleatoryNumerGenerator();
    changeBackgroundColor(aleatoryNumber);
};

updateButton.addEventListener('click', handlerFunction);

