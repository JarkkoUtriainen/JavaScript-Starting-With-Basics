'use strict';

const list = document.getElementById('target');

function createItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}

list.appendChild(createItem('First Item'));
list.appendChild(createItem('Second Item'));
list.appendChild(createItem('Third Item'));

list.childNodes[1].classList.add('my-item');