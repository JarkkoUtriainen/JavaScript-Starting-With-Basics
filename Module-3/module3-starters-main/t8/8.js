"use strict";

let button = document.getElementById("start");


function getNum1() {
  let num1 = parseInt(document.getElementById("num1").value);
  return num1;
}

function getNum2() {
  let num2 = parseInt(document.getElementById("num2").value);
  return num2;
}

function getSelectValue() {
  let selectedOperation = document.getElementById("operation").value;
  return selectedOperation;
}

function calculate() {
let answer = null;

if (getSelectValue() == 'add') {
    answer = getNum1() + getNum2();
}

else if (getSelectValue() == 'sub') {
    answer = getNum1() - getNum2();
}

else if (getSelectValue() == 'multi') {
    answer = getNum1() * getNum2();
}

else if (getSelectValue() == 'div') {
    answer = getNum1() / getNum2();
}

return answer
}

function getResult() {
    const result = document.getElementById("result");
    let number = document.createTextNode(calculate());
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
    result.appendChild(number);
}

button.addEventListener("click", () => getResult());
