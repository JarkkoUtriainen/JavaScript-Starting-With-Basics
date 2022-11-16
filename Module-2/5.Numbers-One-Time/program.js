"use strict";

const numbers = [];

let loop = true;

let i = 0;
while (loop) {
  let user = parseInt(prompt("Give a number (whole numbers only)."));
let check = numbers.includes(user)

if (check === false) {
    numbers[i] = user;
    i++;
  }
else {
  alert(`${user} has already given!`)
  loop = false;
}
}

numbers.sort((a, b) => a - b);

for (let j = 0; j < numbers.length; j++) {
  console.log(numbers[j]);
}
