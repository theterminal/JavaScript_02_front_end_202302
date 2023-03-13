// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Problem 11 - Sum First and Last Array Elements - judge: https://judge.softuni.org/Contests/Practice/Index/3785#10


function sumFirstAndLastArrayElements(numbersArr) {
    let result;
    let elFirst = numbersArr[0];
    let elLast = numbersArr[numbersArr.length - 1];
    
    result = elFirst + elLast;
    console.log(result);
}


sumFirstAndLastArrayElements([20, 30, 40]);
sumFirstAndLastArrayElements([10, 17, 22, 33]);
sumFirstAndLastArrayElements([11, 58, 69]);
