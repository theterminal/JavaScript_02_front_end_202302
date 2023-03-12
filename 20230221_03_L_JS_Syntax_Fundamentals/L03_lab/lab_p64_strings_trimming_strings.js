// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Manipulating Strings
// Trimming Strings


// Use trim() method to remove white spaces (spaces, tabs, no-break space, etc. ) from both ends of a string

let text_1 = "   Annoying spaces       ";
console.log(text_1.trim());                                 // Output: "Annoying spaces"


// Use trimStart() or trimEnd() to remove white spaces only at the beginning or at the end

let text_2 = "   Annoying spaces       ";
text_2 = text_2.trimStart();
text_2 = text_2.trimEnd();

console.log(text_2);                                          // Expected output: "Annoying spaces"

