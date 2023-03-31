// 20230302 - JavaScript Front-End 202302 - JS Functions and Statements - Exercise
// 09 - Loading Bar - judge: https://judge.softuni.org/Contests/Compete/Index/3789#8


function loadingBar(number) {
    if (number === 100) {
        console.log('100% Complete!\n[%%%%%%%%%%]');
    } else {
        let graphic = '';

        for (let i = 0; i < 10; i++) {
            if (i < number / 10) {
                graphic += '%';
                continue;
            }
            graphic += '.';
        }
        console.log(`${number}% [${graphic}]\nStill loading...`);
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);
