// 20230309 - JavaScript Front-End 202302 - Objects and Classes - Exercises
// 03 - Store Provision - judge: https://judge.softuni.org/Contests/Compete/Index/3792#2


// _____________ version 01 ______________


function storeProvision(...stringArray) {
    let [stock, order] = stringArray;
    let objCurrentStock = {};

    for (let i = 0; i < stock.length; i+=2) {
        let product =  stock[i];
        let quantity = Number(stock[i + 1]);
        objCurrentStock[product] = quantity;
    }

    for (let i = 0; i < order.length; i+=2) {
        let product =  order[i];
        let quantity = Number(order[i + 1]);

        if (objCurrentStock[product]) {
            objCurrentStock[product] += quantity;
        } else {
            objCurrentStock[product] = quantity;
        }
    }

    for (const key in objCurrentStock) {
        console.log(`${key} -> ${objCurrentStock[key]}`);
    }
}


console.log('\n ___________ test 11 ____________ \n');
storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);


console.log('\n ___________ test 12 ____________ \n');
storeProvision(
    ['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']
);
