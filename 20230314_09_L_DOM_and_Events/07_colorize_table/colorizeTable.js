// 20230314 - JavaScript Front-End - DOM and Events - Lab
// 07 - Colorize Table - judge: https://judge.softuni.org/Contests/Practice/Index/3794#6


function colorize() {
    const rows = document.querySelectorAll('tr');

    for (let i = 0; i < rows.length; i++) {
        if (i % 2 === 1) {
            // option 1 (choose option 1 or option 2 and comment out the other)
            // rows[i].setAttribute("style","background-color: teal");

            // option 2 (choose option 1 or option 2 and comment out the other)
            rows[i].style.backgroundColor = 'teal';
        }
    }
}