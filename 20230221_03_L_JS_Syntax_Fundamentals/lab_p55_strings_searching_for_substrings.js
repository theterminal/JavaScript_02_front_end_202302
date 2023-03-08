// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Manipulating Strings
// Searching for Substrings


// ___________ indexOf(substr) ____________

let str_1 = "I am JavaScript developer";

console.log(str_1.indexOf("Java"));               // Expected output: 5               
console.log(str_1.indexOf("java"));               // Expected output: -1


// ___________ lastIndexOf(substr) _____________

let str_2 = "Intro to programming";
let last = str_2.lastIndexOf("o");

console.log(last);                              // Expected output: 11