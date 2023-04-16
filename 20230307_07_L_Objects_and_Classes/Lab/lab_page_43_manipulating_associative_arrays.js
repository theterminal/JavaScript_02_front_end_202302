// 20230307 - JavaScript Front-End 202302 - Objects and Classes
// Page 43 - Manipulating Associative Arrays 


let assArray = {'name': 'Kiril', 'color': 'blue'};

if (assArray.hasOwnProperty('color')) {                                             // it checks the keys only!               
    console.log(`The property color has the value of ${assArray['color']}`);
}

if (assArray.hasOwnProperty('name')) {              
    console.log(`The property name has the value of ${assArray['name']}`);
}
