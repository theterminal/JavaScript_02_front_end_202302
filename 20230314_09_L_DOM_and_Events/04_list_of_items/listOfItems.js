// 20230314 - JavaScript Front-End - DOM and Events - Lab
// 04 - List of Items - judge: https://judge.softuni.org/Contests/Practice/Index/3794#3


function addItem() {
    const inputIn = document.getElementById('newItemText');
    const ulElement = document.getElementById('items');
    const newLi = document.createElement('li');

    newLi.textContent = inputIn.value;
    ulElement.appendChild(newLi);
    inputIn.value = '';
}