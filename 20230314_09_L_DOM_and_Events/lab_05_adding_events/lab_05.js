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


// __________ mouseout __________


const btnElement3 = document.getElementById('btn');
btnElement3.addEventListener('mouseout', clickHandler);

function clickHandler(e) {
    // see the result in the console
    console.log(e.currentTarget);          
}

