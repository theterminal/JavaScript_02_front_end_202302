// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Manipulating Strings
// Concatenating Strings


// __________ Use the "+" or the "+=" operators ____________

let text = "Hello" + ", ";
console.log(text);                    // Hello, 

text += "JS!";
console.log(text);                    // Hello, JS!


// ___________ Use the concat() method ____________________

let greet = "Hello, ";
let name_1 = "John";
let result = greet.concat(name_1);

console.log(result);                  // Expected output: "Hello, John"