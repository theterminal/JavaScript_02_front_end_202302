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


console.log('\n __________ test 11 ___________ \n');
let product11 = {name: 'Cucumber', price: 1.50, quantity: 15};
let product12 = {name: 'Tomato', price: 0.90, quantity: 25};
let product13 = {name: 'Bread', price: 1.10, quantity: 8};
let storage1 = new Storage(50);
storage1.addProduct(product11);
storage1.addProduct(product12);
storage1.addProduct(product13);
console.log(storage1.getProducts());
console.log(storage1.capacity);
console.log(storage1.totalCost);


console.log('\n __________ test 12 ___________ \n');
let product21 = {name: 'Tomato', price: 0.90, quantity: 19};
let product22 = {name: 'Potato', price: 1.10, quantity: 10};
let storage2 = new Storage(30);
storage2.addProduct(product21);
storage2.addProduct(product22);
console.log(storage2.totalCost);
