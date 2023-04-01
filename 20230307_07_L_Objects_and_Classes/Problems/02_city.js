// 20230307 - JavaScript Front-End 202302 - Objects and Classes
// 02 - City - judge: https://judge.softuni.org/Contests/Practice/Index/3791#1


// _______________ version 2 ___________________


function city2(cityInfo) {
    let keysValues = Object.entries(cityInfo);

    for (const [key, value] of keysValues) {
        console.log(`${key} -> ${value}`);
    }
}


console.log('\n ___________ Example 21 ___________ \n')
city2({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});


console.log('\n ___________ Example 22 ___________ \n')
city2({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})


// _______________ version 1 ___________________


function city1(objectCity) {
    
    for (const key of Object.keys(objectCity)) {
        console.log(`${key} -> ${objectCity[key]}`);
    }
}


console.log('\n ___________ Example 11 ___________ \n')
city1({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});


console.log('\n ___________ Example 12 ___________ \n')
city1({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})