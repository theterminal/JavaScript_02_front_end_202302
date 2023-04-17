// 20230309 - JavaScript Front-End 202302 - Objects and Classes - Exercises
// 09 - Make a Dictionary - judge: https://judge.softuni.org/Contests/Compete/Index/3792#8


function dictionaryFromJSON(inputJSON) {
    let obj = {};

    for (const line of inputJSON) {
        let objLine = JSON.parse(line);
        let key = Object.keys(objLine);

        obj[key] = objLine[key];
    }

    let sortedArr = Object.entries(obj)
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (const [k, v] of sortedArr) {
        console.log(`Term: ${k} => Definition: ${v}`);
    }
}


dictionaryFromJSON([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);
