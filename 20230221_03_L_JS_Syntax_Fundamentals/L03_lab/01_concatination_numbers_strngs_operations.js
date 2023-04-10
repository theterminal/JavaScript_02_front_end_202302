// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals


console.log('\n __________ Concatenating string and a number. NOT a good idea. __________ \n');


let num = 1;
let person = 'Kiril';

let result = num + person;
console.log(result);                        // 1Kiril

result = person + num;
console.log(result);                        // Kiril1

result = person - num;
console.log(result);                        // NaN (It is a type of number or signals that something is NOT a number.)

result = person * num;
console.log(result);                        // NaN (It is a type of number or signals that something is NOT a number.)


console.log('\n __________ Arrays and Objects. Arrays are objects in JS ________________ \n');


let arr = [];
let obj = {};
let isLoading = true;

console.log(typeof arr);                    // object
console.log(typeof obj);                    // object
console.log(typeof isLoading);              // boolean


console.log('\n __________ Arithmetic operations _______________________________________ \n');


let num2 = 2;
let num3 = 3;

let exp = num2 ** num3;
console.log(exp);                           // 8


console.log('\n __________ Comparison operations _______________________________________ \n');


console.log(1 == '1');                      // true             (checks the values)
console.log(1 === '1');                     // false            (checks not only the value but compares the types of data also)

console.log(1 != '1');                      // false
console.log(1 !== '1');                     // true

console.log(num2 >= 0 && num2 <= 100);      // true             (comparison operator AND)
console.log(num2 >= 0 || num2 <= 100);      // true             (comparison operator OR)


console.log('\n __________ Ternary operator __________ condition ? result if true : result if false __________ \n');


let result2 = num2 >= 0 && num2 <= 100 ? "In between" : "Not in between";        // ternary operator (standard syntax)
console.log(result2);                                                            // In between

let result3 = num3 >= 0 && num3 <= -1                                            // ternary operator (better syntax)
? 'In between'
: 'Not in between';

console.log(result3);                                                            // Not in between


console.log('\n __________ Number Min Safe Integer and Number Max Safe Integer ______________________________ \n');


let minSafeInteger = Number.MIN_SAFE_INTEGER;
let maxSafeInteger = Number.MAX_SAFE_INTEGER;

console.log(minSafeInteger);                                                    // -9007199254740991  (-9'007'199'254'740'991)
console.log(maxSafeInteger);                                                    // 9007199254740991   ( 9'007'199'254'740'991)


console.log('\n ________ operation ~~(a / b) _________ \n');


// The “double tilde” (~~) operator is a double NOT Bitwise operator. Use it as a substitute for Math. floor(), since it's faster


console.log(~~(4 / 3));                                                         // 1
console.log(~~4 / 3);                                                           // 1
console.log(~~4 / 3.0);                                                         // 1.0
console.log(~~4 / 3.00);                                                        // 1.0
console.log(~~4 / 3.000);                                                       // 1.00
console.log(~~4 / 3.0000);                                                      // 1.000
