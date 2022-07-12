'use strict'

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    //Nigdy tak nie nalezy robić. Niw tworzyc metody wewnąrz funkcji konstruktor
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear)
    // }
}

const mateusz = new Person('Mateusz', 1990);

// console.log(mateusz)

//1. New {} is created
//2. Function is called, this = {}, new empty object;
//3. {} linked to prototype
//4. Function automatically return {}

const matilda = new Person('Matylda', 2018);
const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

//sprawdzanie czy dany obiekt nalezy do danej instancji true/false
// console.log(mateusz instanceof Person);

Person.hey =  function () {
    console.log(`Hey there`)
}

Person.hey()

//Prototypes
//Prototypes
// console.log(Person.prototype)

// Person.prototype.calcAge = function () {
//     console.log(2038 - this.birthYear)
// }
//
// matilda.calcAge();
// jack.calcAge()
// mateusz.calcAge()
//
// // console.log(mateusz.__proto__)
//
// Person.prototype.species = 'Homo Sapiens';
// // console.log(mateusz.species, matilda);
// // console.log(mateusz.hasOwnProperty('firstName'))
// // console.log(mateusz.hasOwnProperty('species'))
//
// //210. Prototypal Inheritance and the prototype chain
//
// // console.log(mateusz.__proto__.__proto__);
// // console.dir(Person.prototype.constructor)
//
//
// const arr = [3, 6, 7, 8, 4, 3, 2, 1];
//
// // console.log(arr.__proto__);
//
// Array.prototype.unique = function () {
//     return [...new Set(this)]
// }
// // console.log(Array.prototype.unique())
// //
// // console.log(arr.unique())
//
// const h1 = document.querySelector('h1');
//
//
// //Class expression
// const PersonCl1 = class {
//
// }
//
//
//class declaration
class PersonCl2 {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear
    }
//instance methods
//Method will be added to .prototype property.
    calcAge() {
        console.log(2038 - this.birthYear)
    }
    greet() {
        console.log(`Hey ${this.firstName}`)
    }
    get age() {
        return 2037 - this.birthYear;
    }

    //Set a propety that already exists
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    }
    get fullName() {
        return this._fullName
    }

    static hey() {
        console.log('hello there')
        console.log(this)
    }
}

const jessica = new PersonCl2('Jessica Davis', 1996);
jessica.calcAge();
jessica.greet()

//1. Classes are NOT hoisted
//2. Classes are first-class citizes
//3. Classes are execute in strict mode.


//214. Setters and Getters

// const walter = new PersonCl2('Walter', 1965)
PersonCl2.hey()

const account = {
    owner: 'mateusz',
    movements: [200, 520, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov)
    }
}

// console.log(account.latest)

account.latest = 50;
// console.log(account.movements)

//215. Static Method;
//215. Static Method;

//216. Object.create;


