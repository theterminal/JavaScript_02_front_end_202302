// 20230303 - JavaScript Front-End 202302 - JS Functions and Statements - More Exercise
// More Exercises 05 - Print DNA - judge: https://judge.softuni.org/Contests/Practice/Index/3790#4


function printDNA(input) {
    const arrElements = ['AT', 'CG', 'TT', 'AG', 'GG'];
    let result = '';

    for (let i = 0; i < input; i++) {
        let index = returnPattern(i).indexOf('K');
        
        if (i < 5) {
            currentEl = i;
        } else {
            currentEl = i % 5;
        }

        if (index === 0) {
            result += `${arrElements[currentEl][0]}----${arrElements[currentEl][1]}\n`;
        } else if (index === 1) {
            result += `*${arrElements[currentEl][0]}--${arrElements[currentEl][1]}*\n`;
        } else if (index === 2) {
            result += `**${arrElements[currentEl][0]}${arrElements[currentEl][1]}**\n`;
        }
    }
    console.log(result);

    function returnPattern(number) {
        const objPattern = {0: '**KK**', 1: '*K--K*', 2: 'K----K', 3: '*K--K*'};
        if (number > 3) {
            return objPattern[number % 4];
        } else {
            return objPattern[number];
        }
    }
}


printDNA(1);
printDNA(2);
printDNA(3);
printDNA(4);
printDNA(10);
