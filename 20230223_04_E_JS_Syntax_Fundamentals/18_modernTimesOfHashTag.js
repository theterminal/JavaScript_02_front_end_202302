// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 18 - Modern Times of # (HashTag) - judge: https://judge.softuni.org/Contests/Compete/Index/3786#17


function modernTimesOfHashTag(string) {
    wordsArray = string.split(' ');

    for (let i = 0; i < wordsArray.length; i++) {                                               // one rotation for every word
        let flag = false;
        if (wordsArray[i][0] === '#' && wordsArray[i].length > 1) {                             // if word starts with # and length > 1
            let potentialWinner = wordsArray[i].substr(1, wordsArray[i].length - 1);
            
            for (let j = 0; j < potentialWinner.length; j++) {                                  // 'potentialWinner' is the current word. 1 rotation for each symbol
                
                let code = potentialWinner[j].charCodeAt(0);
                    
                if ((code < 65 || code > 122) || (code > 90 && code < 97)) {
                    flag = true;
                    break;
                }
            }

            if (flag) {
                continue;
            } else {
                console.log(potentialWinner);
            }
        }
    }
}


modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');


// chars (A - Z) have codes from 65 to 90
// chars (a - z) have codes from 97 to 122
