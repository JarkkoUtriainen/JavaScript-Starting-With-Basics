'use strict';
const names = ['John', 'Paul', 'Jones'];

for (let i = 0; i<names.length; i++) {
    let li = document.createElement('li');
    let text = document.createTextNode(names[i]);
    li.appendChild(text);
    document.getElementById("target").appendChild(li);
}