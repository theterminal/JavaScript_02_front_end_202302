// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Array method sort(), reverse()


// Main resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// The sort() method returns a reference to the original array, so mutating the returned array will mutate the original array as well.
// In case you want sort() to NOT mutate the original array, but return a shallow-copied array like other array methods (e.g. map()) do, you can do a shallow copy before calling sort(), using the spread syntax or Array.from().


// ------------------------------------------------------------------------------------------------
console.log('\n _________ Creating, displaying, and sorting an array __________ \n');


// The following example creates four arrays and displays the original array, then the sorted arrays.
// The numeric arrays are sorted without a compare function, then sorted using one.


const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbersAscending(a, b) {
  return a - b;
}

function compareNumbersDescending(a, b) {                                   // KK added
    return b - a;
}

console.log(stringArray.join());                                            // 'Blue,Humpback,Beluga'
console.log(stringArray.sort());                                            // ['Beluga', 'Blue', 'Humpback']

console.log(numberArray.join());                                            // '40,1,5,200'
console.log(numberArray.sort());                                            // [1, 200, 40, 5]
console.log(numberArray.sort(compareNumbersAscending));                     // [1, 5, 40, 200]
console.log(numberArray.sort(compareNumbersDescending));                    // [ 200, 40, 5, 1 ]

console.log(numericStringArray.join());                                     // '80,9,700'
console.log(numericStringArray.sort());                                     // ['700', '80', '9']
console.log(numericStringArray.sort(compareNumbersAscending));              // ['9', '80', '700']

console.log(mixedNumericArray.join());                                      // '80,9,700,40,1,5,200'
console.log(mixedNumericArray.sort());                                      // [1, 200, 40, 5, '700', '80', '9']
console.log(mixedNumericArray.sort(compareNumbersAscending));               // [1, 5, '9', 40, '80', 200, '700']
console.log(mixedNumericArray.sort(compareNumbersDescending));              // ['700', 200, '80', 40, '9', 5, 1] 


// ------------------------------------------------------------------------------------------------
console.log('\n __________ Sorting array of objects __________ \n');


// Arrays of objects can be sorted by comparing the value of one of their properties.


const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  
// sort by value
items.sort((a, b) => a.value - b.value);
  
// sort by name
items.sort((a, b) => {
const nameA = a.name.toUpperCase();                                     // ignore upper and lowercase
const nameB = b.name.toUpperCase();                                     // ignore upper and lowercase
if (nameA < nameB) {
    return -1;
}
if (nameA > nameB) {
    return 1;
}

// names must be equal
return 0;
});


  // ------------------------------------------------------------------------------------------------


// The reverse() method reorders the array in reverse order.
console.log('\n _____ ex. 2 _____ reverse() _____________________________________________________________________ \n');


let stringArray2 = ['Jerry', 'Bob', 'Apple', 'apple'];
stringArray2.reverse();

console.log(stringArray2);  // [ 'apple', 'Apple', 'Bob', 'Jerry' ]          - It reverses a string array in the reversed order


// -------------------------------------------------------------------------------------------------------------------


console.log('\n _____ ex. 3 _____ Sorting an array of numbers Ascending and keep the original array UNALTERED _____ \n');


// When using sort(), the algorithm compares every 'second' number from every 'first' number from every pair of numbers, and if the 'second' number is bigger from the 'first' number, the elements will be swapped and the result is:
//    (*) negative   =   elements will be swapped
//    (*) 0          =   order stays the same (elements are equal)
//    (*) positive   =   order stays the same


let numArray3 = [120, 2];
let sortedNumArray3 = [...numArray3].sort((a, b) => {                       // [...numArray3]           - makes a copy of the array 'numArray3'
    let result = a - b;
    // console.log(result);                                                    // -118                  - the elements will be swapped
    return result;
});

console.log(sortedNumArray3);


// -------------------------------------------------------------------------------------------------------------------


console.log('\n _____ ex. 4 _____ Sorting an array of numbers in Ascending order and ALTERING the original array _____ \n');


let numArray4 = [12, -2, 434, 0, 2, 3, 133];
numArray4.sort((a, b) => {
    let result = a - b;
    // console.log(result);
    return result;
});

console.log(numArray4);


// -------------------------------------------------------------------------------------------------------------------


console.log('\n_____ ex. 5 _____ If you want to find out how exactly the algorithm works _________________________\n');
// The algorithm is live changing depending on the result of every cycle.
// Try to have an array [1, 2, 3, 4] and then try [1, -2, 3, 4] and study the results!
// In the example below 'a' is the SECOND number from the pair 'a' and 'b', ana 'b' is the FIRST number!

let numArray5 = [1, -2, 3, 4, 5];
numArray5.sort((a, b) => {
    let result = a - b;
    console.log(`(${a}) - (${b}) = ${result}  (a - b = result) `);
    // console.log(numArray5);                                                          // uncomment to see that during the cycles the array stays unchanged
    return result;
});

console.log(numArray5);


// -------------------------------------------------------------------------------------------------------------------


console.log('\n _____ ex. 6 _____ Sorting an array of numbers in Descending order _______________________________ \n');


let numArray6 = [12, -2, 434, 0, 2, 3, 133];
numArray6.sort((a, b) => {
    let result = b - a;
    // console.log(result);
    return result;
});

console.log(numArray6);


// -------------------------------------------------------------------------------------------------------------------


console.log('\n _____ ex. 7 _____ Sorting a String Array in Ascending order _____________________________________ \n');


let stringArray7 = ['Kiril', 'Krisi', 'Ilinka', 'Marty'];
let sortedStringArray7 = stringArray7.sort((a, b) => {
    let result = a.localeCompare(b);
    return result;
});

console.log(sortedStringArray7);


// -------------------------------------------------------------------------------------------------------------------


console.log('\n _____ ex. 8 _____ Sorting a String Array Alphabetically in Ascending order - shorter syntax _____ \n')


let stringArray8 = ['Kiril', 'Krisi', 'Ilinka', 'Marty'];
let sortedStringArray8 = stringArray8.sort((a, b) => a.localeCompare(b));

console.log(sortedStringArray8);


// -------------------------------------------------------------------------------------------------------------------


console.log('\n _____ ex. 9 _____ Sorting a String Array Alphabetically in Descending order _____________________ \n');


let stringArray9 = ['Kiril', 'Krisi', 'Ilinka', 'Marty'];
let sortedStringArray9 = stringArray9.sort((a, b) => {
    let result = b.localeCompare(a);
    return result;
});

console.log(sortedStringArray9);


// -------------------------------------------------------------------------------------------------------------------


console.log('\n _____ ex. 10 _____ Sorting a String Array Alphabetically in Descending order - shorter syntax _____ \n');


let stringArray10 = ['Kiril', 'Krisi', 'Ilinka', 'Marty'];
let sortedStringArray10 = stringArray10.sort((a, b) => b.localeCompare(a));

console.log(sortedStringArray10);


// -------------------------------------------------------------------------------------------------------------------


console.log('\n _____ ex. 11 _____ Sorting an Array by the length of strings in Ascending order ___________________ \n');


let stringArray11 = ['Kiril', 'Krisi', 'Ilinka', 'Marty'];
let sortedStringArray11 = stringArray11.sort((a, b) => {
    let result = a.length - b.length;                           // It sorts elements by the number of chars. If 2 el. have same number of chars, sorts them alphabetically.
    return result;
});

console.log(sortedStringArray11);


// -------------------------------------------------------------------------------------------------------------------


console.log('\n _____ ex. 12 _____ Sorting an Array by the length of strings in Descending order ________________ \n');


let stringArray12 = ['Angel', 'Boris', 'Bob', 'Marty'];
let sortedStringArray12 = stringArray12.sort((a, b) => {
    let result = b.length - a.length;                           // It sorts elements Descending by the number of chars. If 2 el. have same number of chars, sorts them Ascending alphabetically.
    return result;
});

console.log(sortedStringArray12);


// -------------------------------------------------------------------------------------------------------------------


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


console.log('\n _____ ex. 13 _____ Sorting in Ascending order numeric, string and mixed arrays using sort() _____ \n');


const numericArray13 = [40, 1, 5, 200];
const numericStringArray13 = ['80', '9', '700'];
const numericStringArrayMixed13 = ['80', '9', '700', 40, 1, 5, 200];

function sortingAB(a, b) {
    return a - b;                                         // It'll sort the array in Ascending Order 
}

console.log(numericArray13.sort());                       // [ 1, 200, 40, 5 ]                        - result if using just .sort() method
console.log(numericArray13.sort(sortingAB));              // [ 1, 5, 40, 200 ]                        - result if using .sort() method with defining function
console.log([12, 0, -7].sort(sortingAB));                 // [ -7, 0, 12 ]                            - result if applied directly to an array
console.log(numericArray13);                              // [ 1, 5, 40, 200 ]                        - original array is modified

console.log(numericStringArray13.sort(sortingAB));        // [ '9', '80', '700' ]                     - it sorts it

console.log(numericStringArrayMixed13.sort(sortingAB));   // [ 1, 5, '9', 40, '80', 200, '700' ]      - It sorts it


// -------------------------------------------------------------------------------------------------------------------


console.log('\n _____ ex. 14 _____ Sorting in Descending order numeric, string and mixed arrays using sort() _____ \n');


const numericArray14 = [40, 1, 5, 200];
const numericStringArray14 = ['80', '9', '700'];
const numericStringArrayMixed14 = ['80', '9', '700', 40, 1, 5, 200];

function sortingAB(a, b) {
    return b - a;                                          // It'll sort the array in Ascending Order 
}

console.log(numericArray14.sort());                         // [ 1, 200, 40, 5 ]                        - result if using just .sort() method
console.log(numericArray14.sort(sortingAB));                // [ 200, 40, 5, 1 ]                        - result if using .sort() method with defining function
console.log([12, 0, -7].sort(sortingAB));                  // [ 12, 0, -7 ]                            - result if applied directly to an array
console.log(numericArray14);                                // [ 200, 40, 5, 1 ]                        - original array is modified

console.log(numericStringArray14.sort(sortingAB));          // [ '700', '80', '9' ]                     - it sorts it

console.log(numericStringArrayMixed14.sort(sortingAB));     // [ '700', 200, '80', 40, '9', 5, 1 ]      - It sorts it


// -------------------------------------------------------------------------------------------------------------------


console.log('\n _____ ex. 15_____ Tests _________________________________________________________________________ \n');


const numericArray15 = [34, -23, 12, 456, 0, 3, -11];
const stringArray15 = ['Kiril', 'Kiro', 'Ilina', 'Krisito', 'Marty'];

function sortingAscending(a, b) {return a - b;}
function sortingDescending(a, b) {return b - a;}

function ascendingArray(numericArray15) {
    return numericArray15.sort(sortingAscending);
}

function descendingArray(numericArray15) {
    return numericArray15.sort(sortingDescending);
}


console.log(ascendingArray(numericArray15));
console.log(descendingArray(numericArray15));


// -------------------------------------------------------------------------------------------------------------------


console.log('\n _____ ex. 16_____ Function to order Ascending or Descending number or string arrays ____________ \n');
// must do an additional test using a loop to find out if a numeric array is mixed with strings and then do it as string array...


const numericArray16 = [34, -23, 12, 456, 0, 3, -11];
const stringArray16 = ['Kiril', 'Kiro', 'Ilina', 'Krisito', 'Marty'];

function sortingAscendingNumber(a, b) {return a - b;}
function sortingDescendingNumber(a, b) {return b - a;}
function sortingAscendingString(a, b) {return a.localeCompare(b)}
function sortingDescendingString(a, b) {return b.localeCompare(a)}

function ascendingOrder(inputArray) {
    if (typeof(inputArray[0]) === 'string') {
         return [...inputArray].sort(sortingAscendingString);
    } else if (typeof(inputArray[0]) === 'number') {
         return [...inputArray].sort(sortingAscendingNumber);
     }
}

function descendingOrder(inputArray) {
    if (typeof(inputArray[0]) === 'string') {
         return [...inputArray].sort(sortingDescendingString);
    } else if (typeof(inputArray[0]) === 'number') {
         return [...inputArray].sort(sortingDescendingNumber);
     }
}


console.log(ascendingOrder(numericArray16));
console.log(ascendingOrder(stringArray16));
console.log(descendingOrder(numericArray16));
console.log(descendingOrder(stringArray16));


// ________


let array100 = [1, 3, 2].sort();                                                // [1, 2, 3]
console.log(array100.length);

const cmp = {
    asc: (x, y) => x >= y,
    dsc: (x, y) => x <= y
};

let array101 = [1, 3, 2].sort(cmp[this.key || "asc"]);                          // [1, 2, 3]
console.log(array101);                                         
