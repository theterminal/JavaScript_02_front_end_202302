// 20230316 - JavaScript Front-End - DOM and Events - Exercise
// 01 - Subtraction - judge: https://judge.softuni.org/Contests/Practice/Index/3795#0


// ___________ version 01 ______________


function subtract() {
    const inputField1 = document.getElementById('firstNumber');
    const inputField2 = document.getElementById('secondNumber');
    
    let diff = inputField1.value - inputField2.value;

    const result = document.getElementById('result');
    result.textContent = diff;
}


// ___________ version 02 ______________


// function subtract() {
//     let num1 = document.getElementById('firstNumber').value;
//     let num2 = document.getElementById('secondNumber').value;

//     let diff = num1 - num2;

//     let result = document.getElementById('result');
//     result.textContent = diff;
// }