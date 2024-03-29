// 'liElements' contains all 'li' elements of the page
const liElements = document.getElementsByTagName('li');

for (const li of liElements) {
    // this will change the text of all 'li' elements on the page
    li.textContent += ' [Hello from KK]';
    
    // this logs the id of each 'li' element to the console
    console.log(li.id);

    if (li.textContent === 'Element 3 [Hello from KK]') {
        //this line replaces the 'textContent' of the 'li' element
        li.textContent = 'Open the console and find the logged \'id\' of the third element';
        
        // open the console and will see the 'dynamic' class attribute added to the third element
        li.classList.add('dynamic-0');          // adds class 'dynamic-0' - syntax 01 (keeps existing classes)
        li.setAttribute('class', 'dynamic-1');  // adds class 'dynamic-1' - syntax 02 (deletes existing classes)
        li.className = 'dynamic-2';             // adds class 'dynamic-2' - syntax 03 (deletes existing classes)

        // this changes the background color ot the 'li' element
        // li.style.backgroundColor = 'lightblue';
        li.setAttribute('style', 'background-color: lightgreen');

        // this line (if 'active') will hide the element from the page
        // li.style.display = 'none';
    }

    // this line adds to the content of the 'li' - as text
    li.innerHTML += ' (Text added dynamically with innerHTML)';

    // this line adds to the content of the 'li' - as text as paragraph
    li.innerHTML += '<p>(Paragraph added dynamically with innerHTML)</p>';
}
