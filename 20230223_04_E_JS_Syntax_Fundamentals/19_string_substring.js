// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 19 - String Substring - judge: https://judge.softuni.org/Contests/Compete/Index/3786#18


function stringSubstring(word, text) {
    let wordsArray = text
        .split(' ')
        .map(element => element.toLowerCase());
        
    let flag = false;

    wordsArray.forEach(element => {
        if (element === word.toLowerCase()) {
            flag = true;
        }
    });

    if (flag) {
        console.log(word);
    } else {
        console.log(`${word} not found!`)
    }
}


stringSubstring('javascript','JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');
