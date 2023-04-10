// Sort a number array Ascending and Descending

const numArray1 = [45, 12, -3, 123, 4];

console.log(numArray1.sort((a, b) => a - b));
console.log(numArray1.sort((a, b) => b - a));


// Sort a number array Ascending and Descending


const stringArray1 = ['Kiril', 'Ilina', 'Marty', 'Kristiyana'];

console.log(stringArray1.sort((a, b) => a.localeCompare(b)));
console.log(stringArray1.sort((a, b) => b.localeCompare(a)));
