// JavaScript - reduce() - Removing duplicates from an array


const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];

const myArrayWithNoDuplicates = myArray
    .reduce((accumulator, currentValue) => {
        if (!accumulator.includes(currentValue)) {
            return [...accumulator, currentValue];
        }
        return accumulator;
    }, []);

console.log(myArrayWithNoDuplicates);
