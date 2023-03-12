// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Manipulating Strings
// Problem - Substring - page 58


// Receives a string, a start index, and count characters 
// Print the substring of the received string


// Input 01: "ASentence", 1, 8
// Input 02:"JavaScript", 4, 6

function solve(text, startIndex, count) {
    let substring = text.substring(startIndex, startIndex + count);
    console.log(substring);
   }

solve("ASentence", 1, 8);
solve("JavaScript", 4, 6);
