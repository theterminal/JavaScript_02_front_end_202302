// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 07 - Chars to String - judge: https://judge.softuni.org/Contests/Compete/Index/3786#6


// _______________ version 2 _________________


function charsToString2(...input) {
    let result = `${input[0]}${input[1]}${input[2]}`;
    console.log(result);
}


charsToString2('a', 'b', 'c');                               // abc
charsToString2('%', '2', 'o');                               // %2o
charsToString2('1', '5', 'p');                               // 15p


// _______________ version 1 _________________


function charsToString(par_1, par_2, par_3) {
    let result = par_1 + par_2 + par_3;
    console.log(result);
}


charsToString('a', 'b', 'c');                               // abc
charsToString('%', '2', 'o');                               // %2o
charsToString('1', '5', 'p');                               // 15p
