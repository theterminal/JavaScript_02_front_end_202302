// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Destructuring Syntax


// Expression that unpacks values from arrays or objects, into distinct variables.
// The initial array doesn't change.


console.log('\n______ Example 1 _______\n');


let numbers = [10, 20, 30, 40, 50];
console.log(numbers);                   // [ 10, 20, 30, 40, 50 ]

let [a, b, ...elems] = numbers;         // ...elems is called 'Rest' operator
console.log(numbers);                   // [ 10, 20, 30, 40, 50 ]                   (original array 'numbers' stay unchanged)

console.log(a)                          // 10                                       (element 'a' is the first element of 'numbers')
console.log(b)                          // 20                                       (element 'b' is the second element of 'numbers')
console.log(elems)                      // [ 30, 40, 50 ]                           (array 'elems' is the rest of the elements of the array 'numbers')
console.log(numbers);                   // [ 10, 20, 30, 40, 50 ]                   (original array 'numbers' stay unchanged)


// The 'rest' operator can also be used to collect function parameters into an array.


console.log('\n______ Example 2 _______\n');


let numArray = [1, 2, 3, 4, 5, 6];
console.log(numArray);

let [x, y, z, ...newNumArr] = numArray;
console.log(x);                                         // 1
console.log(y);                                         // 2
console.log(z);                                         // 3
console.log(newNumArr);                                 // [ 4, 5, 6 ]


console.log('\n______ Example 3 _______\n');


let numArr = [1, 2, 3, [4, 5, 6]];
console.log(numArr);                                    // [ 1, 2, 3, [ 4, 5, 6 ] ]

let numArr2 = [10, 20, 30, ...[40, 50, 60]];
console.log(numArr2);                                   // [ 10, 20, 30, 40, 50, 60 ]  (unpacks the array)


console.log('\n______ Example 4 _______\n');


let numArr3 = [400, 500, 600];
let numArr4 = [10, 20, 30, ...numArr3];
console.log(numArr4);                                   // [ 10, 20, 30, 400, 500, 600 ] 


console.log('\n______ Example 5 _______ - rest operator in functions\n');


function restOperator(name, ...otherParameters) {
    console.log(name);
    console.log(otherParameters);
    console.log(`All parameters passed to the function are ${otherParameters.length + 1}`);
}


restOperator('Kiril', 'param2', 'param3', 45);
