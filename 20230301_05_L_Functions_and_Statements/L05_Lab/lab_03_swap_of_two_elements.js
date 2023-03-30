// 20230301 - JavaScript Front-End 202302 - JS Functions and Statements
// Swapping the elements of an array 


function swapElements(arr) {
    console.log(`${arr.join(' ')} - starting array`);
    for (let i = 0; i < arr.length / 2; i++) {
        swap(arr, i, arr.length - 1 - i);
    }

    let result = arr.join(' ');
    console.log(`${result} - result is swapped string`)

    function swap(elements, i, j) {
        let temp = elements[i];
        elements[i] = elements[j];
        elements[j] = temp;
    }
}


swapElements([1, 2, 3, 4, 5]);
