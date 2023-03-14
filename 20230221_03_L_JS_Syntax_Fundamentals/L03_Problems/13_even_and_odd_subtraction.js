// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Problem 13 - Even and Odd Subtraction - judge: https://judge.softuni.org/Contests/Practice/Index/3785#12


function differenceBetweenEvenSumAndOddSum(arrayOfNumbers) {
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        element = Number(arrayOfNumbers[i]);
        if (element % 2 === 0) {
            oddSum += element;
        } else {
            evenSum += element;
        }
    }

    diff = oddSum - evenSum;
    console.log(diff);
}


differenceBetweenEvenSumAndOddSum([1,2,3,4,5,6]);
differenceBetweenEvenSumAndOddSum([3,5,7,9]);
differenceBetweenEvenSumAndOddSum([2,4,6,8,10]);
