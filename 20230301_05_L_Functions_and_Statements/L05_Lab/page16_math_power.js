// 20230301 - JavaScript Front-End 202302 - JS Functions and Statements
// Page 16 - Math Power


// _______________ version 1 _________________


function mathPower(number, power) {
    console.log(Math.pow(number, power));
}


mathPower(2, 8);
mathPower(3, 4);


// _______________ version 2 _________________


function manualMathPower(number, power) {
    let result = 1;

    for (let i = 0; i < power; i++) {
        result *= number;
    }

    console.log(result);
}


manualMathPower(2, 8);
manualMathPower(3, 4);
