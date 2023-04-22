// 20230314 - JavaScript Front-End - DOM and Events - Lab
// 06 - Add Delete - judge: https://judge.softuni.org/Contests/Practice/Index/3794#5


function addItem() {
    const input = document.getElementById('newItemText');
    const ulContainer = document.getElementById('items');

    const newAnchor = document.createElement('a');
    newAnchor.setAttribute('href', '#');
    // can be done this way too: newAnchor.href = '#';
    newAnchor.textContent = '[Delete]';
    newAnchor.addEventListener('click', deleteHandler);

    const newLi = document.createElement('li');
    newLi.textContent = input.value;
    newLi.appendChild(newAnchor);
    ulContainer.appendChild(newLi);

    input.value = '';

    // functions section
    function deleteHandler(e) {
        // in next line 'e.currentTarget' can be 'this'
        const liItem = e.currentTarget.parentElement;
        liItem.remove();
    }
}