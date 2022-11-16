'use strict';

function diceRoll() {
    let roll = Math.floor(Math.random()*6)+1
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
const roll = diceRoll()

if (roll === 6) {
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