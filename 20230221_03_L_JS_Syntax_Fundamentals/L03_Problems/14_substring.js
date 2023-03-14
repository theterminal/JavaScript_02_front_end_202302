// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Problem 14 - Substring - judge: https://judge.softuni.org/Contests/Practice/Index/3785#13


function substring(string, startIndex, count) {
    let result;

    result = string.substr(startIndex, count);

    console.log(result);
}


substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);