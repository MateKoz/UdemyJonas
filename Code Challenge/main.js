const mark = {
    fullName: 'Mark Miller',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.valueBMI = this.weight / this.height ** 2
        return this.valueBMI
    }
}

const john = {
    fullName: 'John Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.valueBMI = this.weight / this.height ** 2
        return this.valueBMI
    }
}
mark.calcBMI();
john.calcBMI()

if(mark.valueBMI > john.valueBMI) {
    console.log(`${mark.fullName} BMI (${mark.valueBMI}) is higher than ${john.fullName} BMI ${john.valueBMI}`)
} else {
    console.log(`${mark.fullName} BMI (${mark.valueBMI}) is lower than ${john.fullName} BMI ${john.valueBMI}`)
}
