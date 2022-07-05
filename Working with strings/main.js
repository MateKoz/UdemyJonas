const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log('==============================')

console.log(plane[0])
console.log(plane[1])
console.log(plane[2])

console.log('==============================')

console.log('b737'[0]);
console.log(airline.length)
console.log('a32131irline'.length);

console.log('==============================')

console.log(airline.indexOf('r'))
console.log(airline.lastIndexOf('r'))
console.log(airline.indexOf('Portugal'));

console.log('==============================')

console.log(airline.slice(8))
console.log(airline.slice(4, 7))
console.log('==============================')

console.log(airline.slice(0, airline.indexOf(' ')))
console.log(airline.slice(airline.lastIndexOf(' ') + 1))
console.log('==============================')

console.log(airline.slice(-2))
console.log(airline.slice(1, -1))

const checkMiddleSeat = function (seat) {
    const middleSeat = seat.slice(-1);
    console.log(middleSeat === "B" || middleSeat === 'E' ? 'You got Middle Seat' : 'No middle seat')
}

checkMiddleSeat('11A')
checkMiddleSeat('11E')
checkMiddleSeat('11B')
checkMiddleSeat('11D')


console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

console.log('==============================')

const passenger = 'jOnaS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);


const nameFunction = function (name) {
    const passLowName = name.toLowerCase();
    const corrName = passLowName[0].toUpperCase() + passLowName.slice(1);
    console.log(corrName)
}

nameFunction('MicHHHHAl');
nameFunction('mateusz');
nameFunction('MATEUSZ');


//COMPARING EMAIL;

const email = 'mateusz@hello.pl';
const loginEmail = '          Mateusz@Hello.Pl \n';

console.log(email);

const normalizedEmail =  loginEmail.toLowerCase().trim();
console.log(normalizedEmail)


//check emails is the same;

const checkEmail = function (email) {
    const normalizedEmail = email.toLowerCase().trim();
    console.log(email === normalizedEmail)
}

checkEmail('mateusz@Climatik.pl');

//////////////////////

const priceGB = '288,98zł';
const priceUS = priceGB.replace('zł', '$').replace(',', '.');
console.log(priceUS)
