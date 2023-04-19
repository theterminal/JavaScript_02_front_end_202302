const button = document.getElementsByTagName('button')[0];          // this returns HTML Collection
const showHideText = document.getElementById('result');

button.addEventListener('click', toggle);

function toggle(event) {
    if (showHideText.style.display === 'block') {
        showHideText.style.display = 'none';
        return;
    }
    showHideText.style.display = 'block';
}
