// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Problem 06 - Largest Number - judge: https://judge.softuni.org/Contests/Practice/Index/3785#5


function largestNumber(num1, num2, num3) {
    let result;

    if (num1 > num2 && num1 > num3) {
        result = num1;
    } else if (num2 > num1 && num2 > num3) {
        result = num2;
    } else if (num3 > num1 && num3 > num1) {
        result = num3;
    }

    console.log(`The largest number is ${result}.`)
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);