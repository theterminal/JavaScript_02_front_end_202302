// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// For-of Loop


// Iterates through all elements in a collection.
// Cannot access the current index.

let collection = [10, 20, 30];

for (let el of collection) {
        // Here is where the action happens
        console.log(el);                            // prints out current element to the console
        console.log(typeof(el));                    // prints out current element's type to the console
    }


// _____________ Print an Array with For-of _____________


let numbers = [1, 2, 3, 4, 5];
let output = '';

for (let number of numbers)
    output += `${number} `;
console.log(output);                                    // 1 2 3 4 5 