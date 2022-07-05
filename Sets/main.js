// //Sets //Sets //Sets//Sets//Sets//Sets//Sets
// //Sets //Sets //Sets//Sets//Sets//Sets//Sets
//
// //Zwraca tylko pozycje ktore sie nie duplikuja. Zduplikowane elementy nie sa wyswietlane podwójnie
// // Kolejność w Sets nie ma znaczenia. Tym się różni od tablicy.
// //Sets jest niepowatarzalny, unikalny, kazdy element mo ze wystąpić tylko raz.
//
// const orderSet = new Set([
//     'Pasta',
//     'Pizza',
//     'Pizza',
//     'Pasta',
//     'Pizza',
//     'Risotto'
// ]);
//
// console.log(orderSet);
// console.log(orderSet.size)
//
// //metoda has(). Sprawdza czy dant SET posiadana daną wartość w tablicy.
// console.log(orderSet.has('Pasta'));
//
// //Dodawania do Sets nowego elementu
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// console.log(orderSet)
//
// //Usuwanie elementu z Set's
//
// orderSet.delete('Pizza');
// console.log(orderSet);
//
// //Usuwanie wszystkich elementów z Set
//
// // orderSet.clear();
// console.log(orderSet);
//
// for (const order of orderSet) {
//     console.log(order)
// }
//
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7,];
console.log(array1);
const setArray = [...new Set(array1)];
console.log(setArray);
//
// console.log(new Set('mateuszkozlowski').size)
//
// //MAPS FUNDAMENTALS
// //MAPS FUNDAMENTALS
//
// const rest = new Map();
// console.log(rest)
//
// //Dodawanie nowych elementów do mapy.
// // .set('KLUCZ', 'WARTOŚC'
//
// rest.set('name', 'Claswsico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));
//
// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'We are open')
//     .set(false, 'We are closed')
// console.log(rest)
//
// //pobieranie konketeynych wartosci za pomoca przypisanego klucza
// // .get('Nazwa klucza)
//
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
//
// //Sprawdzanie czy mapa posiada konkretny klucz
// // .has('nazwa klucza');
//
// console.log(rest.has('open'))
//
// //usuwanie klucza konkretnego z mapy.
// // .delete('nazwa usuwanego klucza');
//
// //Tak nie zadziała
// //Tak nie zadziała
//
// // rest.set([1,2], 'Test')
// console.log(rest);
// console.log(rest.get([1,2]))
//
// const arr = [1,2]
// rest.set(arr, 'Test');
// console.log(rest.get(arr))
//
//
