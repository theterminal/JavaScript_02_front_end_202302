// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Array Methods - Pop, Push, Shift, Unshift, Splice, Reverse, Join, Slice, Includes, IndexOf, ForEach, Map, Find, Filter


// __________ map() ___________


// Creates a new array with the results of calling a provided function on every element in the calling array


let numbers1 = [1, 4, 9];

let roots = numbers1.map(function(num) {			// num is each element of the array
	return Math.sqrt(num);
})


console.log(roots);                 			// roots is now [1, 2, 3]
console.log(numbers1);               			// numbers is still [1, 4, 9]


// ___________ Another syntax of same method _____ using an arrow function or anonymous function


let powers = [2, 4, 5]
	.map((num) => num ** 2);

console.log(powers);							// [ 4, 16, 25 ]


// ___________ Another way of same method _____ if uses a reference to the function


let powers3 = [2, 4, 5]
	.map(multiplyByTwo);						// calls the function 'multiplyByTwo()' and applies it to each element of the array

console.log(powers3);							// [ 4, 16, 25 ]


function multiplyByTwo(num) {
	return num * 2;
}
