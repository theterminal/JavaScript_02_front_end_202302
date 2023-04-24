// 20230314 - JavaScript Front-End - DOM and Events - Lab
// 08 - Sum Table - judge: https://judge.softuni.org/Contests/Practice/Index/3794#7


function sumTable() {
    let table = document.getElementsByTagName('table')[0];
    let rows = table.rows;
    let sum = 0;

    for (let i = 1; i < table.rows.length - 1; i++) {
        let price = Number(rows[i].cells[1].innerHTML);
        sum += price;
    }

    const totalField = document.getElementById('sum');
    totalField.textContent = sum.toFixed(2);
}