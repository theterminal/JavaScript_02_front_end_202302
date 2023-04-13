// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - More Exercise
// More Exercise 08 - The Pyramid of King Djoser - judge: https://judge.softuni.org/Contests/Practice/Index/3787#7


function thePyramid(base, height) {
    let stone = 0; let marble = 0; let lapisLazuli = 0; let gold = 0; let level = 0;

    for (let i = base; i > 0; i -= 2) {
        level++;

        if (i > 2) {
            stoneCurrentLevel = ((i - 2) ** 2) * height;
            stone += stoneCurrentLevel;
        }

        let marbleOrLapisLazuliCurrentLevel = ((i * 4 - 4) * height);
        if (level % 5 === 0 && i > 2) {
            lapisLazuli += marbleOrLapisLazuliCurrentLevel;
        } else if (i > 2) {
            marble += marbleOrLapisLazuliCurrentLevel;
        }

        if (i === 2) {
            gold += 4 * height;
        } else if (i === 1) {
            gold += 1 * height;
        }
    }
    
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(level * height)}`);
}


thePyramid(11, 1);
thePyramid(11, 0.75);
thePyramid(12, 1);
thePyramid(23, 0.5)
