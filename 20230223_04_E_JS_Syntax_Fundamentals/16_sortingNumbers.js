// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 16 - Sorting Numbers - judge: https://judge.softuni.org/Contests/Compete/Index/3786#15


// _____________ version 2 _______________


function sortingNumbers2(numArray) {
    let sorted = [...numArray].sort((a, b) => a - b);
    let step = 0;
    let result = [];

    while (sorted.length > 0) {
        if (step % 2 === 0) {
            result.push(sorted.shift());
        } else {
            result.push(sorted.pop());
        }
        step++;
    }
    return result;
}


console.log(sortingNumbers2([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));


// _____________ version 1 _______________


function sortingNumbers(numArray) {
    
    let sortedNumArr = [...numArray].sort((a, b) => a - b);                       // [...numArray]        - it makes a copy of 'numArray'
    let finalArray = [];

    for (let i = 0; i < numArray.length; i += 2) {
        first = sortedNumArr.shift();
        last = sortedNumArr.pop();
        finalArray.push(first);
        finalArray.push(last);
    }
    return finalArray;
}


console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));


// _____________ version 3 _______________ declaring sorting function outside main function 


function sortNum23(a, b) {
    return a - b;
}

function sortingNumbers3(numArray) {
    let sortedNumArr = [...numArray].sort(sortNum23);
    let finalArray = [];

    for (let i = 0; i < numArray.length; i += 2) {
        first = sortedNumArr.shift();
        last = sortedNumArr.pop();
        finalArray.push(first);
        finalArray.push(last);
    }
    return finalArray;
}


console.log(sortingNumbers3([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));


// _____________ version 4 _______________ declaring sorting function inside main function 


function sortingNumbers4(numArray) {
    function sortingAscending(a, b) {
        return a - b;
    }

    let sortedNumArr = [...numArray].sort(sortingAscending);
    let finalArray = [];

    for (let i = 0; i < numArray.length; i += 2) {
        first = sortedNumArr.shift();
        last = sortedNumArr.pop();
        finalArray.push(first);
        finalArray.push(last);
    }

    return finalArray;
}


console.log(sortingNumbers4([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
