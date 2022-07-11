'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollsTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1')

//open modal
const openModal = function (e) {
    e.preventDefault()
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
//close modal
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

//BTN scrolling
//BTN scrolling
btnScrollsTo.addEventListener('click', function (e) {
    // const s1coords = section1.getBoundingClientRect();
//oldschool way to scrolling page
//     window.scrollTo({
//         left: s1coords.left + window.pageXOffset,
//         top: s1coords.top + window.pageYOffset,
//         behavior: 'smooth',
//     });

    //modern way ;
    section1.scrollIntoView({behavior: 'smooth'})
})

//PAGE NAVIGATION;///////////////////////////

// document.querySelectorAll('.nav__link')
//     .forEach(item =>
//         item.addEventListener('click', function (e) {
//             e.preventDefault();
//             const id = this.getAttribute('href');
//             console.log(id);
//             const section = document.querySelector(id);
//             section.scrollIntoView({behavior: 'smooth'})
//
//         }))

//1. Add event listener to common parent element.
//2. Determine what element orginated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
    console.log(e.target);
    e.preventDefault();

    //matching strategy
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        const section = document.querySelector(id);
        section.scrollIntoView({behavior: 'smooth'});
    }
})
