// JavaScript - Swapping two element of an array


console.log('\n __________ Swapping two elements of an array by the elements _______ \n');


let arr = ['a', 'd', 'c', 'b', 'e'];                        // starting array

let el1 = 'd'                                               // 'el1' to swap with 'el2'
let el2 = 'b';
let indexEl1 = arr.indexOf('d');                            // find the index of 'el1'
let indexEl2 = arr.indexOf('b');                            // find the index of 'el2'

arr.splice(indexEl1, 1, el2);                               // replacing the first element with the second element
arr.splice(indexEl2, 1, el1);                               // replacing the second element with the first element

console.log(arr);                                           // [ 'a', 'b', 'c', 'd', 'e' ]


console.log('\n __________ Custom function for swapping any 2 elements of an array by index _______ \n');


function swapArrayElementsByIndex(array, indexEl1, indexEl2) {
    if (indexEl1 < 0 || indexEl2 < 0 || indexEl1 > array.length || indexEl2 > array.length) {
        return 'Index value/s out of range!';
    }
    let el1 = array[indexEl1];
    let el2 = array[indexEl2];
    array.splice(indexEl1, 1, el2);
    array.splice(indexEl2, 1, el1);
    return array;
}

console.log(swapArrayElementsByIndex(['1', '2', '3', '4', '5'], 3, 0));                            // [ '4', '2', '3', '1', '5' ]


console.log('\n __________ Custom function for swapping any 2 elements of an array by value _______ \n');


function swapArrayElementsByValue(array, el1, el2) {
    
    let indexEl1 = array.indexOf(el1);
    let indexEl2 = array.indexOf(el2);
    
    array.splice(indexEl1, 1, el2);
    array.splice(indexEl2, 1, el1);
    return array;
}

console.log(swapArrayElementsByValue(['A', 'B', 'C', 'D', 'E'], 'B', 'D'));                         // [ 'A', 'D', 'C', 'B', 'E' ]
