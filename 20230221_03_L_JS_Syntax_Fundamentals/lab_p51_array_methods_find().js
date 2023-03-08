// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Array Methods - Pop, Push, Shift, Unshift, Splice, Reverse, Join, Slice, Includes, IndexOf, ForEach, Map, Find, Filter


// __________ find() ___________


// Returns the first found value in the array, if an element in the array satisfies the provided testing function or undefined if not found


let array_1 = [5, 12, 8, 130, 44];

let found = array_1.find(function(element) {
  return element > 10;
})

console.log(found);                             // 12
