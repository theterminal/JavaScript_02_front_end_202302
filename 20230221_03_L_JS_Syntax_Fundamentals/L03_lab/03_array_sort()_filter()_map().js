
function arraySortFilterMap() {
    let array = [3, 1, 4, 2, 5, 6, 8, 7];

    console.log(array.sort((a, b) => a - b));                       // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
    console.log(array.sort((a, b) => b - a));                       // [ 8, 7, 6, 5, 4, 3, 2, 1 ]

    console.log(array
        .filter((x) => x % 2 !== 0)                                 // [ 7, 5, 3, 1 ]
        .sort((a, b) => a - b)                                      // [ 1, 3, 5, 7 ]
        .map((x) => x + 1)                                          // [ 2, 4, 6, 8 ]
    );                                                              // [ 2, 4, 6, 8 ]
}

arraySortFilterMap();
