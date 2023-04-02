// 20230307 - JavaScript Front-End 202302 - Objects and Classes
// Page 58 - Classes 


class Student{                                                                      // creating a class
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    sayHello() {                                                                    // adding method to the class (don't use function keyword)
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);         
    }
}

const student1 = new Student('Kiril', 45, [5.75, 4.90, 6.00]);                      // creating an instance of Student class
const student2 = new Student('George', 32, [3.50, 4.20, 5]);
const student3 = new Student('Peter', 50, [3, 4, 5]);

console.log(student1);                                                              // Student { name: 'Kiril', age: 45, grade: [ 5.75, 4.9, 6 ] }
console.log(student1.name);                                                         // Kiril
console.log(student1.age);                                                          // 45
console.log(student1.grade);                                                        // [ 5.75, 4.9, 6 ]

student1.sayHello();                                                                // Hello, my name is Kiril and I am 45

console.log(typeof(Student));                                                       // function



// --------------------------------------------------------------------------------------------------------------------


// Classes under the hood are functions. See the example below. This is older way before the existence of Classes now.

console.log('\n ____________ Can use a function to create a class - this is the older way _______________ \n');


// Function constructor
function Student2(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

Student2.prototype.sayHello = function () { console                                 // this is how you add a method to the function (Class)
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
}

const student101 = new Student2('Ivan', 89, [1, 2, 3, 4]);
console.log(student101);
console.log(student101.age);
console.log(student101.name);
console.log(student101.color);

student101.sayHello();
