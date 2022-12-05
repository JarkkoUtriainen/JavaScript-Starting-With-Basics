'use strict';

const form = document.querySelector('form');
const apiUrl = form.action;

async function fetchJson() {
const answer = await fetch(url, options);
if(answer.ok){throw new Error}
return await answer.json()
}

form.addEventListener('submit', async function(evt){
evt.preventDefault();
const searchItem = document.querySelector('#query').value;
});