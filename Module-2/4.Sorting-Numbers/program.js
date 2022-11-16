"use strict";

const numbers = [];

let loop = true;

let i = 0;
while (loop) {
  let user = parseInt(prompt("Give a number (whole numbers only)."));
  if (user == 0) {
    loop = false;
  } else {
    numbers[i] = user;
    i++;
  }
}

numbers.sort((a,b) => b-a)

for (let j = 0; j < numbers.length; j++) {
  console.log(numbers[j]);
}
