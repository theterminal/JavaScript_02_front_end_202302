// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Manipulating Strings
// Searching for Substrings


// ___________ indexOf(substring) ____________


let str_1 = "I am JavaScript developer";

console.log(str_1.indexOf("Java"));               // Expected output: 5    - returns the index of the first character from the searched string         
console.log(str_1.indexOf("java"));               // Expected output: -1   - it returns -1 if the result is negative


// ___________ lastIndexOf(substring) _____________


let str_2 = "Intro to programming";
let last = str_2.lastIndexOf("o");

console.log(last);                                // Expected output: 11    - returns the last index of the searched string