// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 15 - List of Names - judge: https://judge.softuni.org/Contests/Compete/Index/3786#14


// ___________ version 3 ___________ judge 100%;


function listOfNames3(nameArr) {
    return [...nameArr]
        .sort((a, b) => a.localeCompare(b))                                 // it sorts tha array Ascending
        .map((nam, index) => `${index + 1}.${nam}`)                         // adds the number in front of each element
        .join('\n');                                                        // joins elements by a new line 
}


console.log(
    listOfNames3(["John", "Bob", "Christina", "Ema"])
    );


// ___________ version 2 ___________ judge 100%;


function listOfNames2(nameArr) {
    let sortedNameArray = [...nameArr].sort((a, b) => {
        let result = a.localeCompare(b);
        return result;
    });

    for (i = 0; i < sortedNameArray.length; i++) {
        console.log(`${i + 1}.${sortedNameArray[i]}`);
    }
}


listOfNames2(["John", "Bob", "Christina", "Ema"]);


// ___________ version 1 ___________ judge 80%;


function listOfNames1(namesArr) {
    namesArr.sort();
    for (let i = 0; i < namesArr.length; i++) {
        console.log(`${i + 1}.${namesArr[i]}`);
    }
}


listOfNames1(["John", "Bob", "Christina", "Ema"]);
