// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Array Methods - Pop, Push, Shift, Unshift, Splice, Reverse, Join, Slice, Includes, IndexOf, ForEach, Map, Find, Filter


// __________ filter() ___________


// Creates a new array with filtered elements only
// Calls a provided callback function once for each element in an array
// Does not mutate the array on which it is called


console.log('\n__________ Example 1 ___________\n');


let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];                   // Filter array items based on search criteria (query)

function filterItems(arr, query) {
    return arr.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  })
}

console.log(filterItems(fruits, 'ap'));                                          // ['apple', 'grapes']


console.log('\n___________ Example 2 ____________\n');


let numbers = [12, 22, 43];
let result = numbers.filter((x) => x % 2 === 0);

console.log(result);


console.log('\n___________ Example 3 ___________ another syntax ____________\n');


let nums = [12, 22, 43, 62, 102];
let evenNums = nums
  .filter((x) => x % 2 === 0);

console.log(evenNums);
console.table(evenNums);


console.log('\n____________ Example 4 ____________\n');


let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let result_4 = words.filter(word => word.length > 6);

console.log(result_4);                                                          // [ 'exuberant', 'destruction', 'present' ]