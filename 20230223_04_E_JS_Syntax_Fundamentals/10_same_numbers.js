// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 10 - Same Numbers - judge: https://judge.softuni.org/Contests/Compete/Index/3786#9


function sameNumbers(number) {
    number = String(number);
    let sum = 0;
    let test;
    let result;

    for (let i = 0; i < number.length; i++ ) {
        sum += Number(number[i]);

        if (i === 0) {
            test = Number(number[i]);
        }
        
        if (test === Number(number[i])) {
            result = true;
        } else {
            result = false;
        }
        
        test = Number(number[i]);
    }

    console.log(result);
    console.log(sum);
}


sameNumbers(2222222);                                   // true 14
sameNumbers(1234);                                      // false 10
sameNumbers(2);

