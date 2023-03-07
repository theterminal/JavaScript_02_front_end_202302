// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Destructuring Syntax


// Expression that unpacks values from arrays or objects, into distinct variables.
// The initial array doesn't change.


let numbers = [10, 20, 30, 40, 50];
console.log(numbers);                   // [ 10, 20, 30, 40, 50 ]

let [a, b, ...elems] = numbers;         // ...elems is called 'Rest' operator
console.log(numbers);                   // [ 10, 20, 30, 40, 50 ]

console.log(a)                          // 10
console.log(b)                          // 20
console.log(elems)                      // [ 30, 40, 50 ]
console.log(numbers);                   // [ 10, 20, 30, 40, 50 ]


// The 'rest' operator can also be used to collect function parameters into an array.
