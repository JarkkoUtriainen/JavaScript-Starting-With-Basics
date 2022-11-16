"use strict";

const number1 = parseFloat(prompt("Give a number: "));
const number2 = parseFloat(prompt("Give second number: "));
const number3 = parseFloat(prompt("Give third number: "));

const sum = number1 + number2 + number3;
const product = number1 * number2 * number3;
const average = (number1 * number2 * number3) / 3;

const target1 = document.querySelector("#print1");
target1.innerHTML = `Sum of the numbers is: ${sum}`;

const target2 = document.querySelector("#print2");
target2.innerHTML = `Product of the numbers is: ${product}`;

const target3 = document.querySelector("#print3");
target3.innerHTML = `Average of the numbers is: ${average}`;
