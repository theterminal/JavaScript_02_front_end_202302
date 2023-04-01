// 20230302 - JavaScript Front-End 202302 - JS Functions and Statements - Exercise
// 06 - Password Validator - judge: https://judge.softuni.org/Contests/Compete/Index/3789#5


function passwordValidator(password) {
    const isValidLength = (pass) => pass.length >= 6 && pass.length <= 10;
    const hasOnlyLettersAndDigits = (pass) => /^[A-Za-z0-9]+$/g.test(pass);           // ^ - begging of a string; $ - end of a string;
    const containsMinTwoDigits = (pass) => [...pass.matchAll(/\d/g)].length >= 2;

    let passIsValid = true;

    if (!isValidLength(password)) {
        console.log('Password must be between 6 and 10 characters');
        passIsValid = false;
    }

    if (!hasOnlyLettersAndDigits(password)) {
        console.log('Password must consist only of letters and digits');
        passIsValid = false;
    }

    if (!containsMinTwoDigits(password)) {
        console.log('Password must have at least 2 digits');
        passIsValid = false;
    }

    if (passIsValid) {
        console.log('Password is valid');
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');
