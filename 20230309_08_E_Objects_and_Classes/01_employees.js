// 20230309 - JavaScript Front-End 202302 - Objects and Classes - Exercises
// 01 - Employees - judge: https://judge.softuni.org/Contests/Compete/Index/3792#0


function employees(nameArray) {
    let objectEmployees = {};

    nameArray.forEach((x) => objectEmployees[x] = x.length);

    let pair = Object.entries(objectEmployees);                                 // object -> array ('pair' is an array)

    for (const [name, number] of pair) {
        console.log(`Name: ${name} -- Personal Number: ${number}`);
    }
}


console.log('\n ____________ test 11 ______________ \n')
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);


console.log('\n ____________ test 12 ______________ \n')
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]);
