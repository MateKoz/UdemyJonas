'use strict';

// let hasDriversLicense = false;
// const passTest = true;
//
// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense)
// console.log(' i can drive');

//calling running invoking function;

// function logger() {
//     console.log('my name is maeusz');
// }
//
//
// function fruitProcessor(apples, oranges) {
//     const juice = `Juices with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
//
// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);
//
// const appleOrangeJuice =  fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


//function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1990);
console.log(age1);


//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1992);
console.log(age2);





