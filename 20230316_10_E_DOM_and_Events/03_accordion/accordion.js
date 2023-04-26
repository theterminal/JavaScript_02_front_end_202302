// 20230316 - JavaScript Front-End - DOM and Events - Exercise
// 03 - Accordion - judge: https://judge.softuni.org/Contests/Practice/Index/3795#2


// ___________ version 01 ______________


function toggle() {
    const btn = document.getElementsByClassName('button')[0];
    const divExtra = document.getElementById('extra');

    if (btn.textContent === 'More') {
        btn.textContent = 'Less';
        divExtra.style.display = 'block';
    } else if (btn.textContent === 'Less') {
        btn.textContent = 'More';
        divExtra.style.display = 'none';
    }
}