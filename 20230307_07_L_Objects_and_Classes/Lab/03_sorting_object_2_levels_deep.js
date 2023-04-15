// 20230402 - Sorting numbers and sorting strings

// if sorting numbers: syntax is (a, b) => (a - b) for ascending order and (a, b) => (b - 1) for descending order
// if sorting strings: syntax is (a, b) => (a.localeCompare(b)) for ascending order and (a, b)) => (b.localeCompare(a)) for descending order


let heroes = [                                                            // an array of objects
    {
        name: 'Batman',
        level: 10
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
    }
]

let sortedHeroes = heroes
    .sort((a, b) => {
        let result = a.level - b.level;                             // sorts by level (ascending)

        if (result === 0) {                                         // if levels are equal then sorts by ascending by name
            result = a.name.localeCompare(b.name);                  // sorts by name (ascending) if the levels are the same
        }

        return result;
    });


console.log(sortedHeroes);

// the result is:

/*

[
  { name: 'Batman', level: 10 },
  { name: 'Superman', level: 20 },
  { name: 'Superwoman', level: 20 },
  { name: 'Wonder Woman', level: 30 }
]

*/
