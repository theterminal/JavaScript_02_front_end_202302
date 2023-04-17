// 20230309 - JavaScript Front-End 202302 - Objects and Classes - Exercises
// 06 - Words Tracker - judge: https://judge.softuni.org/Contests/Compete/Index/3792#5


function wordsTracker2(input) {
    // taking the first element (the words to search for) out of the array, splitting them into an array or words.
    let searchFor = input.shift().split(' ');
    let wordsFound = {};

    for (const word of searchFor) {                                                       // the loop count = to the word count of 'searchFor'
        let filteredWordsCount = input.filter((w) => w === word).length;                  // .filter() runs through all the words in the 'input' array
        wordsFound[word] = filteredWordsCount;                                            // it enters the word as 'key' and the count as 'value'
    }

    // _________ version 01 _________ to use uncomment it and comment version 2           // Use version 1 or version 2
    let sortedWords = Object.entries(wordsFound).sort((a, b) => b[1] - a[1]);             // [ [ 'this', 3 ], [ 'sentence', 2 ] ]  - tuples of data to sort


    // _________ version 02 _________ to use uncomment it and comment version 1           // Use version 1 or version 2
    // let sortedWords = Object.entries(wordsFound)
    //     .sort((a, b) => {
    //         let [nameA, countA] = a;
    //         let [nameB, countB] = b;
    //         return countB - countA;
    //     });

    // showing the result
    for (const [word, count] of sortedWords) {                                            // destructuring the tuples into variables
        console.log(`${word} - ${count}`);
    }
}


console.log('\n _______________ test 11 ________________ \n')
wordsTracker2([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);


console.log('\n _______________ test 12 ________________ \n')
wordsTracker2([
    'is the', 'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);


// _________________ version 01 _______________ judge 60% __________________ 


function wordsTracker(inputArray) {
    // taking the first element (the words to search for) out of the array, splitting them into an array or words.
    let searchFor = inputArray.shift().split(' ');
    let wordsFound = {};

    // looping through each word in the searchFor array.
    for (let i = 0; i < searchFor.length; i++) {

        // looping through each word in the modified inputArray.
        for (let j = 0; j < inputArray.length; j++) {

            // if the word is the same as the searchFor word, add 1 to the number of times that word is found.
            if (inputArray[j] === searchFor[i]) {
                if (wordsFound[searchFor[i]]) {
                    wordsFound[searchFor[i]]++;
                    continue;
                }
                wordsFound[searchFor[i]] = 1;
            }
        }  
    }
    
    // moving the words from an object to an array and sorting them in descending order by the number times each word appears.
    let sortedWords = [];

    for (const key in wordsFound) {
        sortedWords.push([key, wordsFound[key]]);
    }
    sortedWords.sort((a, b) => b[1] - a[1]);

    // showing the result to the console
    for (const element of sortedWords){
        console.log(`${element[0]} - ${element[1]}`);
    }
}


console.log('\n _______________ test 21 ________________ \n')
wordsTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);


console.log('\n _______________ test 22 ________________ \n')
wordsTracker([
    'is the', 'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);
