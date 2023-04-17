// JavaScript - Classes
 

class Cat {                                                                         // declaration of a class
    constructor(name, age) {                                                        // the constructor of the class
        this.name = name;
        this.age = age;
    }

    meow() {                                                                        // a method of the class
        console.log(`${this.name} is ${this.age} and says meow.`);
    }
}

let storage = []                                                                    // an array where the objects created by class 'Cat' will be stored

// const cat1 = new Cat('Merry', 11);                                               // a way to create an object from the class 'Cat'
// const cat2 = new Cat('Jerry', 2);

storage.push(new Cat('Merry', 11));                                                 // creating and adding an object from the class 'Cat' to the 'storage'
storage.push(new Cat('Jerry', 2));

for (const cat of storage) {
    console.log(`${cat.name} is a cat and the age of the cat is ${cat.age} years old.`);
    cat.meow();
}

console.log(storage);

for (const element of storage) {
    console.log(element);                                                          // Printing out all the objects of the class 'Cat'
}

for (const element of storage) {
    console.log(element.name);
    console.log(element.age);
    delete(element.name);                                                          // this is how the element's property is deleted
}

console.log(storage);                                                              // [ Cat { age: 11 }, Cat { age: 2 } ]

for (const element of storage) {
    console.log(element);                                                           // Printing out all the objects of the class '
    element.address = 'address';
    element['connection'] = 'connected';
    console.log(element);
}
