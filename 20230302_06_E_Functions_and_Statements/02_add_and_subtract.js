// 20230302 - JavaScript Front-End 202302 - JS Functions and Statements - Exercise
// 02 - Add and Subtract - judge: https://judge.softuni.org/Contests/Compete/Index/3789#1


// ______________ version 4 __________________ 1 arrow function


const calculations4 = (num1, num2, num3) => {               // submit in judge without 'const calculations4' !!!
    const sum = (a, b) => a + b;
    const subtract = (mySum, c) => mySum - c;

    return subtract(sum(num1, num2), num3);
}


console.log(calculations4(23, 6, 10));
console.log(calculations4(1, 17, 30));
console.log(calculations4(42, 58, 100));


// ______________ version 3 __________________ function containing arrow functions


function calculations3(num1, num2, num3) {
    const sum = (a, b) => a + b;
    const subtract = (mySum, c) => mySum - c;

    return subtract(sum(num1, num2), num3);
}


console.log(calculations3(23, 6, 10));
console.log(calculations3(1, 17, 30));
console.log(calculations3(42, 58, 100));


// ______________ version 2 __________________


function addAndSubtract2(num1, num2, num3) {
    function sum(a, b) {
        return a + b;
    }

    function subtract(c) {
        return sum(num1, num2) - c;
    }

    return subtract(num3);
}

console.log(addAndSubtract2(23, 6, 10));
console.log(addAndSubtract2(1, 17, 30));
console.log(addAndSubtract2(42, 58, 100));


// ______________ version 1 __________________


function addAndSubtract1(num1, num2, num3) {

    let sum = (x, y) => x + y;
    let subtract = (m, n) => m - n;

    return subtract(sum(num1, num2), num3);
}

console.log(addAndSubtract1(23, 6, 10));
console.log(addAndSubtract1(1, 17, 30));
console.log(addAndSubtract1(42, 58, 100));
