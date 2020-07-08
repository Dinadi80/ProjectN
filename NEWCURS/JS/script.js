
"use strict";
// const personalMoviesDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     ganres: [],
//     privat: false,
//     start: function () {
//         personalMoviesDB.count = +prompt('Нow many movies have you watched?', '');
//         while (personalMoviesDB.count == '' || personalMoviesDB.count == null || isNaN(personalMoviesDB.count)){
//             }
//     },
//     rememberMyFilms: function() {
//         for(let i = 0; i < 2; i++) {
//             const a = prompt('One of the last movies seen', ''),
//                 b = prompt('by how much you rate it', '');
//                         if (a != null && b != null && a != '' && b != ''  && a.length < 50) {
//                     personalMoviesDB.movies[a] = b;
//                     console.log('done');
//                 } else {
//                     console.log('error');
//                     i--;
//                 }
//      }      
//     },
//     detectPersonalLevel: function () {
//         if (personalMoviesDB.count <10) {
//             console.log('Просмотрено мало фильмов');
//         } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30){
//             console.log('Вы классический зритель');
//         } else if (personalMoviesDB.count >= 30){
//             console.log('Вы киноман');
//         } else {
//             console.log('error');
//         }
//         },
//         showMyDB: function(hidden) {
//             if (!hidden) {
//                 console.log(personalMoviesDB);
//             } else {
//                 console.log('We have privat status');
//             }
//         },
//         toggleVisibleMyDB: function() {
//             if (personalMoviesDB.privat){
//                 personalMoviesDB.privat = false;
//             }else {
//                 personalMoviesDB.privat = true;
//             }
//         },
//         writeYourGeneral: function() {
//             // for (let i =1; i<= 3; i++){
//             //     let genre = prompt(`Ваш любимй жанр под номером ${i}`);

//             //     if (genre === '' || genre == null) {
//             //     console.log('Вы ввели некорректные данные');
//             //     i--;
//             //     } else {
//             //         personalMoviesDB.ganres[i-1] = genre;
//             //         }
//             //     }
//             for (let i =1; i<= 2; i++){
//                 let genres = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase();
    
//                 if (genres === '' || genres == null) {
//                 console.log('Вы ввели некорректные данные');
//                 i--;
//                 } else {
//                 personalMoviesDB.ganres = genres.split(', ');
//                 personalMoviesDB.sort();
//                 }
//                 }
//                 personalMoviesDB.ganres.forEach((item, i) => {
//                     console.log(`Любимый жанр ${i + 1} - это ${item}`);
//                 });
//             }
// };

// Функции callback примеры
//writeYourGeneral();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done () {
//     console.log('Я прошел этот урок!');
// }

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
    

// // //console.log(Object.keys(options).length);

//  const arr = [2,3,5,7,8,9];
//  arr.sort(compareNum);
//  console.log(arr);

//  function compareNum(a, b) {
//      return a-b;
//  }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// for (let i=0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// // const products = str.split(", ");
// // console.log(products.join('; '));
// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };
// console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);
// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// // console.log(newArray);
// // console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];

//     console.log(internet);

//     function log(a, b, c) {
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     const num = [2, 5, 7];

//     log(...num);

//     const array = ['a', 'b'];
//     const newArr = [...array];

//     const q = {
//         one: 1,
//         two: 2
//     };

//     const newObj = {...q};

// Динамическая типизация 
// string
// const num = 5;
// console.log("https://vk.com/catalog/" + num);
// const fontSize = 26 + 'px'; 
// // number
// console.log(typeof(+'5'));
// console.log(typeof(parseInt("15px", 15)));
// let answ = +prompt("Hello", "");

// // to boolean

// // 0, "", null, undefinded, NaN / false

// let switcher = null;

// if (switcher) {
//     console.log("Working...");
// }

// switcher = 1;
// if (switcher) {
//     console.log('Working...');
// }

// function smallestDivisor(count) { 
//     if (count <= 0) {
//     return NaN;
//   }
//  else if (count === 1) {
// return count; 
// } else {
//     let num = 2;
//   while (count % num !== 0) { 
//   num = num + 1;
// }
// return num;
// }
// }

// console.log(smallestDivisor(4));

// function isNumberOdd(x) {
// 	return x % 2 !==0;

// 	/* if (x % 2 === 0) {
// 		return false;
// 	} else {
// 		return true;
// }*/
// }
// console.log(isNumberOdd (8));

//Действия с элементами на странице

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circles'),
      wrapper = document.querySelector('.wrapper'),
      heart = wrapper.querySelectorAll('.heart'),
      ontHeart = wrapper.querySelector('.heart');

console.dir(box);
// box.style.backgroundColor = 'blue';
// box.style.width = '200px';
box.style.cssText = 'background -color: red; width: 300px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i=0; i< heart.length; i++) {
//     heart[i].style.backgroundColor = 'green';
// }

heart.forEach(item => {
    item.style.backgroundColor = 'green';
});
const div = document.createElement('div');
//const text = document.createTextNode('Тут был Вася');

div.classList.add('black');
//document.body.append(div);

wrapper.append(div);
//wrapper.prepend(div);

//heart[0].before(div);
//heart[0].after(div);

//circles[0].remove();
//heart[0].replaceWith(circles[0]);

// div.innerHTML = "<h1>hello world</h1>";
// //div.textContent = "yes";
// div.insertAdjacentHTML('beforeend', '<h2>hello</h2>');

// function reverse(str) {
//     let newString = "";
//     for (let i = str.length -1; i >= 0; i--) {
//          newString =  newString + str[i]; 
//     }
//     return newString;
// }
    

//console.log(reverse('hello, world')); 

const reverses = str => {
    const newStr = str.split('').reverse().join('');
    return newStr;
    };
console.log(reverses('cat'));