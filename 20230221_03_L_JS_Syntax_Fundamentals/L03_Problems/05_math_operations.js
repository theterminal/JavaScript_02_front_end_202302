// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Problem 05 - Math Operations - judge: https://judge.softuni.org/Contests/Practice/Index/3785#4


function mathOperations(num1, num2, operator) {
    let result;
    
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    }
    console.log(result);
}


mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');
