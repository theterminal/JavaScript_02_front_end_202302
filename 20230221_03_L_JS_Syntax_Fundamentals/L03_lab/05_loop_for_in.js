// JavaScript
// 'for ... in' loop - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement


/*

The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

A for...in loop only iterates over enumerable, non-symbol properties.
Objects created from built–in constructors like Array and Object have inherited non–enumerable properties from Array.prototype and Object.prototype, such as Array's indexOf() method or Object's toString() method, which will not be visited in the for...in loop.

If a property is modified in one iteration and then visited at a later time, its value in the loop is its value at that later time. A property that is deleted before it has been visited will not be visited later. Properties added to the object over which iteration is occurring may either be visited or omitted from iteration.

In general, it is best not to add, modify, or remove properties from the object during iteration, other than the property currently being visited. There is no guarantee whether an added property will be visited, whether a modified property (other than the current one) will be visited before or after it is modified, or whether a deleted property will be visited before it is deleted.

Array indexes are just enumerable properties with integer names and are otherwise identical to general object properties. The for...in loop will traverse all integer keys before traversing other keys, and in strictly increasing order, making the behavior of for...in close to normal array iteration. However, the for...in loop will return all enumerable properties, including those with non–integer names and those that are inherited. Unlike for...of, for...in uses property enumeration instead of the array's iterator. In sparse arrays, for...of will visit the empty slots, but for...in will not.

It is better to use a for loop with a numeric index, Array.prototype.forEach(), or the for...of loop, because they will return the index as a number instead of a string, and also avoid non-index properties.

If you only want to consider properties attached to the object itself, and not its prototypes, you can use one of the following techniques:

Object.keys(myObject)
Object.getOwnPropertyNames(myObject)

*/


// _____________ ex. 01 ______________


const obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`${prop} = ${obj[prop]}`);
}


// _____________ ex. 02 ______________

const obj2 = {m: 10, n: 20, k: 30};

const info = Object.getOwnPropertyNames(obj2);
console.log(info);                                                      // [ 'm', 'n', 'k' ]

for (const prop in obj2) {
  console.log(`${prop} = ${obj2[prop]}`);
}