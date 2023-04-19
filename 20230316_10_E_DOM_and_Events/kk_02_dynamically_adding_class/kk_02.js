// __________ example of how to target all elements of type on a page __________


// returns an array of all 'p' elements in the page
const pElements = document.getElementsByTagName('p');

// the loop will fgo through all 'p' elements and will add the class to them
for (const el of pElements) {
    el.classList.add('darker-background');
    el.style.padding = '10px';
}


// _______________ example of how to target 1 element of a type __________


// returns the first element of the array with all 'p' elements in the page
const elementP1 = document.getElementsByTagName('p')[0];
elementP1.classList.add('blue-text', 'typography');


// _____ getting different elements and applying different styles to them _____


const elementsSpan = document.getElementsByTagName('span');
elementsSpan[0].classList.add('blue-text');
elementsSpan[1].classList.add('typography');


const elementsDiv = document.getElementsByTagName('div');
elementsDiv[0].classList.add('darker-background');
elementsDiv[0].style.padding = '10px';
