
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

let numberOffilms;

function start() {
    numberOffilms = +prompt('Нow many movies have you watched?', '');
    while (numberOffilms == '' || numberOffilms == null || isNaN(numberOffilms)){

    }
}

start();
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


 function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {

if (personalMoviesDB.count <10) {
    console.log('Просмотрено мало фильмов');
} else if (personalMoviesDB >= 10 && personalMoviesDB < 30){
    console.log('Вы классический зритель');
} else if (personalMoviesDB >= 30){
    console.log('Вы киноман');
} else {
    console.log('error');
}
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMoviesDB);
    } else {
        console.log('We have privat status');
    }
}
showMyDB(personalMoviesDB.privat);
function writeYourGeneral() {
    for (let i =1; i<= 3; i++){
        personalMoviesDB.ganres[i-1] = prompt(`Ваш любимй жанр под номером ${i}`);
    }
}
writeYourGeneral();

    


