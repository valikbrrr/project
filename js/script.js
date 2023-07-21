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


let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        continue;
    } 
    console.log(i);
    i++;
}



let i = 2;

do {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
    i++;
}
while (i <= 16);


const arr  = [];

for (let i = 5; i < 11; i++) {
    arr[i - 5] = i;
}

console.log(arr);
return arr;



    let i = 2;                        

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }



        const arra = [];
    
        for (let i = 5; i < 11; i++) {
            arra[i - 5] = i;
        }
    
        console.log(arra);
        return arra;


const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

    
for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}

console.log(result);



const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; ++i) {
    if (typeof(data[i]) === "number") {
        data[i] = data[i] * 2; 
    } else if (typeof(data[i]) === "string") {
        data[i] = `${data[i]} - done`;
    }
}

console.log(data);



const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i]
}

console.log(result);

