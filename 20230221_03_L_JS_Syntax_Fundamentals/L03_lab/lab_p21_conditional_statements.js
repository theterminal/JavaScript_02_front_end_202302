// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Conditional Statements


// ____________ Simple Conditional Statement ______________


console.log(`_________ example 1 __________`);

let a = 100;
if (a >= 100) {
    console.log(`'a' is > or = to 5`);
}


console.log(`_________ example 2 __________`);

let b = 5;
if (b >= 5) {
    console.log(`'b' is > or = to 5`);
} else {
    console.log(`'b' is < than 5`);
}


// ____________ Chained Conditional Statement ______________


console.log(`_________ example 3 __________`);

let c = 5;
if (c > 10) {
  console.log("Bigger than 10");
} else if (c < 10) {
  console.log("Less than 10");
} else { 
  console.log("Equal to 10");
}


// ____________ check if a variable is undefined _____________

let variableUndefined;
if (variableUndefined) {
  console.log(`${variableUndefined} - It is NOT undefined`);
} else {
  console.log(`${variableUndefined} - It is undefined`);                  // undefined - It is undefined
}


let variableUndefined2 = 10;
if (variableUndefined2) {
  console.log(`${variableUndefined2} - It is NOT undefined`);             // 10 - It is NOT undefined
} else {
  console.log(`${variableUndefined2} - It is undefined`);
}

// false, 0, -0, "", undefined, null, NaN - are falsy values! 
