'use strict'

const form = document.getElementById('source')
const names = form.querySelectorAll('input')
const result = document.getElementById('target')

form.addEventListener('submit', e=>{
    e.preventDefault()
    result.innerHTML = `Hello ${names[0].value} ${names[1].value}! Hope you are having a good day!`
})