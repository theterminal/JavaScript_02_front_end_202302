// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Array Methods - Pop, Push, Shift, Unshift, Splice, Reverse, Join, Slice, Includes, IndexOf, ForEach, Map, Find, Filter


// __________ slice() ___________


// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start and end indexes (end not included)
// The original array is not modified


let fruits = ['Banana', 'Orange', 'Lemon', 'Apple'];

let citrus = fruits.slice(1, 3);
console.log(citrus);                                            // [ 'Orange', 'Lemon' ]

let fruitsCopy = fruits.slice();
console.log(fruitsCopy);                                        // [ 'Banana', 'Orange', 'Lemon', 'Apple' ]
console.log(fruits);                                            // [ 'Banana', 'Orange', 'Lemon', 'Apple' ]         (original array is not modified)
