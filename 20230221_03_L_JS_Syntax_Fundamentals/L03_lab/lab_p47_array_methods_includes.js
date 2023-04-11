// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Array Methods - Pop, Push, Shift, Unshift, Splice, Reverse, Join, Slice, Includes, IndexOf, ForEach, Map, Find, Filter


// __________ includes() ___________


// Determines whether an array contains a certain element, returning true or false as appropriate.

/* 

Syntax:
includes(searchElement, fromIndex);

fromIndex (Optional)
Zero-based index at which to start searching, converted to an integer.

Negative index counts back from the end of the array —
if fromIndex < 0, fromIndex + array.length is used.

However, the array is still searched from front to back in this case.

If fromIndex < -array.length or fromIndex is omitted, 0 is used, causing the entire array to be searched.
If fromIndex >= array.length, the array is not searched and false is returned.

*/


console.log('\n ___________ ex. 01 ___________ \n');


// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97


let arr = ['a', 'b', 'c'];

console.log(arr.includes('a', -100));                    // true
console.log(arr.includes('b', -100));                    // true
console.log(arr.includes('c', -100));                    // true
console.log(arr.includes('a', -2));                      // false


console.log('\n ___________ ex. 02 ___________ \n');


let arr2 = ['a', -1, 0, null, 12.4, true, false, '%', undefined, [12, -3, 0, null, 'KK', undefined, {'name': 'Jerry'}], {'name': 3}];

for (const element of arr2) {
    if (arr2.includes(element)) {
        console.log(`array contains an element with (type : value) - (${typeof(element)} : ${element})`);
    }
}
