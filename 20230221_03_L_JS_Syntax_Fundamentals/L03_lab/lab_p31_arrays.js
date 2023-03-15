// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// What is an Array


// ____________ What are arrays ______________


// Arrays are list-like objects.
// They are a reference type - the variable points to an address in memory.
// Their elements are numbered from 0 to length - 1
// Creating an array using an array literal:

let numbers = [10, 20, 30, 40, 50];

// Neither the length of a JavaScript array nor the types of its elements are fixed.
// An array's length can be changed at any time.
// Data can be stored at non-contiguous locations in the array.
// JavaScript arrays are not guaranteed to be dense.


console.log('\n____________ Declaring an Array ______________\n');
console.log(`See the full documentation here: \n
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array`);


let array_1 = new Array;                                            // method 1 of declaring an array (empty array)
console.log(array_1);                                               // []

let array_2 = [];                                                   // method 2 of declaring an array (empty array)
console.log(array_2);                                               // []

const array_3 = new Array(7);                                       // declaration of a new Array with length of 7 (7 empty elements)
console.log(array_3);                                               // [ <7 empty items> ]
console.log(array_3.length);                                        // 7


// ____________ Arrays of Different Types _____________


// Array holding numbers
let nums = [10, 20, 30, 40, 50];

// Array holding strings
let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Array holding mixed data (not a good practice)
let mixedArr = [20, new Date(), 'hello', {x:5, y:8}];


// ____________ Accessing Elements _____________


// Array elements are accessed using their index
let cars = ['BMW', 'Audi', 'Opel'];
let firstCar = cars[0];                         // BMW
let lastCar = cars[cars.length - 1];            // Opel


// Accessing indexes that do not exist in the array returns  undefined
console.log(cars[3]);                           // undefined
console.log(cars[-1]);                          // undefined