'use strict';

//scope - zasieg funkcyjny, blokowy
//scope - zasieg funkcyjny, blokowy

// function calcAge(birthYear) {
//     const date = new Date();
//     const age = date.getFullYear() - birthYear;
//
//     function printAge() {
//         const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output)
//
//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             const firstName = 'Steven'
//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str)
//         }
//     }
//
//     printAge()
//
//     return age;
// }
//
// const firstName = 'Mateusz';
// calcAge(1990);


//hoisting
//hoisting

// const myName = 'Mateusz';
//
// if(myName === 'Mateusz') {
//     console.log(`Mateusz job is a ${job}`);
//     const age = 2037 - 1990;
//     console.log(age);
//     let job = 'teacher';
//     console.log(x)
// };


//variables
//variables
// console.log(me);
// console.log(job)
// console.log(birthYear)
//
//
// var me = 'Mateusz';
// let job = 'teacher';
// const birthYear = 1990;

//function
//function


// console.log(addDecl(2, 3));
// console.log(addExpr(2,3))
// console.log(addArrow(2,3))
//
//
// function addDecl(a, b) {
//     return a + b
// }
//
// const addExpr = function (a, b) {
//     return a + b
// }
//
// const addArrow = (a, b) => a + b;

// console.log(numProducts);
// console.log(!numProducts)
// if(!numProducts) deleteShoppingCart();
//
// var numProducts = 10;
//
// function deleteShoppingCart() {
//     console.log('all products deleted!')
// }

// var x = 1;
// let y = 2;
// const z = 3;


//THIS
//THIS
//THIS
//THIS


// console.log(this);
//
// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this)
// };
//
// calcAge(1990)
//
// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this)
// };
//
// calcAgeArrow(1980)
//
//
//
// const mateusz = {
//     year: 1991,
//     calcAge: function () {
//         console.log(2038 - this.year)
//         console.log(this)
//     }
// }
// mateusz.calcAge();
//
//
// const matilda = {
//     year: 2038,
// };
//
// matilda.calcAge = mateusz.calcAge;
// matilda.calcAge();
//
// const f = mateusz.calcAge;
//
// f();

// const mateusz = {
//     firstName: 'Mateusz',
//     year: 1990,
//     calcAge: function () {
//         console.log(this);
//         console.log(2037 - this.year);
//
//         // const self = this
//         // const isMillenial = function() {
//         //     console.log(self)
//         //     console.log(self.year >= 1981 && self.year <= 1996)
//         // };
//
//         const isMillenial = () => {
//             console.log(this)
//             console.log(this.year >= 1981 && this.year <= 1996)
//         };
//
//         isMillenial();
//     },
//     greet: () => console.log(`Hey ${this.firstName}`)
// };
// mateusz.greet();
// mateusz.calcAge();

//
// const addExpr = function (a, b) {
//     console.log(arguments)
//     return a + b
// };
//
// addExpr(2, 5)
//
// var addArrow = (a, b) => {
//     console.log(arguments)
//     return a + b
// }
//
// addArrow(2, 3)


//primitives vs object
//primitives vs object
//primitives vs object


// let age = 30;
// let oldAge = age;
// age = 31;
//
// console.log(age)
// console.log(oldAge)


// const me = {
//     name: 'Mateusz',
//     age: 30,
// }
//
// const friend = me;
// friend.age = 31;
//
// console.log(friend.age)
// console.log(me.age);


//primitives types
//primitives types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
//
// console.log(lastName)
// console.log(oldLastName)
//
//
// //reference types
// //reference types
// const jessica = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
// };
//
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
//
// console.log('Before marriage:', jessica)
// console.log('Before marriage:', marriedJessica);

//copying objects
//copying objects

const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};

//kopiujemy obiekt
const jessicaCopy = Object.assign({}, jessica2);

jessicaCopy.lastName = 'Davis'

jessicaCopy.family.push('Mary')
jessicaCopy.family.push('John')

console.log('Before marriage:', jessica2)
console.log('Before marriage:', jessicaCopy);


















