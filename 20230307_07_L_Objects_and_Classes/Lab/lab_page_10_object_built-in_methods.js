// 20230307 - JavaScript Front-End 202302 - Objects and Classes
// Page 10 - Object built-in methods 


console.log('\n __________ .keys() .values() .entries() __________ \n');


let person = {name: 'Jerry', age: 123, height: 203};

console.log(Object.keys(person));                               // result is an array: [ 'name', 'age', 'height' ]
console.log(Object.values(person));                             // result is an array: [ 'Jerry', 123, 203 ]
console.log(Object.entries(person));                            // result is an array: [ [ 'name', 'Jerry' ], [ 'age', 123 ], [ 'height', 203 ] ]


console.log('\n __________ method delete ________________________________________________ \n');


delete person.age;                                              // this way a property can be deleted
console.log(person);                                            // { name: 'Jerry', height: 203 }


console.log('\n __________ iterating through all the keys of the object with .keys() ______________________ \n');


let cat = {name: 'Tony', age: 11, color: 'black', weight: 8};

const catKeys = Object.keys(cat);
for (const key of catKeys) {
    console.log(key);                                           // name, age, color, weight     - one key per loop
}


console.log('\n __________ iterating through all properties of the object using .keys() ___________________ \n');


let dog = {name: 'Tony', age: 13, color: 'red', weight: 18};

const dogKeys = Object.keys(dog);
for (const key of dogKeys) {
    console.log(`${key}: ${dog[key]}`);                                     // name: Tony       - one pair (property) per iteration of the loop
}


console.log('\n __________ iterating through all properties of the object using .entries() ___________________ \n');


let bull = {name: 'Terry', age: 103, color: 'white', weight: 1118};

const bullPairs = Object.entries(bull);
for (const pair of bullPairs) {
    console.log(pair);                                     // name: Tony       - one pair (property) per iteration of the loop
    console.log(`${pair}`)
    console.log(`${pair[0]} : ${pair[1]}\n`)
}


console.log('\n __________ iterating through the object data using forOf() __________________________________ \n');


let person10 = {name: 'John', age: 23, color: 'black'};

const tuples = Object.entries(person10);
for (const [key, value] of tuples) {
    console.log(`${key} : ${value}`);
}


console.log('\n __________ iterating through the object data using forEach() ________________________________ \n');


let person11 = {name: 'John', age: 23, color: 'black'};

const tuples11 = Object.entries(person11)
    .forEach(([key, value]) => console.log(key, value));
