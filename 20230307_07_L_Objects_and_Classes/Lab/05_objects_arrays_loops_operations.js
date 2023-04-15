console.log('\n __________ forEach() __________ console.log the elements of an array ___________________________________ \n');


let array1 = [1, 2, 3];
array1.forEach((x) => console.log(x));


console.log('\n __________ Checking for a key existence in an object __________ \n');


// This operation does NOT work on arrays!


let objA = {name: 'Kiril', age: 19, color: 'green'};

if ('age' in objA) {
    console.log(`YES. This key is in the object!`);

    if ('name' in objA) {
        console.log(`YES. And the second key is in the object!`);

        if ('color' in objA) {
            console.log(`YES. And the third key is in the object!`);

            if ('KirilK' in objA) {
                console.log(`YES. And the fourth key is in the object!`);
            } else {
                console.log('NO. KirilK is NOT in the object!');
            }
        }
    }
};


console.log('\n __________ Checking for a key existence in an object __________ using "hasOwnProperty()" _______________ \n');


let objB = {name: 'KK', age: 49, color: 'blue'};

if (objB.hasOwnProperty('name')) {
    console.log('YES. The object has the property "name".');
} else {
    console.log('NO. The object does NOT have the property "name"');
}


console.log('\n __________ .shift() __________ removes and returns the first element of an array __________ \n');


let array3 = [10, 20, 30];
let k = array3.shift();
console.log(k);


console.log('\n __________ Objects and operations with them _______________________________________________ \n');


let objC = {'Bobo': 3, 'Ivan': 49, 'Didi': 6};
objC['Jerry'] = 1;                                                      // adding property to an object
console.log(objC);                                                      // { Bobo: 3, Ivan: 49, Didi: 6, Jerry: 1 }

for (const key in objC) {
    if (key === 'Jerry') {
        console.log('YES Jerry is in the list');
    } else {
        objC['Jerry'] += 1;
        objC['Bobo']++;                                                 // another way of incrementing the value of a key in an object 
    }
}

console.log(objC);


console.log('\n __________ If an object is empty and you try to loop through it it does NOT return an error _________ \n') 


let objD = {};


for (const key in objD) {
    console.log('Yes');
}

console.log(objD);
