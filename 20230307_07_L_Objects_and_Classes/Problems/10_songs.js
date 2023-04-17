// 20230307 - JavaScript Front-End 202302 - Objects and Classes
// 10 - Songs - judge: https://judge.softuni.org/Contests/Practice/Index/3791#9


// ________________ version 2 ________________


function songs(inputArray) {
    class Song{
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let numSongs = inputArray.shift();
    let listType = inputArray.pop();
    let songs = [];

    for (let i = 0; i < numSongs; i++)  {
        let [type, name, time] = inputArray[i].split('_');
        let song = new Song(type, name, time);
        if (song.type === listType || listType === 'all') {
            songs.push(song);
        }
    }

    songs.forEach((x) => console.log(x.name));
}


console.log('\n _____________ test 21 _____________ \n');
songs([
    3,
    'favorite_DownTown_3:14',
    'favorite_Kiss_4:16',
    'favorite_Smooth Criminal_4:01',
    'favorite'
]);


console.log('\n _____________ test 22 _____________ \n');
songs([
    2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
]);


// ___________________ version 1 __________________


function songs(inputArray) {
    class Song{
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let numSongs = inputArray[0];
    let listType = inputArray[inputArray.length - 1];
    let songs = [];

    for (let i = 1; i < inputArray.length - 1; i++)  {
        let [type, name, time] = inputArray[i].split('_');
        let song = new Song(type, name, time);
        if (song.type === listType || listType === 'all') {
            songs.push(song);
        }
    }

    for (let j = 0; j < songs.length; j++) {
        let song = songs[j];
        console.log(song.name);
    }
}


console.log('\n _____________ test 11 _____________ \n');
songs([
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);


console.log('\n _____________ test 12 _____________ \n');
songs([
    2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
]);
