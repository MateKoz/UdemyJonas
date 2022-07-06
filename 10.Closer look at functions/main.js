// 'use strict';
// const bookings = [];
//
// const createBooking = function (flightNun, numPassengers = 1, price = 199) {
//
//
//     const booking = {
//         flightNun,
//         numPassengers,
//         price,
//     }
//     console.log(booking);
//     bookings.push(booking)
// }
//
// createBooking('LH123');
// createBooking('LH123', 2, 800);
//

// const flight = 'LH234';
// const mateusz = {
//     name: 'Mateusz Kozlowski',
//     passport: 90060213656
// }
//
// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999'
//     passenger.name = 'Mr.' + passenger.name;
//
//     if(passenger.passport === 90060213656) {
//         alert('check in')
//     } else {
//         alert('Wrong number of passport')
//     }
// }
// console.log(flight)
// checkIn(flight, mateusz);
//
// // console.log(flight)
// console.log(mateusz)
//
//
// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 10000000);
// }
//
// newPassport(mateusz)
// console.log(mateusz.passport)
// checkIn(flight, mateusz);


//
// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// }
//
// const upperFirstWord =  function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ')
// };
//
// //Higher-order function
//
// const transformer = function (str, fn) {
//
//     console.log(`Original string: ${str}`)
//     console.log(`Transformed string: ${fn(str)}`);
//
//     console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best!', upperFirstWord)
// transformer('Javascript is the best!', oneWord);


const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`)
    }
}

const greetArr = greeting => name => console.log(`${greeting} ${name}`)


const greeterHey = greet('Hey');
greeterHey('Jonas')
greeterHey('Stevenh');


//the call and apply methhod

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({
            flight: `${this.iataCode}${flightNum}`,
            name: `${name}`
        })
        console.log(this.bookings)
    },
}

lufthansa.book('123', 'Mateusz');
lufthansa.book('1323', 'Mateusz Kozłowski');

const euroWings = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
}

//uzuwanie call.
//wyciagamy metodez z lufthansy poza obiekt i przypisujemy ja do zmiennej
// za pomoca slowa kluczowego 'call' wywoljemy ja a w nawiasach podajemy
// (1. obiekt w ktorym mamy wykonac dana funkcje, parametry funkcji).

const book = lufthansa.book
book.call(euroWings, 232312321, 'Mateusz Mateusz');
console.log(euroWings)

const swiss = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
}

book.call(swiss, 1234, 'Mateusz Barni Aneta');
console.log(swiss);

//APPLY METHOD
//Dziala na takiej samej zasadzie jak call z takim wyjatkiem, ze w nawiasach nie podajemy osobno wszystkich parametrów,
// lecz tworzymy nowa tablice, w ktorej umieszczamy te parametry.
//pobiera metoda apply z nawiasu, najpierw obiekt na ktorytm mamy wykona dana metode,
// a nastepnie podajemy tablice, z ktorej pobiera pozostale parametry.
// nie uzywa sie tej metody dzisiaj, jak chcemy pobrac dane z tablicy w formie parametrów,
// to uzuwamy destrkturyzacji.

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

//uzycie metody call z destrukturyzacja tablicy flightData,
book.call(swiss, ...flightData);

//BIND METHOD
//Tworzymy nowa zmiena, a wlasciwie funkcje, do ktorej przypisujemy metode i bindujemy ja.

// book.call(euroWings, 23, 'Mateusz Mateusz');

const callEW = book.bind(euroWings);
callEW(23, 'Mateusz Kozłowski')
console.log(euroWings)

//W nawiasach w bind pierwsze ustalamy obiekt, w ktorej chcemy wywolac dana funkcje,
// i dodatkowo mozemy na SZTYWNO wrzucić jeden parametr.
// a przy wywolywaniu nie musimy podawać go jeszcze raz, bedzie przypisany na stałe,
// jedynie podajemy drugi parametr.

const bookEW23 = book.bind(euroWings, 23)
bookEW23('Mateusz Kozlowski Bind 1')
bookEW23('Mateusz Kozlowski Bind 2')

//bind with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this)
    this.planes++
    console.log(this.planes)
}

document.querySelector('.buy').addEventListener
('click', lufthansa.buyPlane.bind(lufthansa))


//Partial application
//Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200))

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate
    }
}

const addVAT2 = addTaxRate(0.23)

console.log(addVAT2(100));



