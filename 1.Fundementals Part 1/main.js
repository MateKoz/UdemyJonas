let years  = new Date().getFullYear();
console.log(years);

let birthyears = 1990;

console.log(years - birthyears);

let array = [1,2,3,4,5,6,7,8,9];
console.log(array)
let arr2 = [...array];
console.log(arr2)
let arr3 = array;
console.log(arr3);

array.splice(0,3);
console.log(array)

let markWeight = 78;
let markHeight = 1.68;

let bmiCalculator = markWeight/markHeight**2;
console.log(bmiCalculator + 'BMI Mark');

let johnWeight = 92;
let johnHeight = 1.95;

let bmiCalculatorJohn = johnWeight/johnHeight**2;
console.log(bmiCalculatorJohn + 'BMI John');

