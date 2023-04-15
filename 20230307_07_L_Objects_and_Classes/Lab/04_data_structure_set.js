// Set - structure holding a unique elements


// Set is similar to the Set structure in Python. It stores only unique elements.
// Create a new set with 'name = new Set'


let set1 = new Set;                                         // declaring a new empty set
console.log(set1);                                          // Set(0) {}

let array = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];           // example array with repeating elements

for (const element of array) {                              // using loop to add the array elements to the set
    set1.add(element);
}

console.log(set1);                                          // Set(3) { 1, 2, 3 }  - it is visible that the set trims all repeated elements


// _______________________ Iterating over the elements of the set using the 'forof' loop ____________________ 


let set2 = new Set(array);  // example                      // takes all elements from the array and converts them to set
set2.add(10);                                               // adds '10' to the set

for (const element of set2) {                               // iterates over the elements of the set
    console.log(element);
}

console.log(set2);                                          // Set(4) { 1, 2, 3, 10 }


// _________________ creating arrays, sets, unpacking them into one another and using some methods _________________


let arr31 = [1, 2, 3, 4, 4 ];                                   // an array of numbers
console.log(arr31);                                             // [ 1, 2, 3, 4, 4 ]
console.log(...arr31);                                          // 1 2 3 4 4
console.log(Math.max(...arr31));                                // 4

let set31 = new Set(arr31);                                     // creating new set from the array 'a'
console.log(set31);                                             // Set(4) { 1, 2, 3, 4 }
console.log(...set31);                                          // 1 2 3 4
console.log(Math.max(...set31));                                // 4

let arr32 = [...set31];                                         // unpacking the set 'set31' into a new array 'arr32'
console.log(arr32);                                             // [ 1, 2, 3, 4 ]
