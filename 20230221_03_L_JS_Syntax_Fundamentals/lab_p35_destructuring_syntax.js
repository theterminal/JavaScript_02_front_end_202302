// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Destructuring Syntax


// Expression that unpacks values from arrays or objects, into distinct variables


let numbers = [10, 20, 30, 40, 50];
let [a, b, ...elems] = numbers;         // ...elems is called 'Rest' operator

console.log(a)                          // 10
console.log(b)                          // 20
console.log(elems)                      // [30, 40, 50]


// The 'rest' operator can also be used to collect function parameters into an array.
