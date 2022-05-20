const btn = document.querySelector('button');
const btnSpan = document.querySelector('.btn__span');
const mainDiv = document.querySelector('.main__div');


const createElement = () => {
    btnSpan.innerHTML = btn.textContent;
    const newItem = document.createElement('p');
    const newBtn = document.createElement('button');
    newBtn.classList.add('btn__added')
    mainDiv.append(newItem, newBtn);
    newItem.textContent = '1231232123123131'
    newBtn.innerHTML = 'button'
}

btn.addEventListener('click', createElement);
