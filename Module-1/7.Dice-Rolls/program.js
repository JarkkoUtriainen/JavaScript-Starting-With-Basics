'use strict';

const rolls = parseInt(prompt("How many D6 dice you want to roll?"));

let total = 0
for (let i = 0; i < rolls; i++) {
    let roll = Math.floor(Math.random()*6) + 1
    total += roll
};

const target1 = document.querySelector('#target');
target1.innerHTML = `Total of dice rolls is ${total}.`
