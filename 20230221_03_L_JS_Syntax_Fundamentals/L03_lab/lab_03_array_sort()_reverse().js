// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Array method sort(), reverse()
// https://www.w3schools.com/js/js_array_sort.asp


console.log('\n ____________ sort() _____________ \n');
// The sort() method sorts the array alphabetically.


arr = ['Jerry', 'Bob', 'Apple'];
arr.sort();

console.log(arr);                                       // [ 'Apple', 'Bob', 'Jerry' ]


console.log('\n ____________ reverse() _____________ \n');
// The reverse() method orders the array in reverse.


arr2 = ['Jerry', 'Bob', 'Apple'];
arr2.reverse();

console.log(arr2);                                      // [ 'Apple', 'Bob', 'Jerry' ]


console.log('\n _________________ Sorting numbers Ascending ________________ \n');


// If when using sort(), the algorithm subtracts every 'second' number from every 'first' number from every pair of numbers, and if the return is:
//    (*) negative   =   elements will be swapped
//    (*) 0          =   order stays the same (elements are equal)
//    (*) positive   =   order stays the same


// If you need to keep the original array, make a copy of the array by using 'let sortedNumArray3 = [...numArray3]'
let numArray3 = [12, -2, 434, 0, 2, 3, 133];
let sortedNumArray3 = [...numArray3].sort((aNum, bNum) => {
    let result = aNum - bNum;
    // console.log(result);
    return result;
});

console.log(sortedNumArray3);


// If you want to alter the original array
let numArray4 = [12, -2, 434, 0, 2, 3, 133];
numArray4.sort((aNum, bNum) => {
    let result = aNum - bNum;
    // console.log(result);
    return result;
});

console.log(numArray4);


console.log('\n___________ If you want to find out how exactly the algorithm works __________\n');
// The algorithm is live changing depending on the result of every cycle. Try to have an array [1, 2, 3, 4] and then try [1, -2, 3, 4] and study the result!!!

let numArray5 = [1, -2, 3, 4, 5];
numArray5.sort((a, b) => {
    let result = a - b;
    console.log(`\n (${a}) - (${b}) = ${result}  (aNum - bNum = result) `);
    // console.log(numArray5);                                                          // uncomment to see that during the cycles the array stays unchanged
    return result;
});

console.log(numArray5);


console.log('\n _________________ Sorting numbers Descending ________________ \n');


let numArray6 = [12, -2, 434, 0, 2, 3, 133];
numArray6.sort((aNum, bNum) => {
    let result = bNum - aNum;
    // console.log(result);
    return result;
});

console.log(numArray6);


console.log('\n _________________ Sorting Strings Ascending ________________ \n');


let stringArray1 = ['Kiril', 'Krisi', 'Ilinka', 'Marty'];
let sortedStringArray1 = stringArray1.sort((a, b) => {
    let result = a.localeCompare(b);
    return result;
});

console.log(sortedStringArray1);


console.log('\n _________________ Sorting Strings Descending ________________ \n');


let stringArray2 = ['Kiril', 'Krisi', 'Ilinka', 'Marty'];
let sortedStringArray2 = stringArray2.sort((a, b) => {
    let result = b.localeCompare(a);
    return result;
});

console.log(sortedStringArray2);


console.log('\n _________________ Sorting Array by the length of string Ascending ________________ \n');


let stringArray3 = ['Kiril', 'Krisi', 'Ilinka', 'Marty'];
let sortedStringArray3 = stringArray3.sort((a, b) => {
    let result = a.length - b.length;                           // It sorts elements by the number of chars. If 2 el. have same number of chars, sorts them alphabetically.
    return result;
});

console.log(sortedStringArray3);


console.log('\n _________________ Sorting Array by the length of string Descending ________________ \n');


let stringArray4 = ['Angel', 'Boris', 'Bob', 'Marty'];
let sortedStringArray4 = stringArray4.sort((a, b) => {
    let result = b.length - a.length;                           // It sorts elements Descending by the number of chars. If 2 el. have same number of chars, sorts them Ascending alphabetically.
    return result;
});

console.log(sortedStringArray4);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// _______________________More information on sort() _____________
console.log('\n ____________ More information on sort() _____________');
console.log('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort \n');


const numericArray = [40, 1, 5, 200];
const numericStringArray = ['80', '9', '700'];
const numericStringArrayMixed = ['80', '9', '700', 40, 1, 5, 200];

function sortingAB(a, b) {
    return a - b;                                          // It'll sort the array in Ascending Order 
}

console.log(numericArray.sort());                          // [ 1, 200, 40, 5 ]                        - result if using just .sort() method
console.log(numericArray.sort(sortingAB));                 // [ 1, 5, 40, 200 ]                        - result if using .sort() method with defining function
console.log([12, 0, -7].sort(sortingAB));                  // [ -7, 0, 12 ]                            - result if applied directly to an array
console.log(numericArray);                                      // [ 1, 5, 40, 200 ]                        - original array is modified

console.log(numericStringArray.sort(sortingAB));           // [ '9', '80', '700' ]                     - it sorts it

console.log(numericStringArrayMixed.sort(sortingAB));      // [ 1, 5, '9', 40, '80', 200, '700' ]      - It sorts it


console.log('_____________ Sorting in Descending Order _______________');


const numericArray2 = [40, 1, 5, 200];
const numericStringArray2 = ['80', '9', '700'];
const numericStringArrayMixed2 = ['80', '9', '700', 40, 1, 5, 200];

function sortingAB(a, b) {
    return b - a;                                          // It'll sort the array in Ascending Order 
}

console.log(numericArray2.sort());                         // [ 1, 200, 40, 5 ]                        - result if using just .sort() method
console.log(numericArray2.sort(sortingAB));                // [ 200, 40, 5, 1 ]                        - result if using .sort() method with defining function
console.log([12, 0, -7].sort(sortingAB));                  // [ 12, 0, -7 ]                            - result if applied directly to an array
console.log(numericArray2);                                // [ 200, 40, 5, 1 ]                        - original array is modified

console.log(numericStringArray2.sort(sortingAB));          // [ '700', '80', '9' ]                     - it sorts it

console.log(numericStringArrayMixed2.sort(sortingAB));     // [ '700', 200, '80', 40, '9', 5, 1 ]      - It sorts it


// ---------------------------------------------------------------------------------------


console.log('\n _____________ Test ____________ \n');


const numericArr = [34, -23, 12, 456, 0, 3, -11];
const stringArr = ['Kiril', 'Kiro', 'Ilina', 'Krisito', 'Marty'];

function sortingAscending(a, b) {return a - b;}
function sortingDescending(a, b) {return b - a;}

function ascendingArray(numericArr) {
    return numericArr.sort(sortingAscending);
}

function descendingArray(numericArr) {
    return numericArr.sort(sortingDescending);
}


console.log(ascendingArray(numericArr));
console.log(descendingArray(numericArr));


console.log('\n _____________ Function to order Ascending or Descending Numbers Array or String Array ____________ \n');


const numericA = [34, -23, 12, 456, 0, 3, -11];
const stringA = ['Kiril', 'Kiro', 'Ilina', 'Krisito', 'Marty'];

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


console.log(ascendingOrder(numericA));
console.log(ascendingOrder(stringA));
