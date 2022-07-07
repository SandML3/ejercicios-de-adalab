'use strict'


//La luna del cazador es la luna llena de octubre más cercana al equinocio de otoño. Sin embargo, cada 3 años cae a principios de noviembre.
//Para resolver este ejercicio:
  //1. Disponemos de una de las fechas en las que se produjo la luna del cazador : 5 de octube de 2017.
  //Sabemos que las lunas llenas se producen cada 29.5 días.
  //Hay 12 lunas llenas al año, y la luna del cazador se porduce una vez al año, así que tendrían que pasar 12 lunas llenas antes de que se vuelva a dar.
  //Habría que sumarle a la fecha anterior 29.5 * 12 = 354 días.
  //Creamos un objeto con los meses del año y los días del mes.
  

const monthDays = {
    enero : 31,
    calcFebruaryDays : (year) => ((year % 4 === 0 && year % 100 !== 0)|| (year % 400 === 0)) ? 28 : 29 ,
    febrero : calcFebruaryDays(year),
    marzo : 31,
    abril : 30,
    mayo : 31,
    junio : 30,
    julio : 31,
    agosto : 31,
    septiembre : 30,
    octubre : 31,
    noviembre : 30,
    diciembre : 31
};

for (let i = 0; i < 15; i++) {
   
};

function sumDaysDate (day, month, year, sumDays) {
    const resultDate = [];
    monthDays.feberero = monthDays.calcFebruaryDays(year);
    let resultDays = sumDays(day, sumDays);
    resultDays = sumDays -= monthDays[month];
    const resultMonth = monthCalculate(resultDays, month);
    

};

function sumDays (day, sumDays) {
    if (day + sumDays > monthDays[month]) {}
};

function monthCalculate (month) {
    let resultMonth
    for (let i = 0; i < monthDays.lenght; i++) {
        if (month === i && sumDays <= monthDays[i]) {
            resultMonth = month;
            return resultMonth;
        } else if (month === i && sumDays > monthDays[i]) {
            do {
                sumDays -= monthDays[i];
                month = i++;
                resultMonth = i++;
            } while (sumDays > monthDays[i]);
            return resultMonth;
        }
    }
}

function resultYear (year, resultDays) {
    if (resultDays >= 365) {
        return year + (resultDays / 365);
    } else return year;

}