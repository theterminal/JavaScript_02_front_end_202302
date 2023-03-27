// 20230301 - JavaScript Front-End 202302 - JS Functions and Statements
// Page 14 - Format Grade


function formatGrade(grade) {
    if (grade < 3) {
        console.log(`Fail (2)`);                                   // That is how the conditions are given!
    } else if (grade < 3.50) {
        console.log(`Poor ${grade}`);
    } else if (grade < 4.50) {
        console.log(`Good ${grade}`);
    } else if (grade < 5.50) {
        console.log(`Very good ${grade}`);
    } else {
        console.log(`Excellent ${grade}`);
    }
}


formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);
