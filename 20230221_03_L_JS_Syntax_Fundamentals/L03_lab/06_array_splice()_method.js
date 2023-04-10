// JavaScript
// Using the array method splice()


let arr = [1, 2, 3, 4, 50, 60, 7, 8, 9, 10];                    // The original array

let arr2 = arr.splice(5, 3, 2);                                    // starts from index 5 and removes 3 elements
console.log(arr2);                                              // returns the removed elements in an array

console.log(arr);                                               // The original array is modified          

