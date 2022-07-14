// 'use strict';
//
// const renderError = function (msg) {
//     countriesContainer.insertAdjacentText('beforeend', msg);
// }
//
// // ///////////////////////////////////////
//
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');
//
// const renderCountry = function (data, className = '') {
//     const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//     ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
// };
//
// const request = fetch(`https://restcountries.com/v2/name/portugal`)
//
// const getCountryData = function (country) {
//     //country 1
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then(response => {
//             console.log(response)
//
//             if (!response.ok)
//                 throw new Error(`Country not found ${response.status}`)
//             return response.json()
//         })
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0];
//
//             if (!neighbour) return;
//
//             //country 2
//             return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//         })
//         .then(response => response.json())
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {
//             renderError(`Something went wrong :( ${err.message}`)
//             console.log(`${err} error error :((`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//             countriesContainer.style.padding = 10 + `px`
//         })
// };
// btn.addEventListener('click', function () {
// //     getCountryData('poland')
// // })
// //
//
// const whereAmI = function (lat, lng) {
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//         .then(res => {
//             if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//             return res.json();
//         })
//         .then(data => {
//             console.log(data);
//             console.log(`You are in ${data.city}, ${data.country}`);
//             return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//         })
//         .then(res => {
//             if (!res.ok) throw new Error(`Country not found (${res.status})`);
//             return res.json();
//         })
//         .then(data => renderCountry(data[0]))
//         .catch(err => console.error(`${err.message} 💥`));
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// // whereAmI(-33.933, 18.474);