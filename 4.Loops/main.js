// for (let i = 1; i <= 10 ; i++) {
//     console.log(`Lifting weight repetition ${i}`)
// }
// const typeArray = [];
// const mateuszArray = [
//     'Mateusz',
//     'Kozlowski',
//     2037 - 1990,
//     'programmer',
//     ['Barni', "Mieszko", 'Barniulka', 'Miechujka']
// ];
//
// for (let i = 0; i <= mateuszArray.length; i++) {
//     console.log(mateuszArray[i], typeof mateuszArray[i]);
//     typeArray.push(typeof  mateuszArray[i]);
// }
//
//
// console.log(typeArray)
//
//
// const years = [1991, 2007, 1964, 2020];
// const age = [];
//
// for (let i = 0; i < years.length; i++) {
//     age.push(2020 - years[i])
// }
//
// console.log(age);

// for (let i = 0; i <= mateuszArray.length; i++) {
//
//     if(typeof mateuszArray[i] !== 'string') continue
//     console.log(mateuszArray[i], typeof mateuszArray[i]);
// }

//
// const mateuszArray = [
//     'Mateusz',
//     'Kozlowski',
//     2037-1990,
//     'programmer',
//     ['Barni', "Mieszko", 'Barniulka', 'Miechujka'],
// ];
//
// for (let i = mateuszArray.length - 1; i >= 0 ; i--) {
//     console.log(mateuszArray[i])
// }
//
//
// for (let i = 1; i < 4; i++) {
//     console.log(`----------------Starting excercise ${i}`)
//     for (let j = 1; j <5 ; j++) {
//         console.log(`starting small excercise ${j}`)
//     }
// }

// for (let i = 1; i <=10 ; i++) {
//     console.log(`Lifting weigths repetition ${i}`)
// }


// let rep = 1;
//
// while (rep <= 10) {
//     console.log(`Lifting weigths repetition ${rep}`)
//     rep++;
// }

// let dice = parseInt(Math.random() * 6) + 1;
//
// while (dice !== 6) {
//
//     dice = parseInt(Math.random() * 6) + 1;
//     console.log(`You rolled a ${dice}`);
//     if(dice===6) {
//         console.log(`Koniec pętli`)
//     }
// }

// console.log(dice);

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];


for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip)
    totals.push(tip + bills[i])
}


console.log(tips)
console.log(bills);
console.log(totals)

const sumArray = function (array) {
    let sum = 0;
    let averageArray = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        averageArray = sum / array.length

    }
    console.log(`Suma calej tablicy wynosi ${sum}`);
    console.log(`Średnia w tablicy wynosi ${averageArray}`)
    console.log('--------------------------------')
};

sumArray(tips);
sumArray(bills);
sumArray(totals)

