
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

const   a = prompt('One of the last movies seen', ''),
        b = prompt('by how much you rate it', ''),
        c = prompt('One of the last movies seen', ''),
        d = prompt('by how much you rate it', '');

personalMoviesDB.movies[a] = b; 
personalMoviesDB.movies[c] = d; 
console.log(personalMoviesDB);