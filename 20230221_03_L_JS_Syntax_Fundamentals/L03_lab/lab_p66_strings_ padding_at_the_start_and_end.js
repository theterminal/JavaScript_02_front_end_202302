// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Manipulating Strings
// Padding at the Start and End


// Use padStart() to add to the current string another substring at the start until a length is reached

let text = "010";
console.log(text.padStart(8, '0'));                             // Output: 00000010


// Use padEnd() to add to the current string another substring at the end until a length is reached

let sentence = "He passed away";
console.log(sentence.padEnd(20, '.'));                          // Output: He passed away......
