// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals


// matrix, arrays


matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]];

console.log(matrix);
console.table(matrix);


// methods that - change  - the existing array
// methods that - copy    - the array and apply changes to the new array
// methods that - iterate - through the array


// ____________ Array Methods ____________


// pop() - Removes and returns the last element from an array. The method changes array length.
// push() -  Adds one or more elements to the end of an array and returns the new array length.
// shift() - Removes and returns the first element from an array. The method changes array length.
// unshift() - Adds one or more elements to the beginning of an array and returns the new array length.

// slice() - Returns a shallow copy of a portion of an array as new array object. (from start to end indexes - end not included). Original array is not modified.
// splice() - Removes or replaces existing element/s or adds new element/s to an array.

// reverse() - Reverses the array.
// join() - Creates and returns a new string by concatenating the elements in an array (or an array-like object), separated by specified separator string.
// includes() - Determines whether an array contains a certain element, returning true or false as appropriate.
// indexOf() - Returns the first index at which a given element can be found in the array. Output is -1 if element is not present.

// forEach() - Executes a provided function once for each array element. It doesn't transform the original array.
// map() - Creates a new array with the results of calling a provided function on every element...
// find() - Returns the first found value in the array or undefined. Must provide testing function.
// filter() - Creates a new array (doesn't mutate the original array) with filtered elements only. Calls a provided function for each element in an array.