// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Array Methods - Pop, Push, Shift, Unshift, Splice, Reverse, Join, Slice, Includes, IndexOf, ForEach, Map, Find, Filter


// __________ pop() ___________


// Removes the last element from an array and returns that element.
// This method changes the length of the array.

let nums = [10, 20, 30, 40, 50, 60, 70];

console.log(nums.length);                                       // 7
console.log(nums.pop());                                        // 70
console.log(nums.length);                                       // 6
console.log(nums);                                              // [ 10, 20, 30, 40, 50, 60 ]