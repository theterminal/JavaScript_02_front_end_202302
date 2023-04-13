// 20230303 - JavaScript Front-End 202302 - JS Functions and Statements - More Exercise
// More Exercises 03 - Points Validation - judge: https://judge.softuni.org/Contests/Practice/Index/3790#2


function validityChecker(input) {
	let [x1, y1, x2, y2] = input;
	
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

validityChecker([3, 0, 0, 4]);
validityChecker([2, 1, 1, 1]);
