// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Array Methods - Pop, Push, Shift, Unshift, Splice, Reverse, Join, Slice, Includes, IndexOf, ForEach, Map, Find, Filter


// __________ join() ___________


// Creates and returns a new string by concatenating all of the elements in an array (or an array-like object),
// separated by commas or a specified separator string.


let elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());                                               // "Fire,Air,Water"
console.log(elements.join(''));                                             // "FireAirWater"
console.log(elements.join('-'));                                            // "Fire-Air-Water"
console.log(['Fire'].join("."));                                            // Fire
