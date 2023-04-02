// 20230307 - JavaScript Front-End 202302 - Objects and Classes
// 08 - Address Book - judge: https://judge.softuni.org/Contests/Practice/Index/3791#7


// ___________________ version 2 ________________________________



function addressBook(input) {
    let addressBookMap = {};

    for (const line of input) {                                         // 'forof' loop converting an array to an object 
        let [name, address] = line.split(':');                          // with 'name' as a key and 'address' as a value
        addressBookMap[name] = address;
    }

    let sortedNames = Object.keys(addressBookMap)                       // 'sortedNames' is an object which contains
        .sort((nameA, nameB) => nameA.localeCompare(nameB));            // sorted data from the object 'addressBookMap'

    for (const name of sortedNames) {
        console.log(`${name} -> ${addressBookMap[name]}`);
    }
}


console.log('\n _____________ test 21 _____________ \n')
addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);


console.log('\n _____________ test 22 _____________ \n')
addressBook([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
])


// // ___________________ version 1 ________________________________


// function addressBook(stringArray) {
//     let objectAddressBook = {};

//     for (const element of stringArray) {
//         let [name, address] = element.split(':');
//         objectAddressBook[name] = address;
//     }

//     let entries = Object.entries(objectAddressBook);
//     let sortedByName = entries.sort((personA, personB) => {
//         let personAName = personA[0];
//         let personBName = personB[0];
//         return personAName.localeCompare(personBName);
//     })

//     for (const [name, address] of sortedByName) {
//         console.log(`${name} -> ${address}`);
//     }

// }


// console.log('\n _____________ test 11 _____________ \n')
// addressBook([
//     'Tim:Doe Crossing',
//     'Bill:Nelson Place',
//     'Peter:Carlyle Ave',
//     'Bill:Ornery Rd'
// ]);


// console.log('\n _____________ test 12 _____________ \n')
// addressBook([
//     'Bob:Huxley Rd',
//     'John:Milwaukee Crossing',
//     'Peter:Fordem Ave',
//     'Bob:Redwing Ave',
//     'George:Mesta Crossing',
//     'Ted:Gateway Way',
//     'Bill:Gateway Way',
//     'John:Grover Rd',
//     'Peter:Huxley Rd',
//     'Jeff:Gateway Way',
//     'Jeff:Huxley Rd'
// ])
