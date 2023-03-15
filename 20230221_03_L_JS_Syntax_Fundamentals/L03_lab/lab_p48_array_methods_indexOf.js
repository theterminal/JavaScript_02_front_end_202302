// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Array Methods - Pop, Push, Shift, Unshift, Splice, Reverse, Join, Slice, Includes, IndexOf, ForEach, Map, Find, Filter


// __________ indexOf() ___________


// The indexOf() method returns the first index at which a given element can be found in the array
// Output is -1 if element is not present


const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));           // 1

// start from index 2
console.log(beasts.indexOf('bison', 2));        // 4

console.log(beasts.indexOf('giraffe'));         // -1
