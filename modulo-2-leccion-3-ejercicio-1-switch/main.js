'use strict';


function getData () {
    const ingredient = document.getElementById("ingredient").value;
    const recipe = document.querySelector(".recipe");

    // if (ingredient === "pollo") {
    //     return recipe.innerHTML= `Puedes freirte un filetito con papitas.`
    // } else if (ingredient === "espinacas") {
    //     return recipe.innerHTML= `Espinacas salteadas con huevo...¡Riquísimas!.`
    // } else if (ingredient === "merluza") {
    //     return recipe.innerHTML= `Merluzita en salsa verde y...¡a merendar temprano!`
    // } else  {
    //     return recipe.innerHTML = `Vaya, tendrás que ir al súper.`
    // }

    switch (ingredient) {
        case "pollo":
            return recipe.innerHTML= `Puedes freirte un filetito con papitas.`;
        case "espinacas":
            return recipe.innerHTML= `Espinacas salteadas con huevo...¡Riquísimas!.`;
        case "merluza":
            return recipe.innerHTML= `Merluzita en salsa verde y...¡a merendar temprano!`;
        default:
            return recipe.innerHTML = `Vaya, tendrás que ir al súper.`;
    }

}


