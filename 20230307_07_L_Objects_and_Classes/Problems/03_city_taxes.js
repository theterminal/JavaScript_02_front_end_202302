// 20230307 - JavaScript Front-End 202302 - Objects and Classes
// 03 - City Taxes - judge: https://judge.softuni.org/Contests/Practice/Index/3791#2


function cityTaxes(name, population, treasury) {
    let city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.trunc(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            this.population += Math.trunc(this.population * (percentage / 100));
        },
        applyRecession(percentage) {
            this.treasury -= Math.trunc(this.treasury * (percentage / 100));
        }
    }

    return city;
}


// ___________ Test 1 _______________


// const city = cityTaxes('Tortuga', 7000, 15000);
// console.log(city);


// ___________ Test 2 _______________


const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);

city.applyGrowth(5);
console.log(city.population);

console.log(city);                                                  // It'll show the current state of the city object after 'Test 2'


// __________ Test 3 ________________


// console.log(cityTaxes());                                              // Shows the function properties;
