function addItem() {
    // Gets the 'ul' element from the DOM
    const ulContainer = document.getElementById('items');

    // Gets the 'input' element from the DOM
    const input = document.getElementById('newItemText');
    
    // Creates a new 'li' and on the next line adds the content from the 'input' element
    const newLi = document.createElement('li');
    newLi.textContent = input.value;

    // Adds the new 'li' to the DOM with its content
    ulContainer.appendChild(newLi);

    // Clears the input element to be ready for the next entry
    input.value = '';
}
