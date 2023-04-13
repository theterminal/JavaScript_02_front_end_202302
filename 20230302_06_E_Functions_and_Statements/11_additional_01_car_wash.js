// 20230303 - JavaScript Front-End 202302 - JS Functions and Statements - More Exercise
// More Exercises 01 - Car Wash - judge: https://judge.softuni.org/Contests/Practice/Index/3790#0


// __________________ version 02 __________________ KK


function carWash2(commands) {
    let cleanDirty = 10;
    const soap = commands.shift();

    for (let i = 0; i < commands.length; i++) {
      switch (commands[i]) {
        case 'soap': cleanDirty += 10; break;
        case 'water': cleanDirty *= 1.2; break;
        case 'vacuum cleaner': cleanDirty *= 1.25; break;
        case 'mud': cleanDirty *= 0.9; break;
        default: break;
      }
    }

    console.log(`The car is ${cleanDirty.toFixed(2)}% clean.`);
}


carWash2(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash2(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);


// _______________ version 01 _______________ CGPT


function carWash(commands) {
    let cleanDirty = 0;

    for (let i = 0; i < commands.length; i++) {
      switch (commands[i]) {
        case 'soap':
          cleanDirty += 10;
          break;
        case 'water':
          cleanDirty *= 1.2;
          break;
        case 'vacuum cleaner':
          cleanDirty *= 1.25;
          break;
        case 'mud':
          cleanDirty *= 0.9;
          break;
        default:
          break;
      }
    }
    console.log(`The car is ${cleanDirty.toFixed(2)}% clean.`);
  }


  carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
  carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
