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


console.log('\n _______________ test 11 _______________ \n');
dictionaryFromJSON([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);


console.log('\n _______________ test 12 _______________ \n');
dictionaryFromJSON([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
])
