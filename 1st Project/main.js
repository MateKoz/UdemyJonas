const btnCheck = document.querySelector('.check');
const inputGuess = document.querySelector('.guess')
const messageInfo = document.querySelector('.message');
let score = document.querySelector('.score');
const guessNumber = document.querySelector('.number');
const body = document.querySelector('body')
const btnAgain = document.querySelector('.again');
const highScoreResult = document.querySelector('.highscore')

let secretNumber = Math.floor(Math.random() * 20) + 1;
let highScore = 0;

const displayMessage = function (message) {
    messageInfo.textContent = message
}

console.log(secretNumber + ' Sekretna liczba')

btnCheck.addEventListener('click', () => {
    let numberGuessNumber = Number(inputGuess.value)

    if (inputGuess.value === '') {
        displayMessage('Wpisz cyfrę ⛔');
        score.textContent = '20'

    } else if (numberGuessNumber === secretNumber) {
        displayMessage('Correct !');
        guessNumber.textContent = String(secretNumber);
        body.style.backgroundColor = 'green';

        if (Number(score.textContent) > Number(highScoreResult.textContent)) {
            highScoreResult.textContent = score.textContent;
        }

    } else if (numberGuessNumber !== secretNumber) {
        if (Number(score.textContent) > 1) {
            displayMessage(numberGuessNumber > secretNumber ? 'To hight' : 'To low!')
        } else {
            displayMessage('You lost the game');
        }
        score.textContent--;
    }

    if (Number(score.textContent) <= 0) {
        score.textContent = '0'
    }
})


btnAgain.addEventListener('click', (e) => {
    e.preventDefault();
    body.style.backgroundColor = '#222';
    guessNumber.textContent = '?'
    inputGuess.value = '';
    secretNumber = Math.floor(Math.random() * 20) + 1
    score.textContent = '20'
    messageInfo.textContent = 'Start guessing...'
})
