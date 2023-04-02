// 20230307 - JavaScript Front-End 202302 - Objects and Classes
// Page 06 - Objects, Creating an object


// Objects are the main structure in JavaScript language. Objects are an associative arrays containing 'key: value' pairs, called 'property'.
// The object keys should primarily be strings.
// The functions in the objects are called methods.
// The values of the keys can be anything including functions.
// If attempt is made to access non existing property it returns 'undefined' not an error.


console.log('\n __________ ex. 01 __________ creating an object ____________________________________________ \n');


let person = {};                                                    // creating an empty object
console.log(typeof(person));                                        // object

person.name = 'Jerry';                                              // adding properties after the object is created
person.age = 20;                                                    // adding property 'age = 20'
person['height cm'] = 233;                                          // another syntax used when the name contain space or -
person.grades = [5, 6, 4];                                          // adding an array as a value to a key

console.log(person);                                                // { name: 'Jerry', age: 20, height: 233 }
console.log(person['height cm']);                                   // use this syntax when a space or - is in the key


console.log('\n __________ ex. 02 __________ adding an object as a value to a key within an object __________ \n');


let person2 = {name: 'Kiril', info: {email: 'karil@gmail.com', tel: 234234234}};
console.log(person2.info.email);


console.log('\n __________ ex. 03 __________ adding function (method) to an object __________________________ \n');


let person4 = {
    name: 'Kiril',
    sayHello: function() {return `Hello ${this.name}, from within the object!`;}
}

console.log(person4.sayHello());
