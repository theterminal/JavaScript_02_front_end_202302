// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Loops


console.log('\n ____________ for Loop ______________ \n');


// Repeats until the condition is satisfied. The variable is incremented in the condition.


for (let i = 1; i <= 5; i++){
    console.log(i);
  }


console.log('\n ____________ while Loop ______________ \n');


// Does the same, but has different structure. Variable is incremented outside the condition. Must NOT forget to increment.


let j = 1
while (j <= 5) {
  console.log(j);
  j++;                                                                      // must NOT forget to increase / decrease value
}


console.log('\n ____________ forof Loop _______________ \n');


// Used mainly for ARRAYS. The arrays have built-in iterator. The objects don't have iterators so we don't use 'forof' there.
// It goes through every element of the array.

// for (const iterator of object) {
  
// }


console.log('\n ____________ forin Loop _______________ \n');


// Used mainly for OBJECTS.
// When used with object gives the key. See example 01, 02.
// When used with arrays gives the index. See example 03.


console.log('\n __________ ex. forin 01 __________ object __________  \n');


let object = {name: 'Kiril', age: 32, color: 'black'};

for (const key in object) {                                                     // with 'forin' using only the keys.                
    console.log(`The key is {${key}} and the value is {${object[key]}}`);
}


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
