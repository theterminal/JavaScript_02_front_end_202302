// 20230303 - JavaScript Front-End 202302 - JS Functions and Statements - More Exercise
// More Exercises 04 - Radio Crystals - judge: https://judge.softuni.org/Contests/Practice/Index/3790#3


function radioCrystals(input) {
    const desiredThickness = input.shift();
    
    for (let i = 0; i < input.length; i++) {
        let result = `Processing chunk ${input[i]} microns\n`;
        let currentCrystal = input[i];
        
        [currentCrystal, result] = cutIn4(currentCrystal, result);
        [currentCrystal, result] = lap20Percent(currentCrystal, result);
        [currentCrystal, result] = grind20Mic(currentCrystal, result);
        [currentCrystal, result] = etch2Mic(currentCrystal, result);

        if (currentCrystal === desiredThickness - 1) {
            currentCrystal += 1;
            result += `X-ray x1\n`;
        }

        result += `Finished crystal ${currentCrystal} microns`;
        console.log(result);
    }

    function cutIn4(number, result) {
        let counterCut = 0;
        
        if (number / 4 >= desiredThickness) {
            while ((number / 4) >= desiredThickness) {
                counterCut++;
                number /= 4;
            }

            number = Math.floor(number);
            result += `Cut x${counterCut}\nTransporting and washing\n`;
            return [number, result];
        } else {
            return [number, result];
        }
    }

    function lap20Percent(number, result) {
        let counterLap = 0;

        if ((number * 0.8) >= desiredThickness) {
            while ((number * 0.8) >= desiredThickness) {
                counterLap++;
                number *= 0.8;
            }

            number = Math.floor(number);
            result += `Lap x${counterLap}\nTransporting and washing\n`;
            return [number, result];
        } else {
            return [number, result];
        }
    }

    function grind20Mic(number, result) {
        let counterGrind = 0;

        if ((number - 20) >= desiredThickness) {
            while ((number - 20) >= desiredThickness) {
                counterGrind++;
                number -= 20;
            }

            number = Math.floor(number);
            result += `Grind x${counterGrind}\nTransporting and washing\n`;
            return [number, result];
        } else {
            return [number, result];
        }
    }

    function etch2Mic(number, result) {
        let counterEtch = 0;

        if ((number - 2) >= (desiredThickness - 1)) {
            while ((number - 2) >= (desiredThickness - 1)) {
                counterEtch++;
                number -= 2;
            }

            number = Math.floor(number);
            result += `Etch x${counterEtch}\nTransporting and washing\n`;
            return [number, result];
        } else {
            return [number, result];
        }
    }
}


radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);
