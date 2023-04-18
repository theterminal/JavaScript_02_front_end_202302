// __________ Adding Events _________


// ____________ click ___________


const btnElement1 = document.getElementById('btn');
btnElement1.addEventListener('click', clickHandler);

function clickHandler(e) {
    // see the result in the console
    console.log(e.target);         
}


// __________ mouseover __________


const btnElement2 = document.getElementById('btn');
btnElement2.addEventListener('mouseover', clickHandler);

function clickHandler(e) {
    // see the result in the console
    console.log(e.target);
}

const liEl5 = document.getElementsByTagName('li')[0];
liEl5.addEventListener('click', f2);

function f2() {
    liEl5.innerHTML = 'Ha ha';

    if (liEl5.style.backgroundColor === 'lightgreen') {
        liEl5.style.backgroundColor = 'lightblue';
    } else {
        liEl5.style.backgroundColor = 'lightgreen';
    }
}

// __________ mouseout __________


const btnElement3 = document.getElementById('btn');
btnElement3.addEventListener('mouseout', clickHandler);

function clickHandler(e) {
    // see the result in the console
    console.log(e.currentTarget);          
}
