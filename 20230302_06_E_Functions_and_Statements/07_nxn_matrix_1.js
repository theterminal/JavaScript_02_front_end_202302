// 20230302 - JavaScript Front-End 202302 - JS Functions and Statements - Exercise
// 07 - NxN Matrix - judge: https://judge.softuni.org/Contests/Compete/Index/3789#6


function nxnMatrix(number) {
    let matrixRow = [];

    for (let row = 0; row < number; row++) {
        for (let col = 0; col < number; col++) {
            matrixRow.push(number);
        }
        console.log(matrixRow.join(' '));
        matrixRow = [];
    }
}

nxnMatrix(3);
nxnMatrix(7);
nxnMatrix(2);
