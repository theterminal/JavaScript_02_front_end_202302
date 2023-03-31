// 20230302 - JavaScript Front-End 202302 - JS Functions and Statements - Exercise
// 04 - Odd and Even Sum - judge: https://judge.softuni.org/Contests/Compete/Index/3789#3


function oddEvenSum(number) {
    oddSum = 0;
    evenSum = 0;
    stringFromNumber = String(number);

    for (let i = 0; i < stringFromNumber.length; i++) {
        if (Number(stringFromNumber[i]) % 2 === 0 ) {
            evenSum += Number(stringFromNumber[i]);
        } else {
            oddSum += Number(stringFromNumber[i]);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}


oddEvenSum(1000435);
oddEvenSum(3495892137259234);
