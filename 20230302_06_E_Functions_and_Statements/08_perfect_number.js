// 20230302 - JavaScript Front-End 202302 - JS Functions and Statements - Exercise
// 08 - Perfect Number - judge: https://judge.softuni.org/Contests/Compete/Index/3789#7


function perfectNumber(number) {
    let sum = 1;

    for (let i = 2; i <= number / 2; i++) {                             // can use it without 'number / 2' just with 'number' but no point doing it
        if (number % i === 0) {
            sum += i;
        }
    }

    if (sum === number) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
