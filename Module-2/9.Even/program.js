'use strict';

const array1 = [1,2,3,4,5,6,7,8,9,333,444,11,12,13]

function even(numbers) {
let array2 = []
let j = 0
for (let i = 0; i < numbers.length; i++) {

    let check = Number.isInteger(numbers[i]/2)
    if (check) {
        array2[j] = numbers[i]
        j++;
    }
}
return array2;
}

console.log(`${array1}`)
console.log(`${even(array1)}`)