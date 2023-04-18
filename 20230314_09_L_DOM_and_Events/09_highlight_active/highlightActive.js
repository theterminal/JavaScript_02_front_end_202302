function focused() {
    let inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("focus", function() {
            this.parentNode.classList.add("focused");
        });

        inputs[i].addEventListener("blur", function() {
            this.parentNode.classList.remove("focused");
        });
    }
}
