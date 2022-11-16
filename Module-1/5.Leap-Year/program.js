'use strict';

const year = parseInt(prompt("Give a year: "));
const target1 = document.querySelector("#target");
if (Number.isInteger(year/100)) {
    if (Number.isInteger(year/400)) {
        target1.innerHTML = `${year} is leap year.`;
    }
    else {
        target1.innerHTML = `${year} is not a leap year.`;
    }
}
else if (Number.isInteger(year/4)) {
    target1.innerHTML = `${year} is leap year.`;
}

else {
    target1.innerHTML = `${year} is not a leap year.`;
}