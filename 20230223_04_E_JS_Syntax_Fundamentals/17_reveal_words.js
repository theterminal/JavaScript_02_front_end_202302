// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 17 - Reveal Words - judge: https://judge.softuni.org/Contests/Compete/Index/3786#16


function revealWords(words, template) {
    let wordsArray = words.split(', ');
    let counter = 0;
    
    for (let i = 0; i <= template.length; i++) {
        if (template[i] === '*') {
            counter++;
        } else {
            if (counter === 0) {
                continue;
            } else {
                wordsArray.forEach(element => {
                    if (element.length === counter) {
                        let stringToUse = '';

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
