// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 03 - Leap Year - judge: https://judge.softuni.org/Contests/Compete/Index/3786#2


function leapYear(year) {
    let result;

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ) {
        console.log(`yes`);
    } else {
        console.log(`no`);
    }
}


leapYear(1984);                                     // yes
leapYear(2003);                                     // no
leapYear(4);                                        // yes