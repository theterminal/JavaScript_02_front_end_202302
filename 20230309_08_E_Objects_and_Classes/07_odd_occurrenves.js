// 20230309 - JavaScript Front-End 202302 - Objects and Classes - Exercises
// 07 - Odd Occurrences - judge: https://judge.softuni.org/Contests/Compete/Index/3792#6


function oddOccurrences(inputString) {
    let inputToLowerCaseAndSplit = inputString.toLowerCase().split(' ');         // [ 'java', 'c#', 'java', 'php', '3', 'c#' ]
    let objWords = {};                                                           // {}
    
    for (const word of inputToLowerCaseAndSplit) {                               // iterating through the array
        if (objWords[word]) {                                                    // if the pair exists in the object 'objWords', its value...
            objWords[word]++;                                                    // ... is increased by 1
        } else {                                                                 // if the pair does NOT exists in the object 'objWords', its value...
            objWords[word] = 1;                                                  // ...  is set to 1                 
        }
    }                                                                            // objWords = { '3': 1, java: 2, 'c#': 2, php: 1 }
                                                                                 
    let result = [];                                                             // new array to convert the object 'objWords' into an array 'result'

    for (const key in objWords) {                                                // iterating trough the object 'objWords'
        if (objWords[key] % 2!== 0) {                                            // if the 'value' of the 'key' is an even number...
            result.push(key);                                                    // ... push the key (just the key) into the new array 'result'
        }
    }

    console.log(result.join(' '));                                               // consol.log the result joined by a space
}


console.log('\n ______________ test 11 _______________ \n');
oddOccurrences('Java C# Java PhP 3 C#');


console.log('\n ______________ test 12 _______________ \n');
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');


console.log('\n ______________ test 13 _______________ \n');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
