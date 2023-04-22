// 20230314 - JavaScript Front-End - DOM and Events - Lab
// 02 - Show More - judge: https://judge.softuni.org/Contests/Practice/Index/3794#1


function showText() {
    const anchor = document.getElementById('more');
    const span = document.getElementById('text');
    span.style.display = 'inline';
    anchor.style.display = 'none';
}