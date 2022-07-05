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

const normalizedEmail = loginEmail.toLowerCase().trim();
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
console.log(priceUS);

const announcement = 'All passenger come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'))

//Booleans
//Booleans

const plane1 = 'A320neo';
console.log(plane1.includes('A320'));

//practise exercise

const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board')
    } else {
        console.log('Welcome aboard!')
    }
}

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//split and join
//split and join

console.log('a+ver+nice+string'.split('+'));

console.log('Mateusz Kozlowski'.split(' '));

const [firstName, lastName] = 'Mateusz Kozlowski'.split(' ');
console.log(firstName)
console.log(lastName)

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName)


const passengerName = 'jessica ann smith davis';
const nameArray = passengerName.split(' ');
console.log(nameArray);

const capitalizedName = function (name) {
    const names = name.split(' ');
    const nameUpper = []
    for (const n of names) {
        nameUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    const correctName = nameUpper.join(' ');
    console.log(correctName)

}

capitalizedName('mateusz kozlowski grzegorz');
capitalizedName('katarzyna kozlowska dajhsda sd a sd asd a da')


//Padding

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'))
console.log(message.padEnd(25, '+'))


const maskCreditCard = function (number) {
    const str = number + '';
    const lastNumber = str.slice(-4)
    return lastNumber.padStart(str.length, '*');
}
console.log(maskCreditCard(4120298190));
console.log(maskCreditCard('481727198'))
console.log(maskCreditCard('481721284971981'))
console.log(maskCreditCard('4817284971282312371981313213'));



// /repeat method;

const message2 = 'Bad weather ... All Departues Delayed...';
console.log(message2.repeat(5))

const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${":D".repeat(n)}`)
}

planesInLine(5)