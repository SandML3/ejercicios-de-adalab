const firstDogImage = "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage = "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage = "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";



document.querySelector(".list").innerHTML = `<li class="list__item"><img class="img" src=${firstDogImage} title=${firstDogName} alt=${firstDogName} />${firstDogName}</li>
<li class="list__item"><img class="img" src=${secondDogImage} title=${secondDogName} alt=${secondDogName} />${secondDogName}</li>
<li class="list__item"><img class="img" src=${thirdDogImage} title=${thirdDogName} alt=${thirdDogName} />${thirdDogName}</li>`