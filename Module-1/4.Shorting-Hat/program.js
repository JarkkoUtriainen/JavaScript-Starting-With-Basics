'use strict';

const user = prompt("I'm the sorting hat. Please tell me what is your name?");
const target1 = document.querySelector("#target");
const house = Math.floor(Math.random()*4+1);

if (house == 1) {
    target1.innerHTML = `I know where to put you! ${user} you are Griffindor!.`;
}
else if (house == 2) {
    target1.innerHTML = `I know where to put you! ${user} you are Rawenclaw!.`;
}
else if (house == 3) {
    target1.innerHTML = `I know where to put you! ${user} you are Slytherin!.`;
}
else if (house == 4) {
    target1.innerHTML = `I know where to put you! ${user} you are Hufflepuff!.`;
}
else {
    target1.innerHTML = `I dont know where to put you! ${user} you are Muggle!.`;
}