// 20230301 - JavaScript Front-End 202302 - JS Functions and Statements
// Page 30 - First Class Functions


/*

First-class functions are treated like any other variable
    -> Passed as an argument (to another function)
    -> Returned by another function
    -> Assigned as a value to a variable


"The term "first-class" means that something is just a value.
A first-class function is one that can go anywhere that any other value can go - there are few to no restrictions."
                                                by Michael Fogus, Functional Javascript

*/


// ------------------------------------------------------------------------------------------


console.log('\n __________ Functions passed as an argument to another function __________ \n')


// ____________________ ex. 1 ________________________


function sayHello1() {
    return 'Hello, from example 1 to ';
}
function greeting1(string) {                                      // sayHello1() is hardcoded into 'greeting1()'            - not the best idea
    return sayHello1() + string;
}


console.log(
    greeting1('Peter')
);


// ____________________ ex. 2 ________________________


function sayHello() {
    return 'Hello, from example 2 to ';
}
function greeting(func, string) {                               // sayHello() is NOT hardcoded into 'greeting()             - better this way
    return func() + string;
}


console.log(
    greeting(sayHello, "JavaScript!")                   // Hello, JavaScript!
);


// ------------------------------------------------------------------------------------


console.log('\n __________ Functions can be returned by another function __________ \n')


function justSayHello() {
    return function() {
        console.log('Hello from a function returned as a result of another function!');
    }
}


console.log(
    justSayHello()
);


// ------------------------------------------------------------------------------------


console.log('\n ______ Functions can be assigned as a value to a variable ________ \n')


const write = function () {                                                                         // When assigning the function to a variable no () are used
    return "Hello, world!";
}


console.log(write());                                                                               // Hello, world!      - When calling the function must have the ()


// ------------------------------------------------------------------------------------