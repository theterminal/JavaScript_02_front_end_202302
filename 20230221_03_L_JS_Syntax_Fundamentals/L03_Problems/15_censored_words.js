// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Problem 15 - Censored Words - judge: https://judge.softuni.org/Contests/Practice/Index/3785#14


function censoredWords(text, word) {
    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }
    console.log(text);
}

censoredWords('A small sentence with some words', 'small');                             // A ***** sentence with some words
censoredWords('Find the hidden word', 'hidden');                                        // Find the ****** word
