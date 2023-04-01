// 20230307 - JavaScript Front-End 202302 - Objects and Classes
// 01 - Person Info - judge: https://judge.softuni.org/Contests/Practice/Index/3791#0


// ____________ version 2 ______________


function createObject2(firstName, lastName, age) {
    let person = {firstName, lastName, age};                                // short syntax when parameter and the key are the same,
                                                                            // JS automatically assigns the value to that key. 
    return person;
}


console.log(createObject("Peter", "Pan", "20"));


// ____________ version 1 ______________


function createObject(param1, param2, param3) {
    let person = {firstName: param1, lastName: param2, age: param3};
 
    return person;
}


console.log(createObject("Peter", "Pan", "20"));
