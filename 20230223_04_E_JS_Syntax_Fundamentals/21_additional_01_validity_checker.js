// 20230224 - JavaScript Front-End 202302 - JS Syntax Fundamentals - More Exercise
// More Exercise - 01 - Validity Checker - judge: https://judge.softuni.org/Contests/Practice/Index/3787#0


function validityChecker(x1, y1, x2, y2) {
    const validate1 = Math.sqrt((x1 ** 2) + (y1 ** 2));
    if (Number.isInteger(validate1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    const validate2 = Math.sqrt((x2 ** 2) + (y2 ** 2));
    if (Number.isInteger(validate2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    const validate3 = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
    if (Number.isInteger(validate3)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
