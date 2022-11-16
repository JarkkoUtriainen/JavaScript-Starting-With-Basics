'use strict';

const participants = parseInt(prompt('How many participants are there?'))

const names = []

function printName(name) {
    const newLi = document.createElement('li')
    newLi.innerHTML = `${name}`
    document.querySelector('#target').appendChild(newLi)
}

for (let i = 0; i < participants; i++) {
    names[i] = prompt('Give a name: ')
};

for (let i = 0; i < participants; i++) {
    printName(names[i])
};