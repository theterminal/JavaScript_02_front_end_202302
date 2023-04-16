// 20230402 - Sorting numbers and sorting strings

// if sorting numbers syntax is:
//          (a, b) => (a - b) - for ascending order
//          (a, b) => (b - a) - for descending order

// if sorting strings syntax is:
//          (a, b) => (a.localeCompare(b))  - for ascending order
//          (a, b) => (b.localeCompare(a))  - for descending order


console.log(
    '\n _______ ex. 01 _______ Sorting ascending alphabetically by the \'name\' property _______ \n'
);


let arr1 = [                                                        // an array of objects
    {
        name: 'Superwoman',
        level: 20
    },
    {
        name: 'Batman',
        level: 10
    },
    {
        name: 'Catman',
        level: 7
    },
    {
        name: 'Catman',
        level: 3
    },
    {
        name: 'Superman',
        level: 20
    },
    {
        name: 'Wonder Woman',
        level: 30
    }
]

let sortedArr1 = arr1
    .sort((a, b) => {
        let result = a.name.localeCompare(b.name);                             // sorts by 'name' (ascending)
        return result;
    });


console.log(sortedArr1);


// the result is:

/*

[
  { name: 'Batman', level: 10 },
  { name: 'Catman', level: 7 },
  { name: 'Catman', level: 3 },
  { name: 'Superman', level: 20 },
  { name: 'Superwoman', level: 20 },
  { name: 'Wonder Woman', level: 30 }
]

*/


console.log(
    '\n _______ ex. 02 _______ Sorting ascending alphabetically by the \'name\' property, if equal, those are sorted ascending by \'level\' value \n'
);


let arr2 = [                                                        // an array of objects
    {
        name: 'Superwoman',
        level: 20
    },
    {
        name: 'Batman',
        level: 10
    },
    {
        name: 'Catman',
        level: 7
    },
    {
        name: 'Catman',
        level: 3
    },
    {
        name: 'Superman',
        level: 20
    },
    {
        name: 'Wonder Woman',
        level: 30
    }
]

let sortedArr2 = arr1
    .sort((a, b) => {
        let result = a.name.localeCompare(b.name);                             // sorts by 'name' (ascending)

        if (result === 0) {                                                    // if 'name' is equal ...
            result = a.level - b.level;                                        // ... sorts by 'level' (ascending) those that are equal by 'name'
        }
        return result;
    });


console.log(sortedArr2);


// the result is:

/*

[
  { name: 'Batman', level: 10 },
  { name: 'Catman', level: 3 },
  { name: 'Catman', level: 7 },
  { name: 'Superman', level: 20 },
  { name: 'Superwoman', level: 20 },
  { name: 'Wonder Woman', level: 30 }
]

*/



console.log(
    '\n _______ ex. 03 _______ Ascending sort by \'level\' value, if equal, those are sorted alphabetically ascending by \'name\' _______ \n'
);


let arr = [                                                           // an array of objects
    {
        name: 'Batman',
        level: 99
    },
    {
        name: 'Superwoman',
        level: 20
    },
    {
        name: 'Superman',
        level: 20
    },
    {
        name: 'Wonder Woman',
        level: 30
    },
    {
        name: 'Kiril',
        level: 12
    },
    {
        name: 'Kiril',
        level: 11
    }

]

let sortedArr = arr
    .sort((a, b) => {
        let result = a.level - b.level;                             // ascending sort by the value of 'level'

        if (result === 0) {                                         // if 'level' values are equal then...
            result = a.name.localeCompare(b.name);                  // ... it sorts ascending by the 'name' property
        }

        return result;
    });


console.log(sortedArr);

// the result is:

/*

[
  { name: 'Kiril', level: 11 },
  { name: 'Kiril', level: 12 },
  { name: 'Superman', level: 20 },
  { name: 'Superwoman', level: 20 },
  { name: 'Wonder Woman', level: 30 },
  { name: 'Batman', level: 99 }
]

*/
