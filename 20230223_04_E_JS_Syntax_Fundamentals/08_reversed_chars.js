// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 08 - Reversed Chars - judge: https://judge.softuni.org/Contests/Compete/Index/3786#7


function reversedChars(...input) {
    let result = input.reverse().join(' ');
    console.log(result);
}


reversedChars('A', 'B', 'C');
reversedChars('1', 'L', '&');
