// _________ version 03 ____________ use version 01 or 02 or 03. Not all at the same time.


function deleteByEmail() {
    const result = document.querySelector('#result');
    const email = document.querySelector('input[name="email"]').value;
    let tds = document.querySelectorAll('td');
    let flag = false;

    tds.forEach((tdElement) => {
        if (tdElement.innerHTML === email) {
            tdElement.parentElement.remove();
            result.textContent = 'Deleted';
            flag = true;
        }
    });

    if (!flag) {
        result.textContent = 'Not found.';
    }
}


// _________ version 02 ____________ use version 01 or 02 or 03. Not all at the same time.


function deleteByEmail() {
    const result = document.querySelector('#result');
    const email = document.querySelector('input[name="email"]').value;
    let tds = document.querySelectorAll('td');

    for (let i = 0; i < tds.length; i += 2) {
        if (tds[i + 1].textContent === email) {
            // solution 01 or 02 - uncomment / comment the one you want to use
            tds[i].parentElement.remove();                // 'parent.Node' works too

            // solution 02 or 01 - uncomment / comment the one you want to use
            // tds[i].remove();
            // tds[i + 1].remove();

            result.textContent = 'Deleted';
            return;
        }
    }
    result.textContent = 'Not found.';
}


// On line 30 can use 'Array.from()' to tern the input into an array.
// Then can use 'tds.find((td) => td.textContent === email)' to search for the email instead of a 'for loop'...
// Then 'if-else' to remove and/or return result.


// _________ version 01 ____________ use version 01 or 02 or 03. Not all at the same time.


function deleteByEmail() {
    let email = document.getElementsByName('email')[0].value;
    let secondColumn = document.querySelectorAll('#customers tr td:nth-child(2)');

    for (let td of secondColumn) {
        if (td.textContent === email) {
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById('result').textContent = 'Deleted';
            return;
        }
    }

    document.getElementById('result').textContent = 'Not found.';
}
