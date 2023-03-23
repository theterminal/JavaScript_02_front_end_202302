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
