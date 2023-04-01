// 20230302 - JavaScript Front-End 202302 - JS Functions and Statements - Exercise
// Creating NxN matrix using 'new Array' method


// ________________ How to generate NxN matrix _________________


let arr = new Array(7).fill(7);                         // creates new array of with 7 elements and fills them with 7's
console.log(arr);


// ________________ How to generate NxN matrix _________________


let arr2 = new Array(7).fill(new Array(7).fill(7));    // creates new array of 7 elements, each element is a new array of 7 elements
console.log(arr2);
