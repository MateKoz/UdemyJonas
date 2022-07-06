const secureBooking = function () {
    let passengerCount = 0;
    return function () {
      passengerCount++
        console.log(`${passengerCount} passengers`)
    }
}
const booker = secureBooking();
// booker();
// booker();
// booker();
// console.dir(booker)


//exapmple 1
// let f;
// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2)
//     }
// }
//
// const h = function () {
//     const b = 777
//     f = function () {
//         console.log(b*2)
//     }
// }

// g();
// f();
// h();
// f();
//
// //example 2
//
// const boardPassengers = function (n, wait) {
//     const perGroup = n / 3;
//
//     setTimeout(function (){
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There a 3 group, each with ${perGroup} passengers`)
//     }, wait *1000)
//
//     console.log(`Will start boarding in ${wait} seconds`)
// }
// // const perGroup = 1000;
// boardPassengers(180, 3);



//code challenge
//code challenge

(function () {
    const header = document.querySelector('h1')
    header.style.color = 'red';
    console.dir(header);
    document.querySelector("body").addEventListener('click', function (){
        header.style.color = 'blue';
    })
})();











