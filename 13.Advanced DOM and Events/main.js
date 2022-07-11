'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollsTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');


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
    // console.log(e.target);
    e.preventDefault();

    //matching strategy
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        const section = document.querySelector(id);
        section.scrollIntoView({behavior: 'smooth'});
    }
})

//Tabbed component
//Tabbed component

tabsContainer.addEventListener('click', (e) => {
    const clicked = e.target.closest('.operations__tab')
    console.log(clicked);
    if (!clicked) return;

    //active tab
    tabs.forEach(t => t.classList.remove('operations__tab--active'))
    clicked.classList.add('operations__tab--active');

    //activate content area;
    const contentArea = document.querySelector(`.operations__content--${clicked.dataset.tab}`);
    tabsContent.forEach(t => t.classList.remove('operations__content--active'))
    contentArea.classList.add('operations__content--active')
})

//menu fade animation
//menu fade animation

const handleHover = function (e) {
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');

        siblings.forEach(el => {
            if (el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this;
    }
}
nav.addEventListener('mouseover', handleHover.bind(0.5))
nav.addEventListener('mouseout', handleHover.bind(1))

//sticky navigation

//wersja oldschoolowa
/*const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords)
window.addEventListener('scroll', function (e){
    console.log(window.scrollY)
    if(window.scrollY > initialCoords.top){
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky')
    }

})*/

//sticky navigation : intersection Observer API;

const obsCallback = function (entries, observer) {
    entries.forEach(entry => {
        console.log(entry);
    })
};

// const obsOptions = {
//     root: null,
//     threshold: 0.1,
// }
//
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');

const naveHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
    const [entry] = entries;
    // console.log(entry);

    if (!entry.isIntersecting) nav.classList.add('sticky')
    else nav.classList.remove('sticky')
}

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${naveHeight}px`,
});

headerObserver.observe(header)

//reveal section - pojawiajacie sie sekcje przy scrollowaniu window.
//reveal section - pojawiajacie sie sekcje przy scrollowaniu window.

const allSections = document.querySelectorAll('.section')

const revealSection = function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);
    // console.log(entry.target)

    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
})
allSections.forEach(function (section) {
    sectionObserver.observe(section);
    // section.classList.add('section--hidden')
})

//Lazy loading images
//Lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]');

const loading = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    //Replace src with data-src;
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
    })
    observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loading, {
    root: null,
    threshold: 0,
    rootMargin: `-200px`
})

imgTargets.forEach(img => imgObserver.observe(img))

//building a slider component
//building a slider component

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left')
const btnRight = document.querySelector('.slider__btn--right')

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
    slides.forEach((s, i) =>
        s.style.transform = `translateX(${100 * (i - slide)}%)`)
}
goToSlide(0);

//next slide
const nextSlide = function () {
    if (curSlide === maxSlide - 1) curSlide = 0;
    else curSlide++;
    goToSlide(curSlide);
}

//prev slide
function prevSlide() {
    if (curSlide === 0) curSlide = maxSlide - 1
    else curSlide--;
    goToSlide(curSlide);
}

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
    // if(e.code === 'ArrowRight'){
    //     nextSlide();
    // } else if(e.code === 'ArrowLeft'){
    //     prevSlide()
    // }
    e.key === 'ArrowRight' && nextSlide();
    e.key === 'ArrowLeft' && prevSlide();
})


document.addEventListener('DOMContentLoaded', function (e) {
    console.log('HTML parsed and DOM tree build', e)
})





