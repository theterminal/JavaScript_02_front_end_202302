// 20230314 - JavaScript Front-End - DOM and Events - Lab
// 01 - Sum Numbers - judge: https://judge.softuni.org/Contests/Practice/Index/3794#0


function calc() {
    const inputNum1 = Number(document.getElementById('num1').value);
    const inputNum2 = Number(document.getElementById('num2').value);
    const inputSum = document.getElementById('sum');

    inputSum.value = inputNum1 + inputNum2;
}


// _______________ longer version ______________ to use must change the function name to calc


function calc2() {
    const inputNum1 = document.getElementById('num1');
    const inputNum2 = document.getElementById('num2');
    const inputSum = document.getElementById('sum');

    let numOne = Number(inputNum1.value);
    let numTwo = Number(inputNum2.value);
    let sum = numOne + numTwo;

    inputSum.value = sum;
}