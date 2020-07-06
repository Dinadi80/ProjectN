
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

//start();
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

//rememberMyFilms();

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
//detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMoviesDB);
    } else {
        console.log('We have privat status');
    }
}
//showMyDB(personalMoviesDB.privat);
function writeYourGeneral() {
    for (let i =1; i<= 3; i++){
        personalMoviesDB.ganres[i-1] = prompt(`Ваш любимй жанр под номером ${i}`);
    }
}
//writeYourGeneral();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done () {
    console.log('Я прошел этот урок!');
}

//learnJS('JavaScript', done);
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);
// // let counter = 0;
// // for (let key in options) {
// //     if (typeof(options[key]) === 'object') {
// //         for (let i in options[key]) {
// //             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// //             counter++;
// //         }
// //     } else {
// //         console.log(`Свойство ${key} имеет значение ${options[key]}`);
// //         counter++;
// //     }
// // }

// // console.log(counter);
    

// //console.log(Object.keys(options).length);

 const arr = [2,3,5,7,8,9];
 arr.sort(compareNum);
 console.log(arr);

 function compareNum(a, b) {
     return a-b;
 }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// for (let i=0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

const str = prompt("", "");
const products = str.split(", ");
console.log(products.join('; '));