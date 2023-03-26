// 20230301 - JavaScript Front-End 202302 - JS Functions and Statements
// Page 21 - Returning Values


// _______________ Check if array index is valid _________________


function checkIfArrayIndexIsValid(index, array) {
    if (index > 0 && index < array.length) {
        return 'Index is valid';
    }
    return 'Index is NOT valid';
}


console.log(
    checkIfArrayIndexIsValid(4, [3, 'Kiril', -12, 'Joe', 'Kristina'])
);

console.log(
checkIfArrayIndexIsValid(5, [3, 'Kiril', -12, 'Joe', 'Kristina'])
);
