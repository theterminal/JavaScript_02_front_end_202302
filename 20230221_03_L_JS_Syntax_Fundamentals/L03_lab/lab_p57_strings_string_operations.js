// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Manipulating Strings
// String Operations


// ___________ replace(search, replacement) ____________


let text = "Hello, john@softuni.bg, you have been using john@softuni.bg in your registration.";
let replacedText = text.replace(".bg", ".com");

console.log(replacedText);          // Hello, john@softuni.com, you have been using john@softuni.bg in your registration.


// ___________ replace all instances ____________


let text_2 = "Hello, john@kirilk777.bg, you have been using borko@didi.bg in your registration.";
while (text_2.includes('.bg')) {
    text_2 = text_2.replace('.bg', '.com');
}

console.log(text_2);
