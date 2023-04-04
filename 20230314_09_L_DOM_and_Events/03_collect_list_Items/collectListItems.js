function extractText() {
    let liElements = Array.from(document.querySelectorAll('#items > li'));
    let textarea = document.querySelector('#result');

    liElements
        .forEach((li) => {
            textarea.value += li.textContent + '\n'
        })


    // additional information
    liElements                              // check the console to see the result there
    .forEach((li) => {
        console.log(li.textContent);
    })
}


// _______________ version 01 _______________


function extractText1() {
    let itemNodes = document.querySelectorAll('ul#items li');
    let textarea = document.querySelector('#result');

    for (let node of itemNodes) {
        textarea.value += node.textContent + '\n'
    }
}
