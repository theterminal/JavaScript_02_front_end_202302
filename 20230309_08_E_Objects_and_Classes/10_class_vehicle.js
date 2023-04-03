// 20230309 - JavaScript Front-End 202302 - Objects and Classes - Exercises
// 10 - Vehicle - judge: https://judge.softuni.org/Contests/Compete/Index/3792#9


class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: parts.engine * parts.power
        };
        this.fuel = fuel;
    }

    drive(fuel) {
        this.fuel -= fuel;
    }
}


console.log('\n __________ test 11 ___________ \n');

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);


console.log('\n __________ test 12 ___________ \n');

let parts = {engine: 9, power: 500};
let vehicle = new Vehicle('l', 'k', parts, 840);
vehicle.drive(20);
console.log(vehicle.fuel);
