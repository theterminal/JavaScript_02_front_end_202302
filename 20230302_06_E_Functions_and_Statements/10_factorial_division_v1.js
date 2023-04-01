// 20230302 - JavaScript Front-End 202302 - JS Functions and Statements - Exercise
// 10 - Factorial Division - judge: https://judge.softuni.org/Contests/Compete/Index/3789#9


function factorialDivision(num1, num2) {
    let factorial1 = 1;
    let factorial2 = 1;

    for (let i = 1; i <= num1; i++) {
        factorial1 *= i;
    }

    for (let i = 1; i <= num2; i++) {
        factorial2 *= i;
    }

    let result = 0;
    result = factorial1 / factorial2;
    console.log(result.toFixed(2));
}

factorialDivision(5,2);
factorialDivision(6,2);
