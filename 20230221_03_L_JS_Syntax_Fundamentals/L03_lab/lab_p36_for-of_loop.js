// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// For-of Loop


// Iterates through all elements in a collection.
// Cannot access the current index.
// Usually it is used for 'read only' operations like go through all the elements and print them out...
// If you need to change the elements use the regular 'for' loop.


console.log(`\n_________ Example 1 _________\n`);


let collection = [10, 20, 30];

for (let el of collection) {
        // Here is where the action happens
        console.log(el);                            // prints out current element to the console
        console.log(typeof(el));                    // prints out current element's type to the console
    }


console.log(`\n_________ Example 2 _________ Print an Array with For-of __________\n`);


let numbers = [1, 2, 3, 4, 5];

for (let number of numbers)
    console.log(number);                                    // 1
                                                            // 2
                                                            // 3
                                                            // 4
                                                            // 5


console.log(`\n_________ Example 3 _________ Print an Array with For-of __________\n`);


let numbers2 = [1, 2, 3, 4, 5];
let output2 = '';

for (let number of numbers2)
    output2 += `${number} `;
console.log(output2);                                    // 1 2 3 4 5 