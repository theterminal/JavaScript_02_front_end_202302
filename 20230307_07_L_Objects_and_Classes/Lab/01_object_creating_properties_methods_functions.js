// JavaScript - Object: Creating, properties, methods, using with functions...


function personInfo(firstName, lastName, age) {                                  // creating a function that takes parameters
    let person = {                                                               // creating an object with some properties
        firstName: firstName,                                                    // property 1 of the object                
        lastName: lastName,                                                      // property 2 of the object
        age: age,                                                                // property 3 of the object

        sayHello() {                                                             // adding method 1 of the object
            console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} old`);
        },

        anotherWay: function() {                                                 // adding method 2 of the object
            console.log('I am a method 2 and I am created with this syntax');
        }
    }

    person.address = 'New York, NY, USA';                                        // adding property 4 of the object
    person.sayHello();                                                           // calling of method 1 of the object
    person.anotherWay();                                                         // calling of method 2 of the object

    person.andAnotherWay = () => console.log('Wether is OK today!');             // adding method 3 of the object
    person.andAnotherWay();                                                      // calling method 3 of the object

    return person;
}


personInfo('Peter', 'Pan', 33);
