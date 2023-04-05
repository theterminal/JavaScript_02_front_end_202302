function addItem() {
    const ulContainer = document.getElementById('items');
    const input = document.getElementById('newItemText');
    const newLi = document.createElement('li');
    const newAnchor = document.createElement('a');

    newLi.textContent = input.value;
    newAnchor.textContent = '[Delete]';
    newAnchor.setAttribute('href', '#');
    // next line is same as the one above
    // newAnchor.href = '#';
    newAnchor.addEventListener('click', deleteHandler);
    newLi.appendChild(newAnchor);
    ulContainer.appendChild(newLi);

    input.value = '';

    function deleteHandler(e) {
        // in next line 'e.currentTarget' can be 'this'
        const liItem = e.currentTarget.parentElement;
        liItem.remove();
    }
}
