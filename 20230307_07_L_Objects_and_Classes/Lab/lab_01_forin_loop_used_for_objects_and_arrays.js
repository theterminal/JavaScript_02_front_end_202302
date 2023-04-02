// 20230307 - JavaScript Front-End 202302 - Objects and Classes
// forin loop - good for objects and arrays 


// Used mainly for OBJECTS.
// When used with object gives the key. See example 02.
// When used with arrays gives the index. See example 03.


console.log('\n __________ ex. forin 02 __________ object __________  \n');


let cat = {name: 'Tom', age: 12, color: 'blue'};

for (const key in cat) {                                                    // 'key' is teh key in the object and is used to get the 'value'
    console.log(key + ' : ' + cat[key]);
}


console.log('\n ___________ ex. forin 03 __________array __________ used to get index and then the element at that index in an array __________ \n');


let dog = [12, 23, 23, 23];

for (i in dog) {                                                            // 'i' is the index and is used to get the element in the array
    console.log(i, dog[i]);
}