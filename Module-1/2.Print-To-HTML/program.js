"use strict";

const Uname = prompt("What is your name: ");
const target = document.querySelector('#greet');
target.innerHTML = `Hello, ${Uname}!`; 