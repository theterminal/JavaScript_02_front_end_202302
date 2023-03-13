// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Problem 12 - Reverse an Array of Numbers - judge: https://judge.softuni.org/Contests/Practice/Index/3785#10


function reverseAnArrayOfNumbers(n, inputArray) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(inputArray[i]);
    }

    reversed = '';
    for (let i = newArr.length - 1; i >= 0; i--) {
        reversed += `${newArr[i]} `;
    }

    console.log(reversed);
}


reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);