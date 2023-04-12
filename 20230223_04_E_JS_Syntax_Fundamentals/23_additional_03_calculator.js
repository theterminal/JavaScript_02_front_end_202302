// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - More Exercise
// More Exercise 03 - Calculator - judge: https://judge.softuni.org/Contests/Practice/Index/3787#2


// ______________ version 02 _______________


function calculator2(num1, operator, num2) {
    const objectOperations = {
        '+': num1 + num2,
        '-': num1 - num2,
        '*': num1 * num2,
        '/': num1 / num2,
    }

    let result = objectOperations[operator];
    console.log(result.toFixed(2));
}


calculator2(5, '+', 10);
calculator2(5, '+', 10);


// ______________ version 01 _______________


function calculator(num1, operator, num2) {
    let result = 0;

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    }

    console.log(result.toFixed(2));
}


calculator(5, '+', 10);
calculator(5, '+', 10);
