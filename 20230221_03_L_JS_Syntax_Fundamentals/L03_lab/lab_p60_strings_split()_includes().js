// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Manipulating Strings
// Splitting and Finding


// ___________ split(separator) ____________

let text = "I love fruits";
let words = text.split(' ');

console.log(words);                             // Expected output: ['I', 'love', 'fruits']


// ___________ includes(substr) ____________

let txt = "I love fruits.";
console.log(txt.includes("fruits"));           // Expected output: True
console.log(txt.includes("banana"));           // Expected output: False