// 20230302 - JavaScript Front-End 202302 - JS Functions and Statements - Exercise
// 06 - Password Validator - judge: https://judge.softuni.org/Contests/Compete/Index/3789#5


function passwordValidator(password) {
    let flag = false;

    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        flag = true;
    }

    if (onlyLettersAndNumbers(password) === false) {
        console.log('Password must consist only of letters and digits');
        flag = true;
    }

    if (atLeastTwoDigits(password) === false) {
        console.log('Password must have at least 2 digits');
        flag = true;
    }

    if (!flag) {
        console.log('Password is valid');
    }

    function onlyLettersAndNumbers(str) {
        return /^[A-Za-z0-9]*$/.test(str);
    }

    function atLeastTwoDigits(str) {
        return /(\D*\d){2,}/.test(str);
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');
