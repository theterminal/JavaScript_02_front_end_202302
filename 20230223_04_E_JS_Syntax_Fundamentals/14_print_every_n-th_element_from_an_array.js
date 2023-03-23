// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 14 - Print Every N-th Element From An Array  - judge: https://judge.softuni.org/Contests/Compete/Index/3786#13


function printEveryNthElement(arr, number) {
    let result = [];
    for (let i = 0; i < arr.length; i += number) {
        result.push(arr[i]);
    }
    console.log(result);
    console.log(result.join(' '));                                  // different output format
    console.log(result.join('\n'));                                 // different output format
}


printEveryNthElement(['5', '20', '31', '4', '20'], 2);
printEveryNthElement(['dsa', 'asd', 'test', 'tset'], 2);
printEveryNthElement(['1', '2', '3', '4', '5'], 6);
