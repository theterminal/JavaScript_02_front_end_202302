// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Array Methods - Pop, Push, Shift, Unshift, Splice, Reverse, Join, Slice, Includes, IndexOf, ForEach, Map, Find, Filter


// __________ push() ___________


// The push() method adds one or more elements to the end of an array and returns the new array length.


let nums = [10, 20, 30, 40, 50, 60, 70];

console.log(nums.length);                                                   // 7
console.log(nums.push(80));                                                 // 8 (nums.length)
console.log(nums);                                                          // [ 10, 20, 30, 40, 50, 60, 70, 80 ]

nums.push(...[6, 7, 8]);                                                    // rest operator can be used
console.log(nums);

