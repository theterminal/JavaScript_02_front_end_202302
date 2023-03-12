// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Array Methods - Pop, Push, Shift, Unshift, Splice, Reverse, Join, Slice, Includes, IndexOf, ForEach, Map, Find, Filter


// __________ forEach() ___________


// The forEach() method executes a provided function once for each array element
// Converting a for loop to forEach


const items = ['item1', 'item2', 'item3'];
const copy = [];

// For loop
for (let i = 0; i < items.length; i++) {
  copy.push(items[i]);
}                                               // copy contains [ 'item1', 'item2', 'item3' ]

// ForEach
items.forEach(item => {copy.push(item);})      // copy contains [ 'item1', 'item2', 'item3', 'item1', 'item2', 'item3' ]

console.log(copy);
