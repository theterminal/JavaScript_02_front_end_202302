// 20230301 - JavaScript Front-End 202302 - JS Functions and Statements
// Page 22 - Repeat String N-times


function repeatStringNTimes(string, number) {
    let result = '';
    
    for (let i = 0; i < number; i++) {
        result += string;
    }
    
    return result;
}


console.log(
    repeatStringNTimes('abc', 7)
);

console.log(
    repeatStringNTimes('String', 3)
);