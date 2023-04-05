const liItems = Array.from(document.getElementsByTagName('li'));
const firstLi = liItems[0];

console.log(firstLi);
console.log(firstLi.parentElement);
console.log(firstLi.parentElement.parentElement);

console.log(firstLi.childElementCount);
console.log(firstLi.children);
console.log(firstLi.children[0]);