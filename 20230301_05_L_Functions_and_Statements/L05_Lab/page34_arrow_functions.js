// 20230301 - JavaScript Front-End 202302 - JS Functions and Statements
// Page 34 - Arrow Functions


/*

First-class functions are treated like any other variable
    -> Special shorthand syntax for declaration
    -> They operate in the context of their enclosing scope
    -> Useful in functional programming

*/


// ------------------------------------------------------------------------------------------


console.log('\n __________ Normal function __________ ex. 1 ____________________________ \n')


let increment = function(x) {
    return x + 1;
}
console.log(increment(10));


console.log('\n __________ Arrow function of the same function from ex. 1 _____ ex. 2 __ \n')


let incrementSHort = x => x + 1;
console.log(incrementSHort(10));


// ------------------------------------------------------------------------------------------


console.log('\n __________ ex. 3 _______________________________________________________ \n')


let sum = (a, b) => a + b;
console.log(sum(5, 16));
