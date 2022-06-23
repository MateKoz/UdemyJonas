const btnCheck = document.querySelector('.check');
const inputGuess = document.querySelector('.guess')
const messageInfo = document.querySelector('.message');
let score = document.querySelector('.score')

const secretNumber = Math.floor(Math.random() * 20) + 1

btnCheck.addEventListener('click', () => {
    let numberGuessNumber = Number(inputGuess.value)
    if (!inputGuess.value) {
        messageInfo.textContent = 'Wpisz cyfrę ⛔';
    } else if (numberGuessNumber === secretNumber) {
        messageInfo.textContent = 'Correct !';
    } else if (numberGuessNumber > secretNumber) {
        messageInfo.textContent = 'To high !'
    } else if (numberGuessNumber < secretNumber) {
        messageInfo.textContent = 'To small !'
    }
    score.textContent--;
})

console.log(secretNumber)







