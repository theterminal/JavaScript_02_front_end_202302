// 20230301 - JavaScript Front-End 202302 - JS Functions and Statements
// 05 - Simple Calculator - judge: https://judge.softuni.org/Contests/Practice/Index/3788#4


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
    simpleCalculator(5, 5, 'multiply')
);
