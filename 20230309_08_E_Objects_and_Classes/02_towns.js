// 20230309 - JavaScript Front-End 202302 - Objects and Classes - Exercises
// 02 - Towns - judge: https://judge.softuni.org/Contests/Compete/Index/3792#1


function towns(stringArray) {
    stringArray.forEach(element => {
        let [town, latitude, longitude] = element.split(' | ');
        
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        
        let object = {town: town, latitude: latitude, longitude: longitude};
        
        console.log(object);
    });
}


towns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);
