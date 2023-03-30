// 20230301 - JavaScript Front-End 202302 - JS Functions and Statements
// 05 - Simple Calculator - judge: https://judge.softuni.org/Contests/Practice/Index/3788#4


// _______________ version 4 _________________ something else (like dictionary in python)


function simpleCalculator4(a, b, operation) {
    let operations = {
        'add': a + b,                               // like dictionary with key : value pairs in python
        'subtract': a - b,
        'multiply': a * b,
        'divide': a / b
    }

    let result = operations[operation];
    return result;
}


console.log(
    simpleCalculator4(5, 5, 'multiply'),
    simpleCalculator4(40, 8, 'divide'),
    simpleCalculator4(12, 19, 'add'),
    simpleCalculator4(50, 13, 'subtract')
);


// _______________ version 3 _________________ NOT using switch ____________


function simpleCalculator3(num1, num2, operation) {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
    const operationMap = {
        add : add,                                               // key : value pairs. If they are same, can write only one of the 2
        subtract : subtract,
        multiply : multiply,
        divide : divide
    }

    return operationMap[operation](num1, num2);                 // operationMap[operation] - returns function, which takes num1 and num2
}


console.log(
    simpleCalculator3(5, 5, 'multiply'),
    simpleCalculator3(40, 8, 'divide'),
    simpleCalculator3(12, 19, 'add'),
    simpleCalculator3(50, 13, 'subtract')
);


// _______________ version 2 _________________ using arrow (anonymous) functions ____________


function simpleCalculator2(num1, num2, operation) {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;

    switch (operation) {
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
        default:
            console.log('Something is wrong with the input!');
    }
}


console.log(
    simpleCalculator2(5, 5, 'multiply'),
    simpleCalculator2(40, 8, 'divide'),
    simpleCalculator2(12, 19, 'add'),
    simpleCalculator2(50, 13, 'subtract')
);


// _______________ version 1 _________________


function simpleCalculator(num1, num2, operator) {
    let result = 0;

    switch (operator) {
        case 'add': result = num1 + num2; break;
        case 'subtract': result = num1 - num2; break;
        case 'multiply': result = num1 * num2; break;
        case 'divide': result = num1 / num2; break;
    }
    return result;
}

console.log(
    simpleCalculator(5, 5, 'multiply'),
    simpleCalculator(40, 8, 'divide'),
    simpleCalculator(12, 19, 'add'),
    simpleCalculator(50, 13, 'subtract')
);
