// JavaScript - 'forEach' loop with objects


console.log('\n __________ using forEach() with one object _____________________________________________________ \n');


// Iterate through all properties
function testWithObject(inputObj) {

    Object.keys(inputObj).forEach(k => {
        console.log(k, inputObj[k]);                // console logs the 'key, value' pair
        console.log(k);                             // console logs the 'key'
        console.log(inputObj[k]);                   // console logs the 'value'
    })
}


testWithObject({'firstName': 'Kiril', 'lastName': 'Kara', 'age': 49});


// ____________________________________________________________________________________________________________________


console.log('\n __________ using forEach() with one an array of objects __________________________________________ \n');


// Iterate through all properties
function testWithObjects(...inputObj) {             // converts the input to an Array of objects

    Object.keys(inputObj).forEach(k => {
        // console.log(k, inputObj[k]);                // console logs the 'key, value' pair. 'index, object' pair.
        console.log(k);                             // console logs the 'key'. The key is the index of the array element
        console.log(inputObj[k]);                   // console logs the 'value'. The value is the object at the specified index.

        // You can farther split the object 'inputObj[k]' into whatever is needed (keys, values, pairs, etc)
    })
}


testWithObjects({'firstName': 'Kiril', 'lastName': 'Kara', 'age': 49}, {'name': 'Bobo', 'age': 69});
