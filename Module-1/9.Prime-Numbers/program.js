'use strict'

const number = parseInt(prompt('Give a positive number that is whole number: '))

let isPrime = true;

if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
        }
    }


const target = document.querySelector('#target');
if (isPrime) {
    target.innerHTML = `${number} is prime`;
}
else {
    target.innerHTML = `${number} is not prime`;
}
}

else {
    target.innerHTML = `One is also neither prime nor composite.`;
}