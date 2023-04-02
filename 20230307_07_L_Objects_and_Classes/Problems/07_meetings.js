// 20230307 - JavaScript Front-End 202302 - Objects and Classes
// 07 - Meeting - judge: https://judge.softuni.org/Contests/Practice/Index/3791#6


function meetings(inputArray) {
    let meetingArray = {};

    for (const line of inputArray) {
        let [day, name] = line.split(' ');
        
        if (meetingArray.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetingArray[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const key in meetingArray) {
        console.log(`${key} -> ${meetingArray[key]}`);
    }
}


console.log('\n ____________ test 01 ___________ \n')
meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);


console.log('\n ____________ test 02 ___________ \n')
meetings([
    'Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'
]);