// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 17 - Reveal Words - judge: https://judge.softuni.org/Contests/Compete/Index/3786#16


function revealWords(words, template) {
    let wordsArray = words.split(', ');
    let counter = 0;
    
    for (let i = 0; i <= template.length; i++) {                                    // if 'i <= template.length' does NOT include '=', the loop will never go to the last element and if the word to replace is located at the end of the string then it will skip the replacement part of the loop and the program will not complete correctly.
        if (template[i] === '*') {
            counter++;
        } else {
            if (counter === 0) {
                continue;
            } else {
                wordsArray.forEach(element => {
                    if (element.length === counter) {
                        stringToUse = '';

                        for (let j = 0; j < counter; j++) {
                            stringToUse += '*';
                        }
        
                        template = template.replace(stringToUse, element);
                    }
                });
                counter = 0;
            }
        }
    }
    return template;
}


console.log(revealWords('great', 'Internet is a ***** environment for learning new programming languages'));
console.log(revealWords('great, learning', 'Internet is a ***** environment for ******** new programming languages'));
