// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 06 - Sum Digits - judge: https://judge.softuni.org/Contests/Compete/Index/3786#5


function sumDigits(number) {
    let result = 0;
    number = String(number);

    for (let i = 0; i < String(number).length; i++) {
        result += Number(number[i]);
    }
    console.log(result);
}


sumDigits(245678);                                  // 32
sumDigits(97561);                                   // 28
sumDigits(543);                                     // 12
