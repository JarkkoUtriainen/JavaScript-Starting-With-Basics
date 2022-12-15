"use strict";

const button = document.getElementById("start");
const results = document.getElementById("result");


function doMath(num, oper) {
  let answer

  if (oper == "+") {
    answer = +num[0] + +num[1];
  } else if (oper == "-") {
    answer = num[0] - num[1];
  } else if (oper == "*") {
    answer = num[0] * num[1];
  } else if (oper == "/") {
    answer = num[0] / num[1];
  }
console.log(answer);
  return answer;
}

button.addEventListener("click", a => {
  const calculate = document.getElementById("calculation").value;
  const numbers = calculate.split(/\+|-|\/|\*/g);
  const operator = calculate.match(/\+|-|\/|\*/g);
  results.innerHTML = doMath([numbers[0], numbers[1]], operator[0]);
});
