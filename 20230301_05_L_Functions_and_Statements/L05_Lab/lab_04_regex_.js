// 20230302 - JavaScript Front-End 202302 - JS Functions and Statements - Exercise
// 06 - Password Validator - judge: https://judge.softuni.org/Contests/Compete/Index/3789#5


// ______________ 2 ________________


let text2 = 'Password must be between 6 and 10 characters';
let regex2 = /\d+/g;                                              // \d - gives one digit; \d+ finds all digits of a number;
let execution2 = regex2.exec(text2);

console.log(regex2.test(text2));                                  // .test - returns true or false
console.log([...text2.matchAll(regex2)][0]);


// ______________ 1 ________________


let text = 'Password must be between 6 and 10 characters';
let regex = /\d+/g;                                              // \d - gives one digit; \d+ finds all digits of a number;
let execution = regex.exec(text);

while (execution !== null) {
    let value = execution[0];
    console.log(value);
    execution = regex.exec(text);
}
