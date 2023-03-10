// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Manipulating Strings
// Problem: Count String Occurrences


// Receive a text and a word that you need to search
// Find the number of all occurrences of that word and print it

function solve(text, search) {
    let words = text.split(' ');
    let counter = 0;

    for (let w of words) {
        if (w === search) {
            counter++;
        }
    }

    console.log(counter);
}

solve("This is a word and it also is a sentence", "is");