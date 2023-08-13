"use strict";


// alert('hi');

// const result = confirm("you");

// const answer = +prompt("vam est 18?", "");
// console.log(answer + 5);





// const answers = [];

// answers[0] = prompt("как ваше имя?", "");
// answers[1] = prompt("asxdcfvbnm?", "");
// answers[2] = prompt("сколько вам лет?", "");

// document.write(answers);




// const conclusion = "";

// conclusion = prompt("напиши своё имя", "");

// document.write(`привет, ${conclusion}`);



// const user = "vano";

// alert(`привет,  ${user}`);


// if (1) {
//     console.log ("ok");
// } else {
//     console.log ("error");
// }


// const num = 50;

// (num === 50) ? console.log("ok") : console.log("error");


// const num = 50;

// switch (num) {
//     case 49:
//         console.log("no");
//         break;
//     case 100:
//         console.log("no_2");
//         break;
//     case 50:
//         console.log("yes");
//         break;
//     default:
//         console.log("yeee");
//         break;
// }


// const ham = 1;
// const fries = 2;

// if (ham && fries) {
//     console.log("I'm full!");
// } else {
//     console.log("I'm hungry:(");
// }


// const adv_1 = true;
// const adv_2 = true;

// if (adv_1 && adv_2) {
//     console.log("good watching!)");
// } else if (adv_1 || adv_2) {
//     console.log("look one yet adv");
// } else if (!adv_1 && !adv_2) {
//     console.log("look two adv");
// } else {
//     console.log("error");
// }


// let num = 20;

// while (num < 25) {
//     console.log(num);
//     num++;
// }



// let num = 20;

// do {
//     console.log(num++);
// } 
// while (num < 26);

// let j = 1;

// for (let i = 1; i < 20; i++) {
//     console.log(i);
//     do {
//         console.log(j);
//         j++;
//     }
//     while (j < 10);
// }



// for (let i = 1; i < 10; i++) {
//     console.log(i);
//     for (let j = 1; j < 10; j++) {
//         console.log(j);
//     }    
// }



// *
// **
// ***
// ****
// *****
// ******

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += "\n";
// }

// console.log(result);



// let result = "";

// for (let i = 6; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);



// first: for (let i = 0; i < 3; i++) {
//     console.log(`first level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`third level: ${k}`);
//         }    
//     }    
// }


// вывел чётные числа
// fp: for (let i = 2; i < 11; i++) {
//     if (i % 2 === 1) continue fp;
//     console.log(i);
// }


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }


// let i = 2;

// while (i <= 16) {
//     if (i % 2 === 0) {
//         continue;
//     } 
//     console.log(i);
//     i++;
// }



// let i = 2;

// do {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }
// while (i <= 16);


// const arr  = [];

// for (let i = 5; i < 11; i++) {
//     arr[i - 5] = i;
// }

// console.log(arr);
// return arr;



//     let i = 2;                        

//     while (i <= 16) {
//         if (i % 2 === 0) {
//             i++;
//             continue;
//         } else {
//             console.log(i);
//         }
//         i++;
//     }



//         const arra = [];
    
//         for (let i = 5; i < 11; i++) {
//             arra[i - 5] = i;
//         }
    
//         console.log(arra);
//         return arra;


// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

    
// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }

// console.log(result);



// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; ++i) {
//     if (typeof(data[i]) === "number") {
//         data[i] = data[i] * 2; 
//     } else if (typeof(data[i]) === "string") {
//         data[i] = `${data[i]} - done`;
//     }
// }

// console.log(data);



// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]
// }

// console.log(result);


//      *
//     ***
//    *****
//   *******
//  *********
// ***********    

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)



// *****
//  ****
//   ***
//    **
//     *

// const lines = 5;
// let result = "";

// for (let i = 0; i < lines; i++) {
//     for (let j = 0; j < i * 1; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < lines - i; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

// **********
// *        *
// *        *
// *        *
// **********

// const lines = 5;
// let result = "";

// for (i = 0; i < lines; ++i) {
//     if (i === 0 || i === 4) {
//             result += "*".repeat(10);
//             result += "\n";
//         } else {
//             result += "*" + " ".repeat(8) + "*";
//             result += "\n";
//         }
// }

// console.log(result);



// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt("На сколько оцените его?", "");

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//         console.log("error");
//         i--;
//     }
// }


// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt("На сколько оцените его?", "");

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//         console.log("error");
//         i--;
//     }
// } 


// if (personalMovieDB.count < 10) {
//     console.log("МАЛО");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//     console.log("classic");
// } else if (personalMovieDB.count > 30) {
//     console.log("movieMan");
// } else {
//     console.log("error");
// }

// console.log(personalMovieDB.count);

// let num = 0;

// while (num < 2) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt("На сколько оцените его?", "");

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//         console.log("error");
//         i--;
//     }
//     num++;
// }




// function showFirstMessage(text) {
//     console.log(text);
//     let num = 20;
// }

// showFirstMessage("hello");
// console.log


// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));









// const usdCurr = 20;
// const discount = 0.9;

// function convert(amount, curr) {
//     console.log(curr * amount);
//     return curr * amount;
// } 

// function promotion(result) {
//     console.log(result * discount);
// }

// promotion(convert(500, usdCurr));


// function sayHello(a) {
//     return `hello ${a}`;
// }

// sayHello("artem");



// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// returnNeighboringNumbers(5);


// function getMathResult(a, b) {
//     if (typeof(b) !== "number" || b <= 0) {
//         console.log(a);
//         return a;
//     }
//     let result = "";
//     for (let i = 1; i <= b; i++) {
//         result += a * i;
//         if (i !== b) {
//         result += "---";
//         }
//     }
//     console.log(result);
//     return result;
// }

// getMathResult(5, 10);










// const ac = 20;
// const bc = 25;


// function calc(a, b) {
//     console.log(a * b);
// }

// calc(ac, bc);







// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();



// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Один из последних просмотренных фильмов?", ""),
//               b = prompt("На сколько оцените его?", "");
    
//         if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log("done");
//         } else {
//             console.log("error");
//             i--;
//         }
//     }
// }

// rememberMyFilms();


// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt("На сколько оцените его?", "");

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//         console.log("error");
//         i--;
//     }
// } 



// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("МАЛО");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//         console.log("classic");
//     } else if (personalMovieDB.count > 30) {
//         console.log("movieMan");
//     } else {
//         console.log("error");
//     }
// }
 
// detectPersonalLevel();

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);


// function writeYourGenres() {
//     for (let i = 1; i < 4; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYourGenres();

// console.log(personalMovieDB.count);









// function calculateVolumeAndArea(a) {
//     if (typeof(a) !== "number" || a <= 0 || !Number.isInteger(a)) {
//         console.log("При вычислении произошла ошибка");
//         return "При вычислении произошла ошибка";
//     } else {
//     console.log(`Объём куба: ${a * a * a}, площадь всей поверхности: ${a * a * 6} `);
//     return `Объём куба: ${a * a * a}, площадь всей поверхности: ${a * a * 6} `;
//     }
// }

// calculateVolumeAndArea(5);


// function getCoupeNumber(a) {
//     if (typeof(a) !== "number" || a < 0 || !Number.isInteger(a)) {
//      console.log("Ошибка. Проверьте правильность введенного номера места");
//      return "Ошибка. Проверьте правильность введенного номера места"
//     }
//     if (a === 0 || a > 36) {
//         console.log("Таких мест в вагоне не существует");
//         return "Таких мест в вагоне не существует";
//     }
//     if (a > 0 && a <= 4) {
//         console.log(1);
//         return 1;
//     }
//     if (a > 4 && a <= 8) {
//         console.log(2);
//         return 2;
//     }
//     if (a > 8 && a <= 12) {
//         console.log(3);
//         return 3;
//     }
//     if (a > 12 && a <= 16) {
//         console.log(4);
//         return 4;
//     }
//     if (a > 16 && a <= 20) {
//         console.log(5);
//         return 5;
//     }
//     if (a > 20 && a <= 24) {
//         console.log(6);
//         return 6;
//     }
//     if (a > 24 && a <= 28) {
//         console.log(7);
//         return 7;
//     }
//     if (a > 28 && a <= 32) {
//         console.log(8);
//         return 8;
//     }   
//     if (a > 32 && a <= 36) {
//         console.log(9);
//         return 9;
//     }
// }

// getCoupeNumber(-10);



// ????????????????
// function getCoupeNumber(number) {
//     if (isNaN(number) || Math.trunc(number) !== number || number < 0) {
//       return "Ошибка. Проверьте правильность введенного номера места";
//     }
   
//     if (number === 0 || number > 36) {
//       return "Таких мест в вагоне не существует";
//     }
   
//     return Math.ceil(number / 4);
//   }




// function getTimeFromMinutes(minutes) {

//     if (typeof(minutes) !== "number" || minutes < 0 || minutes > 600 || !Number.isInteger(minutes)) {
//         console.log("Ошибка, проверьте данные");
//         return "Ошибка, проверьте данные";
//     }

//     if (minutes >= 0 && minutes < 60) {
//     console.log(`Это 0 часов и ${minutes} минут`);
//     return `Это 0 часов и ${minutes} минут`;
//     }

//         if (minutes >= 60 && minutes < 120) {
//         console.log(`Это 1 час и ${minutes - 60} минут`);
//         return `Это 1 час и ${minutes - 60} минут`;
//         }

//         if (minutes >= 120 && minutes < 180) {
//             console.log(`Это 2 часа и ${minutes - 120} минут`);
//             return `Это 2 часа и ${minutes - 120} минут`;
//             }

//             if (minutes >= 180 && minutes < 240) {
//                 console.log(`Это 3 часа и ${minutes - 180} минут`);
//                 return `Это 3 часа и ${minutes - 180} минут`;
//                 }

//                 if (minutes >= 240 && minutes < 300) {
//                     console.log(`Это 4 часа и ${minutes - 240} минут`);
//                     return `Это 4 часа и ${minutes - 240} минут`;
//                     }

//                     if (minutes >= 300 && minutes < 360) {
//                         console.log(`Это 5 часов и ${minutes - 300} минут`);
//                         return `Это 5 часов и ${minutes - 300} минут`;
//                         }

//                         if (minutes >= 360 && minutes < 420) {
//                             console.log(`Это 6 часов и ${minutes - 360} минут`);
//                             return `Это 6 часов и ${minutes - 360} минут`;
//                             }

//                             if (minutes >= 420 && minutes < 480) {
//                                 console.log(`Это 7 часов и ${minutes - 420} минут`);
//                                 return `Это  часов и ${minutes - 420} минут`;
//                                 }

//                                 if (minutes >= 480 && minutes < 540) {
//                                     console.log(`Это 8 часов и ${minutes - 480} минут`);
//                                     return `Это 8 часов и ${minutes - 480} минут`;
//                                     }

//                                     if (minutes >= 540 && minutes < 600) {
//                                         console.log(`Это 9 часов и ${minutes - 540} минут`);
//                                         return `Это 9 часов и ${minutes - 540} минут`;
//                                         }

//                                         if (minutes === 600) {
//                                             console.log(`Это 10 часов`);
//                                             return `Это 10 часов`;
//                                             }
// }

// getTimeFromMinutes(50);



// function findMaxNumber(a, b, c, d) {
//     if (typeof(a) !== "number" || typeof(b) !== "number" || typeof(c) !== "number" || typeof(d) !== "number") {
//         console.log(0);
//         return 0;
//     }

//     if (a > b && a > c && a > d) {
//         console.log(a);
//         return a;
//     }

//     if (b > a && b > c && b > d) {
//         console.log(b);
//         return b;
//     }

//     if (c > a && c > b && c > d) {
//         console.log(c);
//         return c;
//     }
    
//     if (d > a && d > b && d > c) {
//         console.log(d);
//         return d;
//     }
// }

// findMaxNumber(1, 5, "6.6", 11);





// function getTimeFromMinutes(minutesTotal) {

//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;

//     let hoursStr = "";

//     switch (hours) {
//         case 0: 
//             hoursStr = "часов";
//             break; 

//         case 1:
//             hoursStr = "час";
//             break;

//         case 2: 
//         case 3:
//         case 4:
//             hoursStr = "часа";
//             break;
//         default:
//             hoursStr = "часов";
//             break;
//     }

//     console.log(`Это ${hours} ${hoursStr} и ${minutes} минут`);
//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// getTimeFromMinutes(100);





// function fib(step) {
//     if (typeof(step) !== "number" || step <= 0 || step % 1 !== 0) {
//         return "";
//     }

//     const arr = [0];

//     for (let i = 1; i < step; i++) {
//         if (i === 1) {
//         arr.push(1);
//         } else {
//             arr.push(arr[i - 2] + arr[i - 1]);
//         }
//     }

//     console.log(arr);
//     return arr.join("");
// }

// fib(10);



// const options = {
//     name: "qwer",
//     width: 1024,
//     color: {
//         bg: "ReadableByteStreamController",
//         border: "black",
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// console.log(Object.keys(options).length);



// const arr = [1, 2, 3, 4, 5, 6, 7];

// arr.pop();
// arr.push(2, 4);

// console.log(arr);


// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }





// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }


// const num = {
//     a: 2,
//     b: 4,
//     c: {
//         x: 5,
//         d: 7
//     }
// };


// copy(num);
// const newNum = copy(num);

// newNum.a = 10;

// console.log(newNum);
//  console.log(num);


// const add = {
//     j: 13,
//     g: 21
// };

// const clone = Object.assign({}, add);

// clone.j = 25;


// console.log(add);
// console.log(clone);






// const oldArr = ["a", "b", "c"];

// const newArr = oldArr.slice();

// newArr[2] = "adsfgsdg";

// console.log(newArr);
// console.log(oldArr);








// const video = ["a", "b", "c"],
//       blogs = ["w", "n", "l"],
//       internet = [...video, ...blogs, "ooo"];

// console.log(internet);
  

// const array = ["a", "b"];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};




// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };


// function showExperience(plan) {

//     const {exp} = plan.skills;
//     console.log(exp);
//     return exp;
// }

// showExperience(personalPlanPeter);








// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%',
//             ruby: '30%'
//         },
//         exp: '1 month'
//     }
// };

// function showProgrammingLangs(plan) {
//     let a = "";

//     const {programmingLangs} = plan.skills;

//     for (let key in programmingLangs) {

//         a += `Язык ${key} изучен на ${programmingLangs[key]}\n`;

//         console.log(`Язык ${key} изучен на ${programmingLangs[key]}\n`);
//     }

//     return a;
// }

// showProgrammingLangs(personalPlanPeter);


// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }

//     return str;
// }

// showProgrammingLangs(personalPlanPeter);







// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%',
//             ruby: '30%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//     const {age} = plan;
//     const {languages} = plan.skills;

//     let str = `Мне ${age} лет и я владею языками: `;

//         languages.forEach(function(aaa) {
//         str += `${aaa.toUpperCase()}`;
//         });
//         console.log(str);
//         return str;
//     }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);







//     console.log(`Мне ${a} лет и я владею языками: ${b.toUpperCase()}`);
// }


// const {age} = personalPlanPeter;
// const {languages} = personalPlanPeter.skills;
// showAgeAndLangs(age, languages);





// showAgeAndLangs: function(plan) {
//     const {age} = plan;
//     const {languages} = plan.skills;
//     let str = `Мне ${age} и я владею языками: `;

//     languages.forEach(function(lang) {
//         str += `${lang.toUpperCase()} `;
//     });
        
//     return str;
// }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);






// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let name = "";
//     for (let i = 0; i < 4; i++) {
//         name += `${arr[i]} `;
//     }
//     console.log(`Семья состоит из: ${name} `);
// }

// showFamily(family);

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let name = "";
//     if (arr.length == 0) {
//         console.log("Семья пуста");
//         return "Семья пуста";
//     } else {
//         for (let i = 0; i < family.length; i++) {
//             name += `${arr[i]} `;
//         }
//     console.log(`Семья состоит из: ${name} `);
//     return `Семья состоит из: ${name} `;
//     }
// }

// showFamily(family);


// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     for (let i in arr) {
//     console.log(`${arr[i].toLowerCase()}`);
//     }
// }

// standardizeStrings(favoriteCities);



// const someString = 'This is some strange string';

// function reversed(str) {
//     if (typeof(str) !== "string") {
//         console.log("Ошибка!");
//         return "Ошибка!";
//     }
//     const arr = [];

//     for (let i in str) {
//         arr[i] = str[i];
//     }
    
//     let revArr = [];
//     revArr = arr.reverse().join("");
//     console.log(revArr);
//     return revArr;
// }

// reversed(someString);




// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

// const reversed = array1.reverse();
// console.log('reversed:', reversed);


// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';


//     for (let i in arr) {
//         if (arr[i] === missingCurr) {
//             continue;
//         }
//         str += `${arr[i]}\n`;
//     }
//     console.log(str);
//     return str;
// }

// availableCurr([...baseCurrencies, ...additionalCurrencies], 'USD');




const baseCurrencies = ["USD"];
const additionalCurrencies = [];

// function availableCurr(arr, missingCurr) {
//     let str = "";

// arr.length === 0 ? str = "Нет доступных валют" : str = "Доступные валюты:\n";

//     for (let i in arr) {
//             if (arr[i] === missingCurr) {
//                continue
//             }
//             str += `${arr[i]} \n`
        
//     }
//     console.log(str);
//     return str;
// }

// availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');



function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    // arr.forEach(function(curr, i) {
    //     if (curr !== missingCurr) {
    //         str += `${curr}\n`;
    //     }
    // });

    // // Или
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === missingCurr) {
            continue;
        }
        str += `${arr[i]}\n`;
    }

    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');








