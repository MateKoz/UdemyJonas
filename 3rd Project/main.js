const scoreOne = document.querySelector('#score--0');
const scoreTwo = document.querySelector('#score--1');

const currentScoreOne = document.querySelector('#current--0');
const currentScoreTwo = document.querySelector('#current--1');

const imgDice = document.querySelector('.dice');

const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');

const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const rollDiceBtn = document.querySelector('.btn--roll');


let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

scoreOne.textContent = '0';
scoreTwo.textContent = '0';


const changePlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = '0';
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    playerOne.classList.toggle('player--active')
    playerTwo.classList.toggle('player--active')
}

const rollTheDice = (e) => {
    if (playing) {
        e.preventDefault();
        const diceNumber = Math.floor(Math.random() * 6) + 1;
        let diceImage = `dice-${diceNumber}.png`;
        imgDice.setAttribute('src', diceImage);

        if (diceNumber !== 1) {
            currentScore += diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        } else {
            changePlayer()
        }
    }
}

const holdScore = () => {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 10) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            playing = false;
            imgDice.classList.add('hidden')
        } else {
            changePlayer()
        }
    }
}


newGameBtn.addEventListener('click', function () {
    scoreOne.textContent = '0';
    scoreTwo.textContent = '0';
    currentScoreOne.textContent = '0'
    currentScoreTwo.textContent = '0'
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');


})
rollDiceBtn.addEventListener('click', rollTheDice);
holdBtn.addEventListener('click', holdScore)