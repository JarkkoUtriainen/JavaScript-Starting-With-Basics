'use strict';

const img = document.getElementById('target');
const element = document.getElementById('trigger')

element.addEventListener('mouseenter', () => img.src = 'img/picB.jpg');
element.addEventListener('mouseleave', () => img.src = 'img/picA.jpg');