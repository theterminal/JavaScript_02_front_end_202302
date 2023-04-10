// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 19 - String Substring - judge: https://judge.softuni.org/Contests/Compete/Index/3786#18


console.log('\n _____________ version 3 ________________ \n');


function stringSubstring4(word, text) {
    return text.toLowerCase()
        .split(' ')
        .some((w) => w === word.toLowerCase()) ? word : `${word} not found!`;
}


console.log(stringSubstring4('javascript','JavaScript is the best programming language'));
console.log(stringSubstring4('python', 'JavaScript is the best programming language'));


console.log('\n _____________ version 2 ________________ judge 80% \n');


function stringSubstring2(word, text) {
    let wordLowerCase = word.toLowerCase();
    let textLowerCase = text.toLowerCase();

    if (textLowerCase.includes(wordLowerCase)) {
        return word;
    }
    return `${word} not found!`;
}


console.log(stringSubstring2('javascript','JavaScript is the best programming language'));
console.log(stringSubstring2('python', 'JavaScript is the best programming language'));


console.log('\n _____________ version 1 ________________ \n');


function stringSubstring(word, text) {
    let wordToLowerCase = word.toLowerCase();
    let flag = false;

    let wordsArray = text
        .split(' ')
        .map(element => element.toLowerCase());                        // ex.1 - [ 'javascript', 'is', 'the', 'best', 'programming', 'language' ]

    wordsArray.forEach(element => {
        if (element === wordToLowerCase) {
            console.log(element);
            flag = true;
        }
    });

    if (flag) {
        return;
    }
    console.log(`${word} not found!`);
}


stringSubstring('javascript','JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');
