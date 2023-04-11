// JavaScript
// 'do ... while' loop - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement


// The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false.
// The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.


// In the following example, the do...while loop iterates at least once and reiterates until i is no longer less than 5.


let result = "";
let i = 0;

do {
  i += 1;
  result += `${i} `;
} while (i > 0 && i < 5);

// Despite i === 0 this will still loop as it starts off without the test

console.log(result);
