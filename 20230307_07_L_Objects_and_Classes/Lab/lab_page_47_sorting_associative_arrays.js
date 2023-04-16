// 20230307 - JavaScript Front-End 202302 - Objects and Classes
// Page 47 - Sorting Associative Arrays 


console.log('\n __________________ sorting by ASCENDING by email ________________________________ \n');


let people1 = {
    'Kiril': {age: 25, email: 'kiril@gmail.com'},
    'Peter': {age: 29, email: 'peter@gmail.com'},
    'George': {age: 45, email: 'george@gmail.com'}
};

let entries1 = Object.entries(people1);

let sortedByName1 = entries1
    .sort((personA, personB) => {
        let personAEmail = personA[1].email;
        let personBEmail = personB[1].email;
        
        return personAEmail.localeCompare(personBEmail);
    })

for (const [name, info] of sortedByName1) {
    console.log(name);
    console.log(info);
}


console.log('\n __________________ sorting DESCENDING by name ___________________________________ \n');


let people2 = {
    'Kiril': {age: 25, email: 'kiril@gmail.com'},
    'Peter': {age: 29, email: 'peter@gmail.com'},
    'George': {age: 45, email: 'george@gmail.com'}
};

let entries2 = Object.entries(people2);

let sortedByName2 = entries2
    .sort((personA, personB) => {
        let personAName = personA[0];
        let personBName = personB[0];
        return personBName.localeCompare(personAName);
    })

for (const [name, info] of sortedByName2) {
    console.log(name);
    console.log(info);
}


console.log('\n _______________ iterating trough the Associative Array using \'for in\' loop _______________ \n');


let assArr = {'name': 'John', 'color': 'blue'};                 // 'assArr' - example of Associative Array

for (const key in assArr) {                                     // iterating through the keys in 'assArr'
     console.log(key, assArr[key]);                             // printing the 'key value' pairs of the Associative Array 'assArr'
    }


console.log('\n Sorting an Associative array by the \'key\' without having a specific title of the property!!! \n')


function addressBook(input) {
    let addressBookMap = {};

    for (const line of input) {                                         // 'for ... of' loop converting an array to an object 
        let [name, address] = line.split(':');                          // with 'name' as a key and 'address' as a value
        addressBookMap[name] = address;
    }

    let sortedNames = Object.keys(addressBookMap)                       // 'sortedNames' is an array of the KEYS only, of the 'addressBookMap'...
        .sort((nameA, nameB) => nameA.localeCompare(nameB));            // ... sorted alphabetically in ascending order

    for (const name of sortedNames) {                                   // using already sorted names in 'sortedNames'...
        console.log(`${name} -> ${addressBookMap[name]}`);              // ... to print 'name' -> 'address' pairs from 'addressBookMap'
    }
}


console.log('\n _____________ test 21 _____________ \n')
addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);
