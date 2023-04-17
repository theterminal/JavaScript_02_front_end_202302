// 20230307 - JavaScript Front-End 202302 - Objects and Classes
// Page 47 - Sorting Associative Arrays Without specific property name


function solve(input) {
    let addressBook = {};

    for (let line of input) {
        let [name, address] = line.split(':');
        addressBook[name] = address;
    }
    
    let sorted = Object.entries(addressBook);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));                // sorts ascending by 'name' property
    console.log(sorted);

    sorted.sort((a, b) => b[0].localeCompare(a[0]));                // sorts descending by 'name' property
    console.log(sorted);

    sorted.sort((a, b) => a[1].localeCompare(b[1]));                // sorts ascending by 'address' property
    console.log(sorted);

    sorted.sort((a, b) => b[1].localeCompare(a[1]));                // sorts descending by 'address' property
    console.log(sorted);
};


solve([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);


/*

the result is:

[
    [ 'Bill', 'Ornery Rd' ],
    [ 'Peter', 'Carlyle Ave' ],
    [ 'Tim', 'Doe Crossing' ]
]

*/