// 20230307 - JavaScript Front-End 202302 - Objects and Classes
// 05 - Convert To JSON - judge: https://judge.softuni.org/Contests/Practice/Index/3791#4


function convertToJSON(firstName, lastName, hairColor) {
    let objFromParams = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }

    let jsonFromObj = JSON.stringify(objFromParams);
    console.log(jsonFromObj);
}


console.log('\n _______ test 01 ________ \n');
convertToJSON('George', 'Jones', 'Brown');

console.log('\n _______ test 02 ________ \n');
convertToJSON('Peter', 'Smith', 'Blond');
