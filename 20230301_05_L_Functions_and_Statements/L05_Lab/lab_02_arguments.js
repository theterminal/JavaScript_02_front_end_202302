// 20230301 - JavaScript Front-End 202302 - JS Functions and Statements
// Arguments


// _____________ version WITH parameters ________________


function multiplyNumbers1(...inputParameters) {
    let sum = 1;

    for (let index = 0; index < inputParameters.length; index++) {
        sum *= inputParameters[index];
    }

    console.log(sum);
}

multiplyNumbers1(1,2,3,4,5,6,7,8,9,10);


// _____________ version NO parameters ________________


function multiplyNumbers() {
    // console.log(arguments);                                             // arguments is an embedded in JS object 
    let params = Object.values(arguments);                                 // transforming it to an array
    let sum = 1;

    for (let index = 0; index < params.length; index++) {
        sum *= params[index];
    }

    console.log(sum);
}

multiplyNumbers(1,2,3,4,5,6,7,8,9,10);
