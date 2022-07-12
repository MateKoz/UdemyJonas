const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
    this.speed+=10
    console.log(`${this.make} accelerate by 10 km/h, now is ${this.speed}`)
}

Car.prototype.break = function () {
    this.speed -=5
    console.log(`${this.make} break now by 10km/h less, now is ${this.speed}`)
}

// bmw.accelerate();
// mercedes.accelerate();
//
// bmw.break()
// mercedes.break()
// mercedes.break()
// mercedes.break()
// mercedes.break()