// 20230321 - JavaScript Front-End 202302 - HTTP and REST - Lab
// Asynchronous example


console.log('Hello 1');                         // immediately shown

setTimeout(function() {
    console.log('Hello 2');                     // Shown after 3 seconds (3_000 ms)
}, 3000);

console.log('Hello 3');                         // immediately shown


// The function inside the setTimeout function is called callback function.
// Even if the setTimeout function is set to 0, the result from it will be third again due to the prioritization ot the synchronous and asynchronous operation in JavaScript.

setTimeout(() => {                              // This is also a valid syntax
    console.log('Hello 4');
}, 5000);


// Careful - it'll go into an infinite loop!

// let counter = 0;
// setInterval(() => {
//     console.log('"This is coming from the function "setInterval()"');
//     counter++;
//     if (counter === 10) {
//         console.log('Goodbye');
//         return;                                                             // this doesn't break the function!
//     }
// }, 1000);

