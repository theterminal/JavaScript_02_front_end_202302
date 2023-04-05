// _______ creating an element and displaying it _______


const liItems = Array.from(document.getElementsByTagName('li'));
const paragraph = document.createElement('p');
const firstLi = liItems[0];

paragraph.textContent = 'This new paragraph is dynamically created in the JS file';
firstLi.appendChild(paragraph);     // attaching the newly created element


// ---------------- attach the a paragraph to all 'li' elements ----------------
// Cannot reuse the above paragraph. It must be created inside the loop below


liItems
    .forEach((li) => {
        const para = document.createElement('p');
        para.textContent = 'This new paragraph is created in loop in the JS file';
        para.style.background = 'lightblue';
        para.style.padding = '10px';
        li.appendChild(para);
    });


// ________ making the background color on an element red ______


const redElement = document.getElementById('red');
redElement.style.background = 'red';


// ________ another loop for creating an element ______


liItems
    .forEach((li) => {
        const h1 = document.createElement('h1');
        h1.textContent = 'This is a dynamic heading';
        h1.style.background = 'yellow';
        h1.style.padding = '10px';
        li.appendChild(h1);
    });


// _________ uncomment the code below and it'll remove all 'li' elements from the document ___


// liItems
// .forEach((li) => {
//     li.remove();
// });
