const mark = {
    fullName: 'Mark Miller',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        const valueBMI = this.weight / this.height ** 2
        return valueBMI
    }
}

const john = {
    fullName: 'John Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        const valueBMI = this.weight / this.height ** 2
        return valueBMI
    }
}

console.log(`${mark.fullName} BMI (${mark.calcBMI()}) is higher than ${john.fullName} BMI ${john.calcBMI()}`)

console.log(mark.calcBMI())
console.log(john.calcBMI())
