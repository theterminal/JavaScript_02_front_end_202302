function addItem() {
    const ulElement = document.getElementById('items');
    const inputIn = document.getElementById('newItemText');
    const newLi = document.createElement('li');

    newLi.textContent = inputIn.value;
    ulElement.appendChild(newLi);
    inputIn.value = '';
}
