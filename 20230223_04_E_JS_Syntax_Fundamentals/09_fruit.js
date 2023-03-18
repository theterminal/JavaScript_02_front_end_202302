// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 09 - Fruit - judge: https://judge.softuni.org/Contests/Compete/Index/3786#8


function fruit(fruit, gramsToBuy, pricePerKg) {
    let kgToBuy = gramsToBuy / 1000;
    let money = kgToBuy * pricePerKg;
    console.log(`I need $${money.toFixed(2)} to buy ${kgToBuy.toFixed(2)} kilograms ${fruit}.`);
}


fruit('orange', 2500, 1.80);                                            // I need $4.50 to buy 2.50 kilograms orange.
fruit('apple', 1563, 2.35);                                             // I need $3.67 to buy 1.56 kilograms apple.
