// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 01 - Ages - judge: https://judge.softuni.org/Contests/Compete/Index/3786#0


function ages(age) {
    let result;
    if (age < 0) {
        result = 'out of bounds';
    } else if (age >= 0 && age <= 2) {
        result = 'baby';
    } else if (age >= 3 && age <= 13) {
        result = 'child';
    } else if (age >= 14 && age <= 19) {
        result = 'teenager';
    } else if (age >= 20 && age <= 65) {
        result = 'adult';
    } else if (age >= 66) {
        result = 'elder';
    }

    console.log(result);
}


ages(20);                                       // adult
ages(1);                                        // baby
ages(100);                                      // elder
ages(-1);                                       // out of bounds
