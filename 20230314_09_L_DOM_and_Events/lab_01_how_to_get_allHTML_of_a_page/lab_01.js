// It'll grab all of the HTML on the page and will convert it to an Array of elements
const htm = document.getElementsByTagName('html')[0];

// It takes the Head and Body elements and their content
console.log(htm.innerHTML);

// when next line is active - it'll hide the HTML and a blank page will be displayed
// htm.innerHTML = '';                                 

// It takes the full page
console.log(htm);
