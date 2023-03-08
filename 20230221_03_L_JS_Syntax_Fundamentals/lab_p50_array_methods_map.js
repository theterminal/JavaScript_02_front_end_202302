// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Array Methods - Pop, Push, Shift, Unshift, Splice, Reverse, Join, Slice, Includes, IndexOf, ForEach, Map, Find, Filter


// __________ map() ___________


// Creates a new array with the results of calling a provided function on every element in the calling array


let numbers = [1, 4, 9];

let roots = numbers.map(function(num) {
	return Math.sqrt(num);
})


console.log(roots);                 // roots is now [1, 2, 3]
console.log(numbers);               // numbers is still [1, 4, 9]
