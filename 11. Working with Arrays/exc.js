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
    // console.log(dogs)

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
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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


const deposits = movements.filter(function (mov) {
    return mov > 0;
})

// console.log(deposits)

const withdraws = movements.filter(mov => mov < 0)
// console.log(withdraws)


//reduce method
//reduce method
//reduce method

// console.log(movements)
const sum = movements.reduce((arr1, arr2) => arr1 + arr2,);

// console.log(sum)
//maximum value

const maximumValue = movements.reduce((acc, mov) => acc > mov ? acc : mov);
// console.log(maximumValue)

const totalDepositUSD = movements
    .filter(mov => mov > 0)
    .map(mov => mov * euroToUsd)
    .reduce((acc, curr) => acc + curr)
// console.log(totalDepositUSD)

//CODE CHALLENGE #3

// const calcAverageHumanAge = function (ages) {
//     const humanAges = ages.map(age =>
//         age <= 2 ? 2 * age : 16 + age * 4);
//     const filterAge = humanAges.filter(age => age >= 18);
//     console.log(filterAge)
//     const averageAge = filterAge.reduce((acc, curr) =>
//         acc + curr) / filterAge.length
//     console.log(averageAge)
// }
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])

const calcAverageHumanAge = ages => {
    const humanAverageAge = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
        .filter(age => age >= 18)
        .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
    // console.log(humanAverageAge)
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])

//FIND METHOD
//FIND METHOD
const firstWithDrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithDrawal)
// console.log(accounts)
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account)

//find index method;
//find index method;

const owners = ['Jonas', 'Mateusz', 'Adam', 'Marta'];

console.log(owners.sort())
console.log(owners);

movements.sort((a, b) => a - b)

console.log(movements)
