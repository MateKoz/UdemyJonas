'use strict'

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri'];

const openingHour = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0,
        close: 24,
    },
}
const restaurant = {
    name: "Classico Italiano",
    location: 'Via Analgo tavanti 23, Firenze, Italy',
    categorise: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery(starterIndex, mainIndex, time, address) {
        console.log(`Order recived! ${this.starterMenu[starterIndex]} and`)
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicous pasta with ${ing1}. ${ing2} and ${ing3}`)
    },

    orderPizza(mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log([...otherIngredient])
    },
    openingHour,


};
// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via de Sole, 21',
//     mainIndex: 2,
//     starterIndex: 2,
// })
// console.log('====================')
//
// //destrukturyzach
//
// const arr = [2, 3, 4]
//
// const [x, y, z] = arr;
// console.log(x, y, z);
//
//
// let [main, secondary,] = restaurant.categorise;
//
// // console.log(main, secondary);
//
// [main, secondary] = [secondary, main];
// console.log(main, secondary);
//
//
// //receive 2 return values from a array
//
// console.log(restaurant.order(2, 0));
//
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse)
//
//
// //destructuring array in another array
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);
//
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r)
//
// //destructurin object;
// const {name, openingHour, categorise} = restaurant;
// console.log(name, openingHour, categorise);
//
// const {
//     name: restaurantName,
//     openingHour: hours,
//     categorise: tags
// } = restaurant
//
// // console.log(restaurantName, hours, tags);
//
// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters)
//
// //Mitating variables;
// //Mitating variables;
//
//
// let a = 111;
// let b = 999;
//
// const obj = {
//     a: 23,
//     b: 7,
//     c: 14,
// }
//
// const {fri: {open: o, close: c}} = openingHour;
// console.log(`dsadas ` + o, c);


//Spread operatos
//Spread operatos


// const firstArray = [7, 8, 9];
// const badNewArr = [1, 2, ...firstArray];
//
// console.log(badNewArr)
// console.log(...badNewArr);
//
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
//
// // const ingredients = [prompt('Lets make pasta! ingredient1?'), prompt('Ingredient 2?'),
// //     prompt('Ingredient3')];
// // console.log(ingredients);
//
// restaurant.orderPasta(...ingredients);
//
// const newRestaurant = {...restaurant, founder: 'Giusepope'};
// console.log(newRestaurant);

//REST Operator
//REST Operator

// const [aa, bb, ...others] = [1, 2, 3, 4, 5];
// console.log(aa, bb);
// console.log(others)

// const add = function (...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++)
//         sum += numbers[i]
//     console.log(sum)
// };
//
// add(2, 3);
// add(2, 3, 4, 5, 6, 9);
//
//
// const x = [23, 5, 2];
// add(...x);
// restaurant.orderPizza('Mushrooms', 'Chesse', 'Ham', 'Corn', 'Salami');
// restaurant.orderPizza('Salami');
//
// console.log(3 && 'Mateusz');
//
// console.log('------------AND---------------');
// //jesli pierwsza wartosc jest prawdziwa, to zwraca ta drugą
// console.log(0 && 'Mateusz');
// console.log(0 && null && 'Mati')
//
// console.log('------------OR---------------');
//
// //|| jeśli pierwsza wartość jest prawdziwa, to zwraca prawdziwqa, jesli jest falszywa to zwraca tą druga, fałszywaą
// console.log(10 || 'Mateusz');


//The nullish coalscing operator ??
//The nullish coalscing operator ??


// restaurant.numGuest = 0;
// const guest = restaurant.numGuest || 10;
// console.log(guest);
//
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect)


//LOGICAL ASSIGMENT OPERATORS
//LOGICAL ASSIGMENT OPERATORS

const rest1 = {
    name: 'Capri',
    numGuest: 0,
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};
//OR assigment operator
//OR assigment operator

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;


//nullish assigment operator (null or undefined);
//nullish assigment operator (null or undefined);
rest1.numGuest ??= 10
rest2.numGuest ??= 10

// rest1.owner = rest1.owner && `<ANONYMOUS>`
// rest2.owner = rest2.owner && `<ANONYMOUS>`;

rest1.owner &&= `ANONYMOUS`
rest2.owner &&= `ANONYMOUS`

// console.log(rest1)
// console.log(rest2)


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// console.log(menu)

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//     console.log(`${i +1}: ${el}`);
// }

// console.log(menu.entries())

//WITH optional chaining

// console.log(restaurant.openingHour.mon?.open)

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sun', 'sat'];

for (const day of days) {
    // console.log(day);
    const open = restaurant.openingHour[day]?.open ?? 'closed';
    console.log(`on ${day}, we open at ${open}`)
}


//Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not excist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does not exist`);

const users = [
    {name: 'Jonas', email: 'www@gmailcom'}
]

// console.log(users[0]?.name ?? 'Users array empty')

const properties = Object.keys(openingHour);
console.log(properties)

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
    openStr += `${day}, `
}
console.log(openStr)

for (const day of properties) {
    console.log(day)
}
const values = Object.values(openingHour)
console.log(values);

const entries = Object.entries(openingHour);
// console.log(entries)

for (const [key, {open, close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`)
}