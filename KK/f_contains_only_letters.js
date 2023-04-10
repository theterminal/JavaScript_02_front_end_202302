function containsOnlyLetters(string) {
    return [...string.toLowerCase()]                               // ['s', 'p', 'e', 'c', 'i', 'a', 'l']          - an array of lower case symbols
        .map((symbol) => symbol.charCodeAt(0))                     // [115, 112, 101, 99, 105, 97, 108]            - converts symbols to ascii codes
        .every((charCode) => charCode >= 97 && charCode <= 122);   // true                                         - verification of the ASCii range
}


// _______________ letters, spaces, special characters ______________


console.log(containsOnlyLetters(                                                        // false
    'Nowadays everyone uses # to tag a #special word in #socialMedia'
));


// _______________ letters, spaces __________________________________


console.log(containsOnlyLetters(                                                        // false
    'Nowadays '
));


// _______________ letters (upper and lower case) ___________________


console.log(containsOnlyLetters(                                                        // true
    'Special'
));
