'use strict';

const names = []

function printName(name) {
    const newLi = document.createElement('li')
    newLi.innerHTML = `${name}`
    document.querySelector('#target').appendChild(newLi)
}

for (let i = 0; i < 6; i++) {
    names[i] = prompt('Give a name: ')
};

names.sort().reverse();

for (let i = 0; i < names.length; i++) {
    printName(names[i])
};