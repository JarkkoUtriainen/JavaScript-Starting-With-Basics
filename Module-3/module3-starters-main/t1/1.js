'use strict';

const list = document.getElementById("target");

list.innerHTML += `<li>First item</li>`;
list.innerHTML += `<li>Second item</li>`;
list.innerHTML += `<li>Third item</li>`;
list.classList.add("my-list");