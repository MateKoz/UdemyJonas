const mateusz = {
    firstName: 'Mateusz',
    lastName: 'Kozlowski',
    age: 31,
    job: 'brak',
    friends: ['Barni', 'Mieszko', "Anecia"],
};

// console.log(mateusz)
// console.log(mateusz.firstName);
// //
//
// const intrestedIn = prompt('What do you want to know about Mateusz? Chose betweem firstName, lastName, age, job and friends');
// console.log(intrestedIn);
//
// console.log(mateusz[intrestedIn]);
//
// mateusz.location = 'Poland';
// console.log(mateusz.location)
// console.log(mateusz[intrestedIn]);


// console.log(`${mateusz.firstName} has ${mateusz.friends.length} and his best friend is ${mateusz.friends[0]}`);


const object1 = {
    firstName: 'Mateusz',
    lastName: 'Kozlowski',
    birthYear: 1992,
    job: 'brak',
    friends: ['Barni', 'Mieszko', "Anecia"],
    hasDriversLicense: true,

    calcAge: function () {
        return 2037 - this.birthYear
    },


    getSummary: function () {
return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a ' : 'not'} drivers license`
    }
};
console.log(object1.getSummary())


// console.log(object1.getSummary())
// console.log(object1.calcAge());
