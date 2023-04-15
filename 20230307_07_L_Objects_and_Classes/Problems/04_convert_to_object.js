// 20230307 - JavaScript Front-End 202302 - Objects and Classes
// 04 - Convert To Object - judge: https://judge.softuni.org/Contests/Practice/Index/3791#3


function convertJSONtoObject(jsonString) {
    let objFromJSON = JSON.parse(jsonString);

    let keys = Object.keys(objFromJSON);
    for (const key of keys) {
        console.log(`${key}: ${objFromJSON[key]}`);
    }
}


console.log('\n _______ test 01 ________ \n');
convertJSONtoObject('{"name": "George", "age": 40, "town": "Sofia"}');

console.log('\n _______ test 02 ________ \n');
convertJSONtoObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
