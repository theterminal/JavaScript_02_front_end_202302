// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - More Exercise
// More Exercise 04 - Gladiator Expenses - judge: https://judge.softuni.org/Contests/Practice/Index/3787#3


function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let counterArmor = 0;

    for (let i = 1; i < lostFights + 1; i++) {
        if (i % 2 === 0) {
            expenses += helmetPrice;

            if (i % 3 === 0) {
                expenses += swordPrice;
                expenses += shieldPrice;
                counterArmor += 1;

                if (counterArmor === 2) {
                    expenses += armorPrice;
                    counterArmor = 0;
                }
            }
        } else if (i % 3 === 0) {
            expenses += swordPrice;
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}


gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);
