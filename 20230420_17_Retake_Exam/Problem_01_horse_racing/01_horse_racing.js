// 20230420 - JavaScript - Front-End - Exam
// Problem 01 - Horse Racing


function horseRacing(inputArr) {
    let horses = inputArr.shift().split('|');
    let commandArr = [...inputArr];
    
    for (const el of commandArr) {
        let command = el.split(' ')[0];         // Retake || Radge || Trouble || Finish
        
        switch (command) {
            case 'Retake': retake(el);          // console.log(horses, '- OUT of Retake\n');
                break;
            case 'Trouble': trouble(el);        // console.log(horses, '- OUT Trouble\n');
                break;
            case 'Rage': rage(el);              // console.log(horses, '- OUT of Rage\n');
                break;
            case 'Miracle': miracle();          // console.log(horses, '- OUT of Miricle\n');
                break;
            case 'Finish': finish();
                return; 
            default:
                console.log('Unknown command!'); break;
        }
    }

    function retake(element) {
        let horse1 = element.split(' ')[1];
        let horse2 = element.split(' ')[2];
        let indexHorse1 = horses.indexOf(horse1);
        let indexHorse2 = horses.indexOf(horse2);

        if (indexHorse1 > -1 && indexHorse1 > -1 && indexHorse1 < indexHorse2) {
            horses.splice(indexHorse1, 1, horse2);
            horses.splice(indexHorse2, 1, horse1);
            console.log(`${horse1} retakes ${horse2}.`);
        }
    };

    function trouble(element) {
        let currentHorse = element.split(' ')[1];
        let indexCurrentHorse = horses.indexOf(currentHorse);

        if (indexCurrentHorse === -1) {
            console.log('Horse is NOT in the Horses Array!');
            return;
        }

        let indexCurrentHorseM1Pos = indexCurrentHorse - 1;
        let horseM1 = horses[indexCurrentHorseM1Pos];

        if (indexCurrentHorse > 0 && indexCurrentHorse < horses.length) {
            horses.splice(indexCurrentHorseM1Pos, 1, currentHorse);
            horses.splice(indexCurrentHorse, 1, horseM1);
            console.log(`Trouble for ${currentHorse} - drops one position.`);
        }
        
    }

    function rage(element) {
        let currentHorse = element.split(' ')[1];
        let indexCurrentHorse = horses.indexOf(currentHorse);
        let indexFirstHorse = horses.length - 1;
        let indexDiff = indexFirstHorse - indexCurrentHorse;

        if (indexDiff > 0 && indexDiff < 3) {
            horses.push(...horses.splice(indexCurrentHorse, 1));
        } else if (indexDiff > 2){
            horses.splice(indexCurrentHorse + 2, 0, ...horses.splice(indexCurrentHorse, 1));
        }
        console.log(`${currentHorse} rages 2 positions ahead.`);
    }

    function miracle() {
        let currentHorse = horses[0];
        horses.push(horses.shift());
        console.log(`What a miracle - ${currentHorse} becomes first.`);
    }

    function finish() {
        result = ''
        for (let i = 0;i < horses.length;i++) {
            if (i === horses.length - 1) {
                result += `${horses[i]}`;
            } else {
                result += `${horses[i]}->`;
            }
        }
        console.log(result);
        console.log(`The winner is: ${horses[horses.length - 1]}`);
    }
  }


console.log('\n _________________ KK test 101 _________________ \n');


horseRacing([
    'Bella|Alexia|Sugar|Kiril',
    'Retake Alexia Sugar',
    'Rage Bella',
    'Trouble Bella',
    'Miracle',
    'Finish'
]);


console.log('\n _________________ test 11 _________________ \n');


horseRacing([
    'Bella|Alexia|Sugar',
    'Retake Alexia Sugar',
    'Rage Bella',
    'Trouble Bella',
    'Finish'
])


console.log('\n _________________ test 12 _________________ \n');


horseRacing([
    'Onyx|Domino|Sugar|Fiona',
    'Trouble Onyx',
    'Retake Onyx Sugar',
    'Rage Domino',
    'Miracle',
    'Finish'
]);


console.log('\n _________________ test 13 _________________ \n');


horseRacing([
    'Fancy|Lilly',
    'Retake Lilly Fancy',
    'Trouble Lilly',
    'Trouble Lilly',
    'Finish',
    'Rage Lilly'
])
