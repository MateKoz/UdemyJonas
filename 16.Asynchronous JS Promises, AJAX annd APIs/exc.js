'use strict'

const lotteryPromise = new Promise(function (resolve, reject) {
    console.log('Lottery starts in 2 seconds')
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve('You WIN')
        } else {
            reject(new Error('You lost your money'));
        }
    }, 2000)
});

lotteryPromise
    .then(res => console.log(res))
    .catch(err => console.error(err));

//Promisifyubg setTimeOut
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000)
    })
}

wait(2)
    .then(() => {
        console.log('I waited for 2 seconds');
        return wait(1)
    }).then(() => console.log(`I waited for 1 seconds`));

Promise.resolve('abc').then(x => console.log(x))
Promise.reject('abc').catch(x => console.error(x))




const whereAmI = async function (country) {
    await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
}