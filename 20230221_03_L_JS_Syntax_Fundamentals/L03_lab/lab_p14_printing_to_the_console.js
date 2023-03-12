// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Printing to the Console


// ____________ We use the console.log() method to print to console:


function solve_1(name, grade) {
    console.log('The name is: ' +  name + ', grade: ' + grade);
}

solve_1('Peter', 3.555);


// ____________ Text can be composed easier using interpolated strings:


function solve_2(name, grade) {
    console.log(`The name is: ${name}, grade: ${grade}`);
}

solve_2('Peter', 3.555);


// ____________ To format a number, use the toFixed() method (converts to string):


function solve_3(name, grade) {
    console.log(`The name is: ${name}, grade: ${grade.toFixed(2)}`); // it'll round the result and will convert it to string
}

solve_3('Peter', 3.555);
