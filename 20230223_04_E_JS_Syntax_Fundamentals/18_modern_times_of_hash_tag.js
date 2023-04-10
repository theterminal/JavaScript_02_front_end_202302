// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 18 - Modern Times of # (HashTag) - judge: https://judge.softuni.org/Contests/Compete/Index/3786#17


console.log('\n ______________ version 4 _______________ regEx version _______________ \n');


function modernTimes4(text) {
    let words = text.split(' ')
        .filter((word) => word.startsWith('#') && word.length > 1 && /^#[A-z]*$/.test(word));               // ex.1 - [ '#special', '#socialMedia' ]
    
    let result = [];

    for (const word of words) {
        result.push(word.slice(1));        
    }

    return result.join('\n');
}


console.log(modernTimes4('Nowadays everyone uses # to tag a #special word in #socialMedia'));
console.log(modernTimes4('The symbol # is known #variously in English-speaking #regions as the #number sign'));


console.log('\n _______________ version 3 _______________ \n');


function modernTimes3(text) {
    return text.split(' ')                                                               // creates an array of words
        .filter((word) => word.startsWith('#') && containsOnlyLetters(word.slice(1)))    // filters words starting with '#', sends each to containsOnlyLetters()
        .map((word) => word.slice(1))                                                    // takes the word from index 1 to end
        .filter((word) => word !== '')                                                   // filters words that are empty ''
        .join('\n');                                                                     // joins the words by '\n'
}

function containsOnlyLetters(word) {                               // special              - receives the word from the function modernTimes3() 
    return [...word.toLowerCase()]                                 // ['#', 's', 'p', 'e', 'c', 'i', 'a', 'l']     - word to an array and toLowerCase()
        .slice(1)                                                  // ['s', 'p', 'e', 'c', 'i', 'a', 'l']          - trims the first symbol
        .map((symbol) => symbol.charCodeAt(0))                     // [115, 112, 101, 99, 105, 97, 108]            - converts symbols to ascii codes
        .every((charCode) => charCode >= 97 && charCode <= 122);   // true                 - checks to see the range and returns true or false
}


console.log(modernTimes3('Nowadays everyone uses # to tag a #special word in #socialMedia'));
console.log(modernTimes3('The symbol # is known #variously in English-speaking #regions as the #number sign'));


console.log('\n _______________ version 2 __________________ \n');


function modernTimes(text) {
    let words = text.split(' ');
    let result = [];

    for (const word of words) {
         if (word.startsWith('#') && word.length > 1 && checkIfWordIsValid(word)) {
            result.push(word.slice(1));
         }
    }

    console.log(result.join('\n'));

    function checkIfWordIsValid(myWord) {
        let myWordLowerCase = myWord.toLowerCase().slice(1);
        let isValid = true;

        for (const symbol of myWordLowerCase) {
            let asciiSymbol = symbol.charCodeAt(0);

            if (!(asciiSymbol >= 97 && asciiSymbol <= 122)) {
                isValid = false;
                break;
            }
        }

        return isValid;
    }
}


modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');


console.log('\n _______________ version 1 __________________ \n');


function modernTimesOfHashTag(string) {
    wordsArray = string.split(' ');

    for (let i = 0; i < wordsArray.length; i++) {                                               // one rotation for every word
        let flag = false;

        if (wordsArray[i][0] === '#' && wordsArray[i].length > 1) {                             // if word starts with # and length > 1
            let potentialWinner = wordsArray[i].substring(1, wordsArray[i].length);
            
            for (let j = 0; j < potentialWinner.length; j++) {           // 'potentialWinner' is the current word. 1 rotation for each symbol
                let code = potentialWinner[j].charCodeAt(0);
                    
                if ((code < 65 || code > 122) || (code > 90 && code < 97)) {
                    flag = true;
                    break;
                }
            }

            if (flag) {
                continue;
            }
            console.log(potentialWinner);
        }
    }
}


modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');


// chars (A - Z) have codes from 65 to 90
// chars (a - z) have codes from 97 to 122
