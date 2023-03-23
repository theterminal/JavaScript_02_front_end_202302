// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 12 - Cooking by Numbers  - judge: https://judge.softuni.org/Contests/Compete/Index/3786#11


console.log('\n_______________ version 1 _______________\n');


function cookingByNumbers(number, ...operations) {
    number = Number(number);

    for (let i = 0; i < operations.length; i++) {
        let operation = operations[i];

        switch (operation) {
            case 'chop': number /= 2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number += 1; break;
            case 'bake': number *= 3; break;
            case 'fillet': number *= 0.8; break;
        }
        console.log(number);
    }
}

console.log('\n_________ test_1 _________\n');
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');

console.log('\n_________ test_2 _________\n');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');


console.log('\n_______________ version 2 _______________\n');


function cookingByNumbersV2(numberAsString, ...operations) {
    let number = Number(numberAsString);

    operations.forEach((operation) => {
        switch (operation) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number += 3;
                break;
            case 'fillet':
                number *= 0.8;
                break;
        }
        console.log(number);
    })
}


console.log('\n_________ test_1 _________\n');
cookingByNumbersV2('32', 'chop', 'chop', 'chop', 'chop', 'chop');

console.log('\n_________ test_2 _________\n');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');