// 20230302 - JavaScript Front-End 202302 - JS Functions and Statements - Exercise
// 05 - Palindrome Integers - judge: https://judge.softuni.org/Contests/Compete/Index/3789#4


// _____________ version 4 ________________ using .map()


function palindromeTest4(numbers) {
    const isPalindrome = (num) => Number([...num.toString()].reverse().join('')) === num;

    return numbers
        .map(isPalindrome)
        .join('\n');
}


console.log(palindromeTest4([123,323,421,121]));
console.log(palindromeTest4([32,2,232,1010]));


// _____________ version 3 ________________ using .forEach and arrow function


function palindromeTest(numbers) {
    const isPalindrome = (num) => Number([...num.toString()].reverse().join('')) === num;
    
    numbers.forEach((num) => {
            console.log(isPalindrome(num));
        })
}


palindromeTest([123,323,421,121]);
palindromeTest([32,2,232,1010]);


// _____________ version 2 ________________ using function


function palindrome(numbers) {
    numbers
        .forEach((num) => {
            console.log(isPalindrome(num));
        })

    function isPalindrome(num) {
        let reversed = Number([...num.toString()].reverse().join(''));
        return num === reversed;
    }
}


palindrome([123,323,421,121]);
palindrome([32,2,232,1010]);


// _____________ version 1 ________________


function palindromeIntegers(input) {

    for (let i = 0; i < input.length; i++) {
        let numToStr = input[i].toString();                         // converting the element from number to string
        let numToStrArr = [...numToStr];                            // converting the string to array
        let revArrToStr = numToStrArr.reverse().join('');           // array -> reversed -> joined -> to string
    
        if (numToStr === revArrToStr) {                             // comparing strings
            console.log('true');
        } else {
            console.log('false');
        }
    }
}


palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);
