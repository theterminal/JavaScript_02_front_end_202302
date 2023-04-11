// JavaScript
// 'for ... of' loop - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement


// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.


// Good for use with arrays

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

loop: for (const element of array) {                            // 'loop:' is a label that can be omitted 
    console.log(element);

    if (element === 5) {
        break loop;                                             // 'loop' here indicates which loop will be stopped
    }
}


// ________________ Use of 'for loop' with objects ________________


// Object is a collection which is NOT iterable. Can't be used.

// However, the object can be turned into an array of arrays
// (using
// 'Object.keys' - gets all the keys and stores them into an array,
// 'Object.values' - gets all the values and stores them into an array,
// 'Object.entries' - gets all the 'key-value' pairs and stores them into and array,
// methods),
// with elements from the object.

let object = {'name': 'Kiril', 'age': 45, 'school': 'New Your High School'};
const entries = Object.entries(object);

loop: for (const element of entries) {                            // 'loop:' is a label that can be omitted
    console.log(element);
}
