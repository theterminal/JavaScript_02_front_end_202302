// 20230301 - JavaScript Front-End 202302 - JS Functions and Statements
// 06 - Sign Check - judge: https://judge.softuni.org/Contests/Practice/Index/3788#5


// ____________ version 2 ______________


function signCheck2(...numbers) {
    return numbers
        .filter((num) => num < 0)
        .length % 2 === 0 ? 'Positive' : 'Negative';
}


console.log(signCheck2( 5, 12, -15));
console.log(signCheck2( -6, -12, 14));
console.log(signCheck2( -1, -2, -3));
console.log(signCheck2( -5, 1, 1));


// ____________ version 1 ______________


function signCheck(num1, num2, num3) {
    let result = '';

    if (num1 < 0 && num2 < 0 && num3 < 0) {
        result = 'Negative';
    } else if (num1 < 0 && num2 < 0 && num3 > 0) {
        result = 'Positive';
    } else if (num1 < 0 && num2 > 0 && num3 > 0) {
        result = 'Negative';
    } else if (num1 > 0 && num2 < 0 && num3 < 0) {
        result = 'Positive';
    } else if (num1 > 0 && num2 < 0 && num3 > 0) {
        result = 'Negative';
    } else if (num1 > 0 && num2 > 0 && num3 < 0) {
        result = 'Negative';
    } else if (num1 > 0 && num2 > 0 && num3 > 0) {
        result = 'Positive';
    }

    console.log(result);
}

signCheck( 5, 12, -15);
signCheck( -6, -12, 14);
signCheck( -1, -2, -3);
signCheck( -5, 1, 1);
