class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed
    }

    accelerate() {
        this.speed += 10
        console.log(`${this.make} accelerate by 10 km/h, now is ${this.speed}`)
    }

    break() {
        this.speed -= 5
        console.log(`${this.make} break now by 10km/h less, now is ${this.speed}`)
    }

    get speedUS() {
        return this.speed / 1.6
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

const ford = new Car('Ford', 120);
// console.log('=================')
// console.log(ford.speedUS);
// ford.accelerate()
// ford.accelerate()
// ford.accelerate()
// ford.accelerate()
// console.log(ford.speedUS);
// ford.speedUS = 50;
// console.log(ford)



