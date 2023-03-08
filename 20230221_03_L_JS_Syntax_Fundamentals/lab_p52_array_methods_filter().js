// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Array Methods - Pop, Push, Shift, Unshift, Splice, Reverse, Join, Slice, Includes, IndexOf, ForEach, Map, Find, Filter


// __________ filter() ___________


// Creates a new array with filtered elements only
// Calls a provided callback function once for each element in an array
// Does not mutate the array on which it is called


let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];              // Filter array items based on search criteria (query)

function filterItems(arr, query) {
    return arr.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  }
}

console.log(filterItems(fruits, 'ap'));                                   // ['apple', 'grapes']