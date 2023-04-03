// 20230309 - JavaScript Front-End 202302 - Objects and Classes - Exercises
// 08 - Piccolo - judge: https://judge.softuni.org/Contests/Compete/Index/3792#7


function piccolo(input) {
    let parked = [];

    for (const car of input) {
        let [action, plate] = car.split(', ');

        if (action === 'IN' && !parked.includes(plate)) {
            parked.push(plate);
        } else if (action === 'OUT' && parked.includes(plate)) {          // if command is 'OUT' and plate is in the 'parked'
            let index = parked.indexOf(plate);                            // finds the index of the plate          
            parked.splice(index, 1);                                      // removes the element at the above found index
        }
    }

    if (parked.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        let sortedPlates = parked.sort((a, b) => a.localeCompare(b))
        console.log(`${sortedPlates.join('\n')}`);
    }
}


console.log('\n ___________ test 11 ____________ \n');
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);


console.log('\n ___________ test 12 ____________ \n');
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);