// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - More Exercise
// More Exercise 06 - Login - judge: https://judge.softuni.org/Contests/Practice/Index/3787#5


// _______________ version 02 _______________


function login(input){
    counter = 0;

    const userId = input[0];
    
    for (let j = 0; j < input.length; j++) {
        counter++;
        
        if (userId.split('').reverse().join('') === input[j + 1]) {
            console.log(`User ${userId} logged in.`);
            break;
        }

        if (counter === 4) {
            console.log(`User ${userId} blocked!`);
            break;
        }

        console.log('Incorrect password. Try again.');
    }
}


login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);


// _______________ version 01 _______________


function login(input){
    counter = 0;

    outerLoop: for (let i = 0; i < input.length; i++) {
        innerLoop: for (let j = 0; j < input.length; j++) {
            counter++;
            
            if (input[i].split('').reverse().join('') === input[j + 1]) {
                console.log(`User ${input[i]} logged in.`);
                break outerLoop;
            }

            if (counter === 4) {
                console.log(`User ${input[i]} blocked!`);
                break outerLoop;
            }
            console.log('Incorrect password. Try again.');
        }
    }
}


login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);
