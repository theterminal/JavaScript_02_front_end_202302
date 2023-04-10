// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 06 - Sum Digits - judge: https://judge.softuni.org/Contests/Compete/Index/3786#5


// ____________ version 1 ____________ converting to string ____________


function sumDigits(number) {
    let result = 0;
    number = String(number);

    for (let i = 0; i < number.length; i++) {
        result += Number(number[i]);
    }
    console.log(result);
}


sumDigits(245678);                                  // 32
sumDigits(97561);                                   // 28
sumDigits(543);                                     // 12


// ____________ version 2 ____________ mathematical version ____________


function sumDigits2(num) {
    let sum = 0;

    while (num > 0) {
        let lastDigit = num % 10;
        sum += lastDigit;
        // num = Math.trunc(num / 10);                  // truncates everything after the decimal point
        // num = Math.floor(num / 10);                  // same as above 
        num = ~~(num/10);                               // same as above
    }

    console.log(sum);
}


sumDigits2(245678);                                 // 32
sumDigits2(97561);                                  // 28
sumDigits2(543);                                    // 12
