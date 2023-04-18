function colorize() {
    const rows = document.querySelectorAll('tr');

    for (let i = 0; i < rows.length; i++) {
        if (i % 2 === 1) {
            rows[i].setAttribute("style","background-color: teal");
        }
    }
}