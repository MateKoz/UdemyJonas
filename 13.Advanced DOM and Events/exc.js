'use strict'

console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

const header = document.querySelector('.header')
const allSections = document.querySelectorAll('.section');
console.log(allSections)

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics';
message.innerHTML = 'We use cookied for improved functionality and analytis <button class="btn btn--close-cookie">Got it!</button>';


// header.prepend(message)
header.append(message)
// header.append(message.cloneNode(true))

//Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function (){
    message.remove()
})