const scoreOne = document.querySelector('#score--0');
const scoreTwo = document.querySelector('#score--1');

const playerNameOne = document.querySelector('#name--0');
const playerNameTwo = document.querySelector('#name--1');

const currentScoreOne = document.querySelector('#current--0');
const currentScoreTwo = document.querySelector('#current--1');

const imgDice = document.querySelector('.dice');

const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');

const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const rollDiceBtn = document.querySelector('.btn--roll');


const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

scoreOne.textContent = '0';
scoreTwo.textContent = '0';


const rollTheDice = (e) => {

    e.preventDefault();
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    let diceImage = `dice-${diceNumber}.png`;
    imgDice.setAttribute('src', diceImage);

    if (diceNumber !== 1) {
        currentScore += diceNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    } else {
        document.getElementById(`current--${activePlayer}`).textContent = '0';
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        playerOne.classList.toggle('player--active')
        playerTwo.classList.toggle('player--active')
    }
}

rollDiceBtn.addEventListener('click', rollTheDice);