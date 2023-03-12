// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Arrays


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