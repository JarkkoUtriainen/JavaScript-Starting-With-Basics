'use strict'

const year1 = parseInt(prompt("Add a year"))
const year2 = parseInt(prompt("Add a second year"))
let year = year1

function printYear() {
const newLi = document.createElement('li')
newLi.innerHTML = `${year}`
document.querySelector('#target').appendChild(newLi)
}

while (year <= year2) {

if (Number.isInteger(year/100)) {
  if (Number.isInteger(year/400)) {
printYear()
}}

else if (Number.isInteger(year/4)) {
  printYear()
}
year++
}
