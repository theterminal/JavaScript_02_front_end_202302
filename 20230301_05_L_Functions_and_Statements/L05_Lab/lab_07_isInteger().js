// JavaScript - using 'Number.isInteger(testedValue)'


function checkInput(input) {
    if (Number.isInteger(input)) {
        return `The input ${input} is an integer`;
    }
    return `The input ${input} is not an integer`;
}


console.log(checkInput(23));
console.log(checkInput('Kiril'));
console.log(checkInput('35'));
console.log(checkInput('47Kiril'));
