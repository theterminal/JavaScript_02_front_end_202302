// 20230302 - JavaScript Front-End 202302 - JS Functions and Statements - Exercise
// 07 - NxN Matrix - judge: https://judge.softuni.org/Contests/Compete/Index/3789#6


function nxnMatrix(n) {
    let a = new Array(n)
        .fill(new Array(n).fill(n))
        .forEach(row => console.log(row.join(' ')));
}


nxnMatrix(3);
nxnMatrix(7);
nxnMatrix(2);
