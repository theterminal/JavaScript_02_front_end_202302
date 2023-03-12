// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Manipulating Strings
// Problem - Censored Words - page 62


// Receives a text and a single word.
// Find all occurrences of that word in the text and replace them with the corresponding amount of '*'

function solve(text, word) {
  while(text.includes(word)) {
    text = text.replace(word, '*'.repeat(word.length));
  }
  console.log(text);
}

solve("A small sentence with small people and small words", "small");
