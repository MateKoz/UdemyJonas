const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnShowModal = document.querySelectorAll('.show-modal');

const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

const showModal = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}


document.addEventListener('keydown', (e) => {
   if(e.code === 'Escape') {
       closeModal();
   }
})


btnCloseModal.addEventListener('click', closeModal);
btnShowModal.forEach(item => item.addEventListener('click', showModal));
