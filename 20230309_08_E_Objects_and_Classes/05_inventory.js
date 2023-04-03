// 20230309 - JavaScript Front-End 202302 - Objects and Classes - Exercises
// 05 - Inventory - judge: https://judge.softuni.org/Contests/Compete/Index/3792#4


function inventory(input) {
    let heroes = [];

    for (const line of input) {                             // Derek / 12 / BarrelVest, DestructionSword                                

        let splitLine = line.split(' / ');                  // [ 'Derek', '12', 'BarrelVest, DestructionSword' ]                     
        let name = splitLine.shift();                       // Derek
        let level = splitLine.shift();                      // 12
        let items = splitLine.shift();                      // BarrelVest, DestructionSword

        heroes.push({name: name, level: level, items: items});
    }

    // let sortedHeroes = heroes
    //     .sort((heroA, heroB) => {
    //         return heroA.level - heroB.level
    //     });

    let sortedHeroes = heroes.sort((heroA, heroB) => (heroA.level - heroB.level));

    for (const {name, level, items} of sortedHeroes) {
        console.log(`Hero: ${name}\nlevel => ${level}\nitems => ${items}`);
    }
}


inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
