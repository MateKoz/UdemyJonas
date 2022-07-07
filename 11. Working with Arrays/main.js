'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
    containerMovements.innerHTML = '';


    movements.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal'

        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            <div class="movements__value">${mov}</div>
        </div>
`;

        containerMovements.insertAdjacentHTML('afterbegin', html)
    })
}

displayMovements(account1.movements);

const createUserNames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('')
    })
};
createUserNames(accounts);
console.log(accounts)


createUserNames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//
// let arr = ['a', 'b', 'c', 'd', 'e'];
// //slice method.
// //wycinamy kawalek tablicy, slice tworzy nam nowa tablice
//
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1)); //ostatnie element w tablicy
// console.log(arr.slice());//kopiowanie płytnie calej tablicy, z pustymi nawiasmai
//
// //splice
// //zmienia oryginalna tablice
// console.log(arr.splice(2))
// console.log(arr)
//
// //revers odrwraca tablice
// //concat laczy dwie tablice ze soba;
// // np. arr1.concat(arr2)
// //join laczenie tablocy w stringa oddzielajacym znakiem w joinie
// //join('-')
//
//
// const arr3 = [23, 11, 64];
// console.log(arr3.at(0));
//
// console.log(arr3[arr3.length - 1]) //ostatni element metoda [];
// console.log(arr3.at(-1)) // ostatni element metoda at.
//
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
// // for (const movement of movements) {
// //     if(movement > 0) {
// //         console.log(`You deposited ${movement}`)
// //     } else {
// //         console.log(`You withdrew ${Math.abs(movement)}`)
// //     }
// // }
//
// movements.forEach(item => {
//     item > 0 ? console.log(`You deposited ${item}`)
//         : console.log(`You withdrew ${Math.abs(item)}`)
// })

//metoda slice tworzy nam nowa tablicem ktora musimy przypisac do innej zmiennej
//metoda splice dziala na konkretnej tablicy


const checkDog = function (dogsJulia, dogsKate) {
    const correctDogsJulia = dogsJulia.slice();
    correctDogsJulia.splice(0, 1);
    correctDogsJulia.splice(-2);
    const dogs = correctDogsJulia.concat(dogsKate);
    console.log(dogs)

    dogs.forEach(function (dog, i) {
        if (dog >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
        } else {
            console.log(`Dog number ${i + 1} is still a puppy 🐶`)

        }
    })

};
// checkDog([1,2,3,4,5,6,7,8],[1,2,3,4,5])

//metoda map, filter, reduce
//metoda map, filter, reduce
//metoda map, filter, reduce

//map
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

// const movementsUsd = movements.map(function (mov) {
//     return mov * euroToUsd
// })
const movementsUsd = movements.map(mov => mov * euroToUsd)

// console.log(movements)
// console.log(movementsUsd)

const movementsDescription = movements.map((mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : `withdrew`} ${Math.abs(mov)} `
)

// console.log(movementsDescription)


// const obj1 = {
//     name: "Mateusz",
//     surname: 'Kozlowski'
// }
//
// const obj2 = {
//     name: "Kamil",
//     surname: 'Kamilowski'
// }
//
// const obj3 = {
//     name: "Michał",
//     surname: 'Michalski'
// }
//
// const obj4 = {
//     name: "Darek",
//     surname: 'Darecki'
// };
//
// const objects = [obj1, obj2, obj3, obj4];
//
// console.log(objects)
// const objFunction = function (objs) {
//     objs.forEach(function (obj){
//         obj.newProperty = obj.surname.toLowerCase();
//     })
// }
// objFunction(objects)
// console.log(objects)



const deposits = movements.filter(function (mov){
    return mov > 0;
})

console.log(deposits)

const withdraws = movements.filter(mov => mov <0)
console.log(withdraws)
