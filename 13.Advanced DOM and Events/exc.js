'use strict'

// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)

// const header = document.querySelector('.header')
// const allSections = document.querySelectorAll('.section');
// console.log(allSections)

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics';
// message.innerHTML = 'We use cookied for improved functionality and analytis <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message)
// header.append(message)
// header.append(message.cloneNode(true))

//Delete elements
// document.querySelector('.btn--close-cookie').addEventListener('click', function (){
//     message.remove()
// })

//styles
//setProperty
// message.style.backgroundColor = '#37383d'
// document.documentElement.style.setProperty('--color-primary', 'tomato')
//
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt)
// console.log(logo.src)
// console.log(logo.className);
// logo.alt = 'Beatiful minimalist logo';
// console.log(logo.alt)

//
// logo.setAttribute('company', 'Banklist');
//
//
// //classes
// logo.classList.add('c')
// logo.classList.remove('c')
// logo.classList.toggle('c')
// logo.classList.contains('c')


//randgomcolor;

// const randomInt = (min, max) =>
//     Math.floor(Math.random() * (max - min + 1) + min);
//
// const randomColor = () =>
//     `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
//
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//
// })
//
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//
// })
//
// document.querySelector('.nav').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//
// })

// const h1 = document.querySelector('h1');
//
// const alertH1 = function (e) {
//     alert('onmouseenter: Great you are reading the heading');
//
//     h1.removeEventListener('mouseenter', alertH1)
// };
//
// h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function (e) {
//     alert('onmouseenter: Great you are reading the heading')
// };


//193.DOM TRAVERSING
//193.DOM TRAVERSING

const h1 = document.querySelector('h1');

// //goind downwarsd: child
// console.log(h1.querySelectorAll('.highlight'))
// console.log(h1.childNodes)
// console.log(h1.children)
// // h1.firstElementChild.style.color = 'white';
// // h1.lastElementChild.style.color = 'tomato';
//
// //going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement)
//
// // h1.closest('header').style.background = 'var(--gradient-secondary)';
//
// //going sidfeways: siblings
// console.log(h1.previousElementSibling)
// console.log(h1.nextElementSibling)
//
// console.log(h1.previousSibling)
// console.log(h1.nextSibling)
//
// console.log(h1.parentElement.children) //cale rodzenstwo h1
//
// //194. Building a Tabbed Component - paginacja



