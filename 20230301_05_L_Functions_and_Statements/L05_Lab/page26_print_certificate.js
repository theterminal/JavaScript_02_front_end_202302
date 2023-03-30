// 20230301 - JavaScript Front-End 202302 - JS Functions and Statements
// Page 26 - Problem - Print Certificate


// ____________ version 3 _______________ Logic is same as version 1, just unpacking is different


function certificate3(grade, names) {
    let [firstName, lastName] = names;
    return firstName + ' ' + lastName;
}


console.log(
    certificate3(5.52, ['Jerry', 'Smith'])
);


// ____________ version 2 _______________ Logic is same as version 1, just unpacking is different


function certificate(grade, [firstName, lastName]) {
    return firstName + ' ' + lastName;
}


console.log(
    certificate(5.52, ['Jerry', 'Smith'])
);


// ____________ version 1 _______________


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
