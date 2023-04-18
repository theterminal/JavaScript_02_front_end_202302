function addItem() {
    const ulContainer = document.getElementById('items');
    const input = document.getElementById('newItemText');
    
    const newAnchor = document.createElement('a');
    newAnchor.setAttribute('href', '#');
    // next line is same as the one above
    // newAnchor.href = '#';
    newAnchor.textContent = '[Delete]';
    newAnchor.addEventListener('click', deleteHandler);

    const newLi = document.createElement('li');
    newLi.textContent = input.value;
    newLi.appendChild(newAnchor);
    ulContainer.appendChild(newLi);

    input.value = '';


    function deleteHandler(e) {
        // in next line 'e.currentTarget' can be 'this'
        const liItem = e.currentTarget.parentElement;
        liItem.remove();
    }
}
