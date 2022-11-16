'use strict';

let dice = parseInt(prompt('What D you want to roll?'))

function diceRoll(D) {
    let roll = Math.floor(Math.random()*D)+1
    return roll;
}

function printNumber(number) {
    const newLi = document.createElement('li')
    newLi.innerHTML = `${number}`
    document.querySelector('#target').appendChild(newLi)
}

const numbers = []

let loop = true
let i = 0
while (loop) {
const roll = diceRoll(dice)

if (roll === dice) {
    loop = false
}
else {
    numbers[i] = roll
    i++;
}
}

for (let j = 0; j < numbers.length; j++) {
    printNumber(numbers[j])
};