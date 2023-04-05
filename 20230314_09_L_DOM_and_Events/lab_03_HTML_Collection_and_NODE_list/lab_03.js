alert('Main thing to remember is that when using NODE List or HTML Collection, always convert it to an array with \'Array.from()\' and from that moment it is an array with all array methods available to use.')

// Main thing to remember is that when using NODE List or HTML Collection, always convert it to an array with 'Array.from()' and from that moment it is an array with all array methods available to use.


const liItemsNODEList = document.querySelectorAll('ul > li');
console.log(liItemsNODEList);


// if converted to an array in order to use the array methods the syntax would be:
const liItemsAgain = Array.from(document.querySelectorAll('ul > li'));
console.log(liItemsAgain);


// _________ HTML Collection _________


const liItemsHTMLCollection = document.getElementsByTagName('li');
console.log(liItemsHTMLCollection.item(0));  // element on index 0
console.log(liItemsHTMLCollection);

console.log(Array.from(liItemsHTMLCollection)); // converting to array
