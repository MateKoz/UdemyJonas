'use strict'

const restaurant = {
    name: "Classico Italiano",
    location: 'Via Analgo tavanti 23, Firenze, Italy',
    categorise: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
};

//destrukturyzach

const arr = [2,3,4]

const [x, y, z] = arr;
console.log(x, y, z);


let [main, secondary,] = restaurant.categorise;

console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);


//receive 2 return values from a array

console.log(restaurant.order(2,0));

const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter,mainCourse)

