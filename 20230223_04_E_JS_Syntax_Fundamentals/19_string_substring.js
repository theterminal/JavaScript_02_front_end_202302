// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 19 - String Substring - judge: https://judge.softuni.org/Contests/Compete/Index/3786#18


// _____________ version 4 ________________


function stringSubstring4(word, text) {
    return text.toLowerCase()
        .split(' ')
        .some((w) => w === word.toLowerCase()) ? word : `${word} not found!`;
}


console.log(stringSubstring4('javascript','JavaScript is the best programming language'));
console.log(stringSubstring4('python', 'JavaScript is the best programming language'));


// _____________ version 3 ________________ judge 80%


function stringSubstring3(word, text) {
    let wordLowerCase = word.toLowerCase();
    let textLowerCase = text.toLowerCase();

    if (textLowerCase.includes(wordLowerCase)) {
        return word;
    }
    return `${word} not found!`;
}


console.log(
    stringSubstring3('javascript','JavaScript is the best programming language')
    );

console.log(
    stringSubstring3('python', 'JavaScript is the best programming language')
);


// _____________ version 2 ________________


function stringSubstring2(word, text) {
    let wordsArray = text
        .split(' ')
        .map(element => element.toLowerCase());

    wordsArray.forEach(element => {
        if (element === word.toLowerCase()) {
            return word;
        }
    });
    return `${word} not found!`;
}


console.log(stringSubstring2('javascript','JavaScript is the best programming language'));
console.log(stringSubstring2('python', 'JavaScript is the best programming language'));


// _____________ version 1 ________________


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
