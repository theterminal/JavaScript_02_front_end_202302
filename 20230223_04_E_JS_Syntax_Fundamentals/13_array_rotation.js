// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 13 - Array Rotation  - judge: https://judge.softuni.org/Contests/Compete/Index/3786#12


function arrayRotation(numArray, numberRotations) {
    for (let i = 0; i < numberRotations; i++) {
        numberRotations %= numArray.length;                          // could use that syntax to do less rotations. The third example will do 1 rotation instead of 5.
        numArray.push(numArray.shift());
    }
    console.log(numArray.join(' '));

}


arrayRotation([51, 47, 32, 61, 21], 2);                                 // 32 61 21 51 47
arrayRotation([32, 21, 61, 1], 4);                                      // 32 21 61 1
arrayRotation([2, 4, 15, 31], 5);                                       // 4 15 31 2
