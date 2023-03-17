// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 05 - Multiplication Table - judge: https://judge.softuni.org/Contests/Compete/Index/3786#4


function multiplicationTable(number) {
    let result = [];

    for (i = 1; i <= 10; i++) {
        result += `${number} X ${i} = ${number * i}\n`;
    }
    console.log(result);
}


multiplicationTable(5);
multiplicationTable(2);
