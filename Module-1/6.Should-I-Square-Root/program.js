'use strict';

const user = confirm("Should I calculate the square root?");
if (user == true) {
const number = prompt("Give a number: ");

const sqrt = Math.sqrt(number);

const target = document.querySelector('#target');
target.innerHTML = `Square root of -->${number} is -->${sqrt}` }

else if (user == false) {
    const target = document.querySelector('#target');
    target.innerHTML = `The square root is not calculated.`
}
else {
    const target = document.querySelector('#target');
    target.innerHTML = `Error`
}