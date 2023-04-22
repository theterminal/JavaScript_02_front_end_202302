// 20230314 - JavaScript Front-End - DOM and Events - Lab
// 03 - Collect List Items - judge: https://judge.softuni.org/Contests/Practice/Index/3794#2


function extractText() {
    let liElements = Array.from(document.querySelectorAll('#items > li'));
    let textarea = document.querySelector('#result');

    liElements
        .forEach((li) => {
            textarea.value += li.textContent + '\n'
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