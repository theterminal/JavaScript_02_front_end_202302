// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Problem 08 - Circle Area - judge: https://judge.softuni.org/Contests/Practice/Index/3785#7


function circleArea(entered) {
    let result;
    let typeOfEntered = typeof(entered);
    
    if (typeOfEntered == 'number') {
        console.log((entered ** 2 * Math.PI).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfEntered}.`)
    }
}

circleArea(5);
circleArea('name');