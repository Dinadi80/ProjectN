
"use strict";

//const result = confirm('Are you here?');
//const answer = +prompt("How old are you?", "");
//console.log(typeof(answer));

//const answers = [];

//answers[0] = prompt("What is you name", '');
//answers[1] = prompt("What is you fistname", '');
//answers[2] = prompt("How old are you", '');

//document.write(answers);
//const category = 'toys';

//console.log(`https://someurl.com/${category}/5`);

const numberOffilms = +prompt('Нow many movies have you watched?', '');
const personalMoviesDB = {
    count: numberOffilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: false
};

/* const   a = prompt('One of the last movies seen', ''),
        b = prompt('by how much you rate it', ''),
        c = prompt('One of the last movies seen', ''),
        d = prompt('by how much you rate it', '');

personalMoviesDB.movies[a] = b; 
personalMoviesDB.movies[c] = d;  */

for(let i = 0; i < 2; i++) {
    const a = prompt('One of the last movies seen', ''),
        b = prompt('by how much you rate it', '');

        if (a != null && b != null && a != '' && b != ''  && a.length < 50) {
            personalMoviesDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
       
}
if (personalMoviesDB.count <10) {
    console.log('Просмотрено мало фильмов');
} else if (personalMoviesDB >= 10 && personalMoviesDB < 30){
    console.log('Вы классический зритель');
} else if (personalMoviesDB >= 30){
    console.log('Вы киноман');
} else {
    console.log('error');
}



console.log(personalMoviesDB);

    



