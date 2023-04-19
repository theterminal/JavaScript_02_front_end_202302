function sumTable() {
    let table = document.getElementsByTagName('table')[0];
    let sum = 0;

    for (let i = 0; i < table.rows.length; i++) {
        let row = table.rows[i];
        
        if (i > 0 && i < table.rows.length - 1) {
            let price = Number(row.cells[1].innerHTML);
            sum += price;
        }
    }

    const totalField = document.getElementById('sum');
    totalField.textContent = sum.toFixed(2);
}


// ______ CGPT4 answer _______


// function sumTable() {
//     var table = document.getElementsByTagName('table')[0];
//     var rows = table.rows;
//     var sum = 0;
    
//     for (var i = 1; i < rows.length - 1; i++) {
//       sum += parseFloat(rows[i].cells[1].textContent);
//     }
    
//     document.getElementById('sum').textContent = sum.toFixed(2);
//   }
