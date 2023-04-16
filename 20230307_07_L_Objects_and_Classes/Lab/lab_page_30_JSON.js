// 20230307 - JavaScript Front-End 202302 - Objects and Classes
// Page 30 - JSON 


// Cannot have functions in JSON format


// _______________ converting Object to JSON String _____________


function convertObjectToJSON(firstName, lastName, hairColor) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        hairColor: hairColor
    }

    let jsonPerson = JSON.stringify(person);

    console.log(person);                                        // object 'person' was created from the input information
    console.log(jsonPerson);                                    // this JSON string was created from the object 'person'
}


convertObjectToJSON('George', 'Jones', 'Brown');


// _______________ converting JSON string to Object _______________


function convertJSONStringToObject(json) {
    let object = JSON.parse(json);
    let entires = Object.entries(object);

    for (const [key, value] of entires) {
        console.log(`${key}: ${value}`);
    }
}


convertJSONStringToObject('{"name": "George", "age": 40, "town": "Sofia"}');
