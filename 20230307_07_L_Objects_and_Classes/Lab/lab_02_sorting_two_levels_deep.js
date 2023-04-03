// 20230402 - Sorting numbers and sorting strings

// if sorting numbers: syntax is (a, b) => (a - b) for ascending order and (a, b) => (b - 1) for descending order
// if sorting strings: syntax is (a, b) => (a.localeCompare(b)) for ascending order and (a, b)) => (b.localeCompare(a)) for descending order


let heroes = [
    {
        name: 'Batman',
        level: 10
    },{
        name: 'Superman',
        level: 20
    },{
        name: 'Wonder Woman',
        level: 30
    }
]

let sortedHeroes = heroes
    .sort((heroA, heroB) => {
        let result = heroA.level - heroB.level;                             // sorts by level (ascending) if they are the same sorts by name

        if (result === 0) {
            result = heroA.name.localeCompare(heroB.name);                  // sorts by name (ascending) if the levels are the same
        }

        return result;
    });


console.log(sortedHeroes);
