// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Problem 16 - Count String Occurrences - judge: https://judge.softuni.org/Contests/Practice/Index/3785#15


// _____________ version 1 _____________ using 'for' loop


function countStringOccurrences(text, word) {
    let wordsArr = text.split(' ');
    let counter = 0;

    for (let i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i] === word) {
            counter++;
        }
        
    }

    console.log(counter);
}


countStringOccurrences('This is a word and it also is a sentence', 'is');                                   // 2
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');         // 1


// ____________ version 2 _____________ using 'for-of' loop


function countStringOccurrences(text, word) {
    let wordsArr = text.split(' ');
    let counter = 0;

    for (const wrd of wordsArr) {
        if (wrd === word) {
            counter++;
        }
    }
    console.log(counter);
}

countStringOccurrences('This is a word and it also is a sentence', 'is');                                   // 2
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');         // 1
