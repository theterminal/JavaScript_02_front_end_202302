// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// RegEx in JS


console.log('\n ___________________________ ex. 1 _______________________________________ \n');


let pattern1 = /A-Za-z{0,}/;
console.log(pattern1.test('Kiril'));                                 // false


console.log('\n ___________________________ ex. 2 _______________________________________ \n');


let pattern2 = /\#\w+/;
console.log(pattern2.test('example'));                               // false


let pattern21 = /\#\w+/;
console.log(pattern21.test('#example'));                             // true


console.log('\n ___________________________ ex. 3 _______________________________________ \n');


let pattern3 = /\k\w+/;
console.log(pattern3.test('#example'));                              // false


console.log('\n ___________________________ ex. 4 _______________________________________ \n');


let pattern4 = /\#[A-Za-z]+/;
console.log(pattern4.test('Kiril'));                                 // false


console.log('\n ___________________________ ex. 5 _______________________________________ \n');


let pattern5 = /\#[A-Za-z]+/;
console.log(pattern5.test('#Kiril'));                                // true


console.log('\n ___________________________ ex. 6 _______________________________________ \n');


let pattern6 = /\#[A-Za-z]+$/;
console.log(pattern6.test('#Kiril'));                                // true


let pattern61 = /\#[A-Za-z]+$/;
console.log(pattern61.test('#Ki4ril'));                              // false


console.log('\n ___________________________ ex. 7 _______________________________________ \n');


console.log('#special'.matchAll(/\#[A-Za-z]+$/g));                   // 'g' must be included in the expression! That returns an iterator
console.log([...'#special'.matchAll(/\#[A-Za-z]+$/g)]);              // now it is an array
console.log([...'#special'.matchAll(/\#[A-Za-z]+$/g)][0]);           // now it returns the first element of the array
