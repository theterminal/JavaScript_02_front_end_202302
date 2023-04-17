// 20230310 - JavaScript Front-End 202302 - Objects and Classes - More Exercises
// 01 - Vehicle - judge: https://judge.softuni.org/Contests/Practice/Index/3793#0


class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];                                                 // Array of objects
        this.totalCost = 0;
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        this.totalCost += (product.price * product.quantity);
    }

    getProducts() {
        let result = [];
        for (const line in this.storage) {
            let json = this.storage[line];
            json = JSON.stringify(json);
            result.push(json);
        }
        return result.join('\n');
    }
}


// console.log('\n __________ test 11 ___________ \n');
// let product1 = {name: 'Cucumber', price: 1.50, quantity: 15};
// let product2 = {name: 'Tomato', price: 0.90, quantity: 25};
// let product3 = {name: 'Bread', price: 1.10, quantity: 8};
// let storage = new Storage(50);
// storage.addProduct(product1);
// storage.addProduct(product2);
// storage.addProduct(product3);
// console.log(storage.getProducts());
// console.log(storage.capacity);
// console.log(storage.totalCost);


console.log('\n __________ test 12 ___________ \n');
let productOne = {name: 'Tomato', price: 0.90, quantity: 19};
let productTwo = {name: 'Potato', price: 1.10, quantity: 10};
let storage = new Storage(30);
storage.addProduct(productOne);
storage.addProduct(productTwo);
console.log(storage.totalCost);
