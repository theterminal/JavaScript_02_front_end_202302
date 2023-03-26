// 20230301 - JavaScript Front-End 202302 - JS Functions and Statements
// Page 40 - Simple Calculator


// __________ version 1 _____________


function simpleCalculator(num1, num2, operator) {
    let result = 0;

    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
    }
    return result;
}

console.log(simpleCalculator(10, 20, '+'));


// __________ version 2 _____________


function simpleCalculator2(a, b, operator) {
    switch (operator) {
        case '+': return sum(a, b); break;
        case '-': return subtract(a, b); break;
        case '*': return multiply(a, b); break;
        case '/': return divide(a, b); break;
    }

    function sum(a, b) {return a + b;}
    function subtract(a, b) {return a - b;}
    function multiply(a, b) {return a * b;}
    function divide(a, b) {return a / b;}
}

console.log(simpleCalculator2(10, 2, '+'));
console.log(simpleCalculator2(10, 2, '-'));
console.log(simpleCalculator2(10, 2, '*'));
console.log(simpleCalculator2(10, 2, '/'));


// __________ version 3 _____________


function simpleCalculator3(a, b, operator) {
    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;

    switch (operator) {
        case '+': return sum(a, b); break;
        case '-': return subtract(a, b); break;
        case '*': return multiply(a, b); break;
        case '/': return divide(a, b); break;
    }
}

console.log(simpleCalculator3(100, 2, '+'));
console.log(simpleCalculator3(100, 2, '-'));
console.log(simpleCalculator3(100, 2, '*'));
console.log(simpleCalculator3(100, 2, '/'));
