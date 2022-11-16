'use strict';

const numberD = parseInt(prompt('How many D6 you want to use?'))
const userTotal = parseInt(prompt('What total do you want to use?'))

let userTotals = 0

let j = 0
do {

let total = 0;
for (let i = 0; i < numberD; i++) {
let roll = Math.floor(Math.random()*6) + 1
total += roll
};

if (total == userTotal) {
userTotals++
}

j++

} while (j < 100000);

let probability = ((userTotals / 100000*100).toFixed(2));

const target1 = document.querySelector('#target');
target1.innerHTML = `Probability to get sum ${userTotal} with ${numberD} dice is ${probability}%`
