function calc() {
    // TODO: sum = num1 + num2
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const sumInput = document.getElementById('sum');

    let numOne = Number(num1Input.value);
    let numTwo = Number(num2Input.value);
    let sum = numOne + numTwo;

    sumInput.value = sum;
}
