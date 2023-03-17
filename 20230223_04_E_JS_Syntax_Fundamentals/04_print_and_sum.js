// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 04 - Print and Sum - judge: https://judge.softuni.org/Contests/Compete/Index/3786#3


function printAndSum(start, end) {
    let total = 0;
    let result = [];
    
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            total += i;
            result += `${i} `;
        }
    } else {
        console.log(`The range is flipped!`)
    }

    console.log(result);
    console.log(`Sum: ${total}`);
}


printAndSum(5, 10);                                     // 5 6 7 8 9 10
                                                        // Sum: 45

printAndSum(0, 26);                                     // 0 1 2 … 26
                                                        // Sum: 351

printAndSum(50, 60);                                    // 50 51 52 53 54 55 56 57 58 59 60
                                                        // Sum: 605            