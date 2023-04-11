// JavaScript
// 'while' loop - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement


/*

The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

*/


let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
  console.log(`n = ${n}`);
  console.log(`x = ${x}`);
}
