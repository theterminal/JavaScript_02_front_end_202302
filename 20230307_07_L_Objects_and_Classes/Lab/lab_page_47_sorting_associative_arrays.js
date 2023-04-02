// 20230307 - JavaScript Front-End 202302 - Objects and Classes
// Page 47 - Sorting Associative Arrays 


// __________________ sorting by email ________________________________


let people = {
    'Kiril': {age: 25, email: 'kiril@gmail.com'},
    'Peter': {age: 29, email: 'peter@gmail.com'},
    'George': {age: 45, email: 'george@gmail.com'}
};

let entries = Object.entries(people);

let sortedByName = entries.sort((personA, personB) => {
    let personAEmail = personA[1].email;
    let personBEmail = personB[1].email;
    return personAEmail.localeCompare(personBEmail);
})

for (const [name, info] of sortedByName) {
    console.log(name);
    console.log(info);
}


// __________________ sorting by name ________________________________


// let people = {
//     'Kiril': {age: 25, email: 'kiril@gmail.com'},
//     'Peter': {age: 29, email: 'peter@gmail.com'},
//     'George': {age: 45, email: 'george@gmail.com'}
// };

// let entries = Object.entries(people);

// let sortedByName = entries.sort((personA, personB) => {
//     let personAName = personA[0];
//     let personBName = personB[0];
//     return personAName.localeCompare(personBName);
// })

// for (const [name, info] of sortedByName) {
//     console.log(name);
//     console.log(info);
// }
