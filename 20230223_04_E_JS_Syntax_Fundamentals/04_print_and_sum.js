// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 04 - Print and Sum - judge: https://judge.softuni.org/Contests/Compete/Index/3786#3


// __________________ version 1 ______ using concatenation ______


function printAndSum(start, end) {
    let total = 0;
    let result = [];
    
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            total += i;
            result += `${i} `;
        }
    } else {
        console.log(`The range is flipped!`)
    }

    console.log(result.trim());
    console.log(`Sum: ${total}`);
}


printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);


// __________________ version 2 _____ using join() method _____


function printAndSum2(start2, end2) {
    let total2 = 0;
    let result2 = [];
    
    if (start2 <= end2) {
        for (let i = start2; i <= end2; i++) {
            result2.push(i);
            total2 += i;
        }
    } else {
        console.log(`The range is flipped!`)
    }

    console.log(result2.join(' '));
    console.log(`Sum: ${total2}`);
}


printAndSum2(5, 10);
printAndSum2(0, 26);
printAndSum2(50, 60);
