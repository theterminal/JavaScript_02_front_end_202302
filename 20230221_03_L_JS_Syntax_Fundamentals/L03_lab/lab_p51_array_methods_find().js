// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Array Methods - Pop, Push, Shift, Unshift, Splice, Reverse, Join, Slice, Includes, IndexOf, ForEach, Map, Find, Filter


// __________ find() ___________


// Returns the first found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.


let array_1 = [5, 12, 8, 130, 44];

let found = array_1.find(function(element) {
  return element > 10;
})

console.log(found);                                                                   // 12


// Another shorter syntax

let array_2 = [-12, -15.75, 0, 0.125, 1, 15, 100, 125, 125.75, 10000];
let found_2 = array_2.find((num) => num > 100);

console.log(found_2);                                                                 // 125


// Another syntax

let array_3 = [-12, -15.75, 0, 0.125, 1, 15, 100, 125, 125.75, 10_000];
let found_3 = array_3.find((num) => num > 125 && num < 10_000);

console.log(found_3);                                                                 // 125.75
