// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Array Methods - Pop, Push, Shift, Unshift, Splice, Reverse, Join, Slice, Includes, IndexOf, ForEach, Mapm, Find, Filter


// __________ shift() ___________


// The shift() method removes the first element from an array and returns that removed element.
// This method changes the length of the array.


let nums = [10, 20, 30, 40, 50, 60, 70];

console.log(nums.length);                       // 7
console.log(nums.shift());                      // 10 (removed element)
console.log(nums);                              // [ 20, 30, 40, 50, 60, 70 ]