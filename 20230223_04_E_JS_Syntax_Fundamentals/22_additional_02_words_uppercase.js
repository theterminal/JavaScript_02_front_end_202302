// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - More Exercise
// More Exercise 02 - Words Uppercase - judge: https://judge.softuni.org/Contests/Practice/Index/3787#1


// _________________ judge: 66% _________________


function wordsUpperCase(string) {
    const pattern = /[^\W\d_]+/gmi;
    let result= string.match(pattern);                       // returns an array with elements matching the pattern
    result = result.map((x) => x.toUpperCase());
    return result.join(', ');    
}


console.log(wordsUpperCase('Hi, how are you?'));
console.log(wordsUpperCase('hello'));

// - one way of the regEx           /[^\W\d_]+/gmi
// - another way to regEx           /[A-Za-z]+/gm
