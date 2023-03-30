// 20230301 - JavaScript Front-End 202302 - JS Functions and Statements
// Recursion


function printNumbersFromNto0(number) {
    console.log(number);
    
    if (number > 0) {
        printNumbersFromNto0(number - 1);
    }
}

printNumbersFromNto0(10);
