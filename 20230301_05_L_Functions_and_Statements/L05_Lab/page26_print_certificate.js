// 20230301 - JavaScript Front-End 202302 - JS Functions and Statements
// Page 26 - Problem - Print Certificate


function printCertificate(grade, array) {

    function validateGrade(validateThis) {
        if (validateThis < 5.00) {
            test = false;
            return false;
        } else if (validateThis >= 5.00 && validateThis <= 6.00) {
            test = true;
            return true;
        }
    }
    
    // function within function example
    if (validateGrade(grade)) {
        return `------------- @ -------------\n-------- Certificate --------\n-----------------------------\n${array[0]}  ${array[1]} qualifies for certificate`;
    }
    return `${array[0]} ${array[1]} does NOT qualify!`;
}


console.log(
    printCertificate(5.52, ['Jerry', 'Smith'])
);


console.log(
    printCertificate(4.99, ['Carry', 'King'])
    );
