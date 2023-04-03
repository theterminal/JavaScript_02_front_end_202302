// 20230309 - JavaScript Front-End 202302 - Objects and Classes - Exercises
// 01 - Employees - judge: https://judge.softuni.org/Contests/Compete/Index/3792#0


// _________________ version 3 ________________ using reduce()


function employees3(input) {
    let objEmployee = input.reduce((data, employee) => {
        data[employee] = employee.length;
        return data; 
    }, {});

    for (const key in objEmployee) {
        console.log(`Name: ${key} -- Personal Number: ${objEmployee[key]}`);
    }
}


console.log('\n ____________ test 31 ______________ \n')
employees3([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);


console.log('\n ____________ test 32 ______________ \n')
employees3([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]);


// // _________________ version 2 ________________


// function employees2(input) {
//     let objEmployees = {};

//     for (const employee of input) {
//         objEmployees[employee] = employee.length;
//     }

//     for (const key in objEmployees) {
//         console.log(`Name: ${key} -- Personal Number: ${objEmployees[key]}`);
//     }
// }


// console.log('\n ____________ test 21 ______________ \n')
// employees2([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
//     ]);


// console.log('\n ____________ test 22 ______________ \n')
// employees2([
//     'Samuel Jackson',
//     'Will Smith',
//     'Bruce Willis',
//     'Tom Holland'
//     ]);


// // _________________ version 1 ________________


// function employees(nameStringArray) {
//     let objectEmployees = {};

//     nameStringArray.forEach((x) => objectEmployees[x] = x.length);

//     let pair = Object.entries(objectEmployees);                                 // object -> array ('pair' is an array)
//     for (const [name, number] of pair) {
//         console.log(`Name: ${name} -- Personal Number: ${number}`);
//     }
// }


// console.log('\n ____________ test 11 ______________ \n')
// employees([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
//     ]);


// console.log('\n ____________ test 12 ______________ \n')
// employees([
//     'Samuel Jackson',
//     'Will Smith',
//     'Bruce Willis',
//     'Tom Holland'
//     ]);
