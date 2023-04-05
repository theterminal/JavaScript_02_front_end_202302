function deleteByEmail() {
    const result = document.querySelector('#result');
    const input = document.querySelector('input[name="email"]');
    let email = input.value;
    
    let tds = document.querySelectorAll('td');
    for (let i = 0; i < tds.length; i += 2) {
        if (tds[i + 1].textContent === email) {
            // solution 01 or 02 - uncomment / comment the one you want to use
            tds[i].parentElement.remove();                                              // 'parent.Node' works too

            // solution 02 or 01 - uncomment / comment the one you want to use
            // tds[i].remove();
            // tds[i + 1].remove();

            result.textContent = 'Deleted';
            return
        }
    }
    result.textContent = 'Not found.';
}


// On line 6 can use 'Array.from()' to tern the input into an array.
// Then can use 'tds.find((td) => td.textContent === email)' to search for the email instead of a 'for loop'...
// Then 'if-else' to remove and/or return result.
