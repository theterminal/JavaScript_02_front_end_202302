// 20230302 - JavaScript Front-End 202302 - JS Functions and Statements - Exercise
// 01 - Smallest of Three Numbers - judge: https://judge.softuni.org/Contests/Compete/Index/3789#0


// ____________ version 4 _______________ using arrow (anonymous) functions, Math.min(), Math.max()


const smallestOfThreeNumbers4 = (a, b, c) => Math.min(a, b, c);
const smallestOf3 = (a, b, c) => Math.min(a ,b, c);
const biggestOfThreeNumbers4 = (a, b, c) => Math.max(a, b, c);
const biggestOf3 = (a, b, c) => Math.max(a, b, c);


console.log(
    smallestOfThreeNumbers4(1, 2, 3),
    smallestOf3(20, 30, 40),
    biggestOfThreeNumbers4(300, 400, 500),
    biggestOf3(4000, 5000, 6000)
);


// ____________ version 3 _______________ using Math.min


function smallestOfThreeNumbers3(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}


console.log(smallestOfThreeNumbers3(2, 5, 3));
console.log(smallestOfThreeNumbers3(600, 342, 123));
console.log(smallestOfThreeNumbers3(25, 21, 4));
console.log(smallestOfThreeNumbers3(2, 2, 2));


// ____________ version 2 _______________


function smallestOfThreeNumbers2(...numbers) {
    let result = numbers[0];

    for (let i = 0; i < 3; i++) {
        if (numbers[i] < result) {
            result = numbers[i];
        }
    }

    return result;
}


console.log(smallestOfThreeNumbers2(2, 5, 3));
console.log(smallestOfThreeNumbers2(600, 342, 123));
console.log(smallestOfThreeNumbers2(25, 21, 4));
console.log(smallestOfThreeNumbers2(2, 2, 2));


// ____________ version 1 _______________


function smallestOfThreeNumbers1(...input) {
    let result = '';

    if (input[0] <= input[1] && input[0] <= input[2]) {
        return input[0];
    } else if (input[1] <= input[0] && input[1] <= input[2]) {
        return input[1];
    } else if (input[2] <= input[0] && input[2] <= input[1])
        return input[2];
}

console.log(smallestOfThreeNumbers1(2, 5, 3));
console.log(smallestOfThreeNumbers1(600, 342, 123));
console.log(smallestOfThreeNumbers1(25, 21, 4));
console.log(smallestOfThreeNumbers1(2, 2, 2));
