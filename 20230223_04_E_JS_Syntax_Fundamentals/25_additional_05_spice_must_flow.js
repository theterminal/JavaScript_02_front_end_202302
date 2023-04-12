// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - More Exercise
// More Exercise 05 - Spice Must Flow - judge: https://judge.softuni.org/Contests/Practice/Index/3787#4


function spiceMustFlow(startingYield) {
    let daysOperated = 0;
    const workersConsumed = 26;
    const finalConsumption = 26;
    let totalYield = 0;
    let currentYield = startingYield;

    main: while (startingYield >= 100) {
        daysOperated++;
        currentYield -= workersConsumed;
        totalYield += currentYield;
        startingYield -= 10;
        currentYield = startingYield;
    }

    if (totalYield >= 26) {
        totalYield -= finalConsumption;
    } else {
        totalYield = 0;
    }

    console.log(daysOperated);
    console.log(totalYield);
}


spiceMustFlow(111);
