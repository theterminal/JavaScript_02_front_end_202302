// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Manipulating Strings
// Extracting Substrings


// ___________ substring(startIndex, endIndex) __________________________ 


/*
The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
The substring() method extracts characters from start to end (exclusive).
The substring() method does not change the original string.
If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
Start or end values less than 0, are treated as 0.

source: https://www.w3schools.com/jsref/jsref_substring.asp
*/


console.log('\n____________ Example 1 _____________\n');


let str = "I am JavaScript developer";
let sub = str.substring(5, 10);

console.log(sub);                                                               // JavaS


// ___________ substr(startIndex, lengthOfCharacters) ___________________


// source: https://www.w3schools.com/jsref/jsref_substr.asp
// The substr() method extracts a part of a string.
// The substr() method begins at a specified position "a", and returns a specified number of characters "b".
// The substr() method does not change the original string.
// To extract characters from the end of the string, use a negative start position.

console.log('\n____________ Example 2 _____________\n');

function substring(string, startIndex, count) {
    let result;
    result = string.substr(startIndex, count);
    console.log(result);
}


substring('ASentence', 1, 8);                                                   // Sentence
substring('SkipWord', 4, 7);                                                    // Word