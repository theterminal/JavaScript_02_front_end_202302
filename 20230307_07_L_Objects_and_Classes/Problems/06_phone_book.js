// 20230307 - JavaScript Front-End 202302 - Objects and Classes
// 06 - Phone Book - judge: https://judge.softuni.org/Contests/Practice/Index/3791#5


// _________________ version 03 ___________________


function phoneBook3(input) {
    let phoneBook = {};

    for (const line of input) {                                     // 'forof' used with array
        let [name, phoneNumber] = line.split(' ');

        // __________ use this section NOT to update an existing key-value pair and comment the one below __________

        // if (!phoneBook.hasOwnProperty(name)) {                   // if the key exists it will NOT update it
        //     phoneBook[name] = phoneNumber;
        // }

        // __________ use this section to UPDATE an existing key-value pair and comment the one above ______________

        phoneBook[name] = phoneNumber;                              // it will record or update the value of the property 'name'
    }

    for (const key in phoneBook) {                                  // 'forin' used with objects
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}


console.log('\n _______ test 31 ________ \n');
phoneBook3(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);


// _________________ version 01 ___________________


function phoneBook2(stringArray) {
    let objPhoneBook = {};

    stringArray.forEach(element => {
        let kv = element.split(' ');
        objPhoneBook[kv[0]] = kv[1];
    });

    let pairs = Object.entries(objPhoneBook);
    for (const [key, value] of pairs) {                     // using 'forof' loop
        console.log(`${key} -> ${value}`);
    }
}


console.log('\n _______ test 11 ________ \n');
phoneBook2(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);


// _________________ version 02 ___________________


function phoneBook(stringArray) {
    let objPhoneBook = {};

    stringArray.forEach(element => {
        let kv = element.split(' ');
        objPhoneBook[kv[0]] = kv[1];
    });

    for (const key in objPhoneBook) {                            // using 'forin' loop
        console.log(`${key} -> ${objPhoneBook[key]}`);
    }
}


console.log('\n _______ test 21 ________ \n');
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);
