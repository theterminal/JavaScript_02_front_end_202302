// 20230309 - JavaScript Front-End 202302 - Objects and Classes - Exercises
// 02 - Towns - judge: https://judge.softuni.org/Contests/Compete/Index/3792#1


// _________________ version 2 __________________


function towns2(stringArray) {
    for (const line of stringArray) {
        let [town, latitude, longitude] = line.split(' | ');
        let objTown = {
            town,                                                        // town should be 'town: town', but because they are the same only one is OK
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };
        console.log(objTown);
    }
}


console.log('\n __________ test 21 ___________ \n');
towns2([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);


console.log('\n __________ test 22 ___________ \n');
towns2([
    'Plovdiv | 136.45 | 812.575'
]);


// _________________ version 1 ____________________


function towns(stringArray) {
    stringArray.forEach(element => {
        let [town, latitude, longitude] = element.split(' | ');
        
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        
        let object = {town: town, latitude: latitude, longitude: longitude};                // short syntax is: {town, latitude, longitude}
        
        console.log(object);
    });
}


console.log('\n __________ test 11 ___________ \n');
towns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);


console.log('\n __________ test 12 ___________ \n');
towns([
    'Plovdiv | 136.45 | 812.575'
]);
