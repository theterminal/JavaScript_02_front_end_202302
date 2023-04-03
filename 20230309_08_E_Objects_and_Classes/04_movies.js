// 20230309 - JavaScript Front-End 202302 - Objects and Classes - Exercises
// 04 - Movies - judge: https://judge.softuni.org/Contests/Compete/Index/3792#3


function movieParser(input) {
    let movies = [];                                                // array of objects

    for (const line of input) {
        if (line.includes('addMovie')) {                                    // includes() - checks if the 'string' is included in 'line'
            let name = line.split('addMovie').pop().trim();
            addMovie(name);

        } else if (line.includes('directedBy')) {
            let director = line.split('directedBy').pop().trim();           // (' directedBy ')  - trims the space without using .trim()
            let name = line.split('directedBy').shift().trim();
            adDirector(name, director);

        } else if (line.includes('onDate')) {
            let date = line.split('onDate').pop().trim();
            let name = line.split('onDate').shift().trim();
            addDate(name, date);

        }
    }

    for (const movie of movies) {
        if (movie.hasOwnProperty('name') &&                                 // check to see if the movie has all properties
            movie.hasOwnProperty('director') && 
            movie.hasOwnProperty('date')) {
            console.log(JSON.stringify(movie));                             // stringify the movie to JSON format
        }
    }

    function addMovie(name) {
        movies.push({name: name});
    }

    function adDirector(name, director) {
        let movie = movies.find((m) => m.name === name);                    // .find() - searches and returns the object
        if (movie) {
            movie.director = director;
        }
    }

    function addDate(name, date) {
        let movie = movies.find((m) => m.name === name);
        if (movie) {
            movie.date = date;
        }
    }
}


movieParser([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
