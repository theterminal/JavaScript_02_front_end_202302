// 20230302 - JavaScript Front-End 202302 - JS Functions and Statements - Exercise
// 10 - Factorial Division - judge: https://judge.softuni.org/Contests/Compete/Index/3789#9


function factorialDivision(num1, num2) {
    let factorial1 = getFactorial(num1);
    let factorial2 = getFactorial(num2);

    let result = (factorial1 / factorial2).toFixed(2);

    return result;

    function getFactorial(num) {
        if (num === 1) {
            return num;
        }
        return num * getFactorial(num - 1)
    }
}

console.log(factorialDivision(5,2));
console.log(factorialDivision(6,2));
