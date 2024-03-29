// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 20 - Pascal Case Splitter - judge: https://judge.softuni.org/Contests/Compete/Index/3786#19


// _________________ version 2 ____________________


function pascalCaseSplitter2(string) {
    console.log(string
        .split(/(?=[A-Z])/)                                             // splits the string by the upper case letters
        .join(", "));                                                 // joins by ', ' all the array elements
}


pascalCaseSplitter2('SplitMeIfYouCanHaHaYouCantOrYouCan');


// _________________ version 1 ____________________


function pascalCaseSplitter(string) {
    let wordsArrayIndex = [];

    for (let i = 0; i < string.length; i++) {
        let code = string[i].charCodeAt(0);

        if (code >= 65 && code <= 90) {
            wordsArrayIndex.push(i);                                        // stores all indexes of all uppercase characters from string
        }
    }

    let wordsArray = [];                                                    // will store all words for the result

    for (let j = 0; j < wordsArrayIndex.length; j++) {
        wordsArray.push(string.substring(wordsArrayIndex[j], wordsArrayIndex[j + 1]));  // pushes all words between the given indexes
    }
    
    console.log(wordsArray.join(', '));
}


pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
