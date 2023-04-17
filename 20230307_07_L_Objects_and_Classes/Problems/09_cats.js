// 20230307 - JavaScript Front-End 202302 - Objects and Classes
// 09 - Cats - judge: https://judge.softuni.org/Contests/Practice/Index/3791#8


function cats(inputArray) {
    class Cat{
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];
    
    for (const line of inputArray) {
        let [name, age] = line.split(' ');
        age = Number(age);
        cats.push(new Cat(name, age));
    }

    for (const cat of cats) {
        cat.meow();
    }
}


cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
