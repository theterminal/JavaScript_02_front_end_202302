// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Problem 11 - Sum First and Last Array Elements - judge: https://judge.softuni.org/Contests/Practice/Index/3785#10


// ________________ version 2 _______________


function sumFirstAndLastArrayEl(numbersArr) {
    console.log(numbersArr.shift() + numbersArr.pop());
}


sumFirstAndLastArrayEl([20, 30, 40]);
sumFirstAndLastArrayEl([10, 17, 22, 33]);
sumFirstAndLastArrayEl([11, 58, 69]);


// ________________ version 1 _______________


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
