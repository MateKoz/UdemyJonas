// const friends = ['Micheal', 'Steven', 'Peter'];
//
//
// //m,etoda push dodaje elementy na koncu tablicy
// const newLength = friends.push('Mate');
// console.log(friends);
// console.log(newLength);
//
// //metoda UNSHIFT dodaje elemtny na poczatku tablicy;
//
// // friends.unshift('Aneta');
// // console.log(friends);
//
//
// //USUWANIE ELEMENTÓW Z TABLICY
// //metoda pop usuwa ostatni element z tablic
// console.log('///////////////////')
// console.log(friends)
// friends.pop();
// console.log(friends)
//
// //metoda shift usuwa pierwszy elementy z tablicy.
//
// friends.shift();
// console.log(friends)
//
//
// console.log(friends.indexOf('Steven'));
// console.log(friends.includes('Steven'))


const calcTip = function (bill) {
    return  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1]+ tips[1], + bills[2] + tips[2]];
console.log(totals)
