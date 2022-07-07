'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP


// Data
const account1 = {
    owner: 'Mateusz Kozlowski',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//funkcja wyswietlajaca Current Balance
const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) =>
        acc + mov, 0);
    labelBalance.textContent = `${acc.balance}€`
}


//Funkcja Tworzaca liste wykonanych akcji z podziałem na income/Withdrawal
const displayMovements = function (movements) {
    containerMovements.innerHTML = '';
    movements.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal'
        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            <div class="movements__value">${mov}€</div>
        </div>
`;
        containerMovements.insertAdjacentHTML('afterbegin', html)
    })
}

//Tworzymy usersName z pierwszych liter imienia i nazwiska

const createUserNames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('')
    })
};
createUserNames(accounts);

const updateUI = function (acc) {
    //Display movments
    displayMovements(acc.movements);
    //display balance
    calcDisplayBalance(acc)
    //display sallary
    calcDisplaySummary(acc)
}

//Tworzymy na dole strony Income dla wszystkich akcji

const calcDisplaySummary = function (acc) {
    const incomes = acc.movements.filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov)
    labelSumIn.textContent = `${incomes}€`;

    const outcome = acc.movements.filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov)
    labelSumOut.textContent = `${Math.abs(outcome)}€`

    const interest = acc.movements.filter(mov => mov > 0)
        .map(deposit => deposit * acc.interestRate / 100)
        .filter((int, i, arr) => {
            // console.log(arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int);
    labelSumInterest.textContent = `${interest}€`
}

//Event handler

let currentAccount;

btnLogin.addEventListener('click', function (e) {
    e.preventDefault()
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        //display UI and message welcome
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
        containerApp.style.opacity = '1'

        //clear inputs fields;
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        //update UI
        updateUI(currentAccount)
    }
})

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value)
    // console.log(amount, receiverAcc);

    if (amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc?.username !== currentAccount.username
    ) {
        //doing the transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount)

        //update UI
        updateUI(currentAccount)
    }
    inputTransferTo.value = '';
    inputTransferAmount.value = ''
})

btnClose.addEventListener('click', function (e) {
    e.preventDefault();

    if (
        inputCloseUsername.value === currentAccount.username &&
        Number(inputClosePin.value) === currentAccount.pin
    ) {
        const index = accounts.findIndex(acc =>
            acc.username === currentAccount.username)

        //delete account
        accounts.splice(index, 1)

        //hide ui
        containerApp.style.opacity = '0';
        labelWelcome.textContent = `Log in to get started`
        inputCloseUsername.value = inputClosePin.value = '';

    }
})


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);


/////////////////////////////////////////////////
