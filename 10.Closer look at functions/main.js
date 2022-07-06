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



const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`)
    }
}

const greetArr  = greeting => name => console.log(`${greeting} ${name}`)


const greeterHey = greet('Hey');
greeterHey('Jonas')
greeterHey('Stevenh');



//the call and apply methhod

