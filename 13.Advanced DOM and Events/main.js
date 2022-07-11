'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollsTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1')


const openModal = function (e) {
    e.preventDefault()
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

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

btnScrollsTo.addEventListener('click', function (e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords)
    console.log(e.target.getBoundingClientRect())
    console.log('Current scroll X/Y', window.pageXOffset, window.pageYOffset);

    //scrolling
    // window.scrollTo(
    //     s1coords.left + window.pageXOffset,
    //     s1coords.top + window.pageYOffset
    // );

//oldschool way to scrolling page
//     window.scrollTo({
//         left: s1coords.left + window.pageXOffset,
//         top: s1coords.top + window.pageYOffset,
//         behavior: 'smooth',
//     });

    //modern way ;
    section1.scrollIntoView({behavior: 'smooth'})
})

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
    alert('onmouseenter: Great you are reading the heading');

    h1.removeEventListener('mouseenter', alertH1)
};

h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function (e) {
//     alert('onmouseenter: Great you are reading the heading')
// };

