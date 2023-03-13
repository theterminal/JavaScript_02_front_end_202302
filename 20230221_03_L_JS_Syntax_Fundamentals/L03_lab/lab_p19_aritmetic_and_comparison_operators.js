// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Arithmetic Operators


// ____________ Arithmetic Operators ______________


let a = 15;
let b = 5;
let c;

c = a + b;
console.log(c);

c = a - b;
console.log(c);

c = a * b;
console.log(c);

c = a / b;
console.log(c);

c = a % b;
console.log(c);

c = ~~(a / b);
console.log(c);                                         // 3  (Integer division in JS using Bitwise Operator Method. Can use floor() or trunc() methods.)

c = a ** b;
console.log(c);


// ____________ Comparison Operators _______________


console.log(1 == '1');         // true
console.log(1 === '1');        // false

console.log(3 != '3');         // false
console.log(3 !== '3');        // true

console.log(5 < 5.5);          // true
console.log(5 <= 4);           // false
console.log(2 > 1.5);          // true
console.log(2 >= 2);           // true

console.log((5 > 7) ? 4 : 10); // 10  (ternary operator)

/*
The conditional (ternary) operator is the only JavaScript operator that takes three operands:
a condition followed by a question mark (?),
then an expression to execute if the condition is truthy followed by a colon (:),
and finally the expression to execute if the condition is falsy.

This operator is frequently used as an alternative to an if...else statement.
*/
