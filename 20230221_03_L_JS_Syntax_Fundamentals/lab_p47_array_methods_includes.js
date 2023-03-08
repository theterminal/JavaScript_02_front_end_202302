// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Array Methods - Pop, Push, Shift, Unshift, Splice, Reverse, Join, Slice, Includes, IndexOf, ForEach, Mapm, Find, Filter


// __________ includes() ___________


// Determines whether an array contains a certain element, returning true or false as appropriate


// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97

let arr = ['a', 'b', 'c'];

arr.includes('a', -100);                    // true
arr.includes('b', -100);                    // true
arr.includes('c', -100);                    // true
arr.includes('a', -2);                      // false