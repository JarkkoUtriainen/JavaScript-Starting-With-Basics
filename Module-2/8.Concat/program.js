'use strict';

const names = []

names[0] =  "Johnny"
names[1] = "DeeDee"
names[2] = "Joey"
names[3] = "Marky"

function concat(array) {
    let newStr = ""
    for (let i = 0; i < array.length; i++) {
        newStr += array[i]
    }
    return newStr;
}

const target = document.querySelector("#target");
target.innerHTML = `${concat(names)}`