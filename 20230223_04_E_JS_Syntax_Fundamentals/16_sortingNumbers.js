// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 16 - Sorting Numbers - judge: https://judge.softuni.org/Contests/Compete/Index/3786#15


function sortingNumbers(numArray) {
    let sortedNumArr = [...numArray].sort((a, b) => {
        let result = a - b;
        return result;
    });

    let finalArray = [];

    for (let i = 0; i < numArray.length; i += 2) {
        first = sortedNumArr.shift();
        last = sortedNumArr.pop();
        finalArray.push(first);
        finalArray.push(last);
    }
    console.log(finalArray);

}


sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
