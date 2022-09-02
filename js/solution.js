'use strict';
const ul = document.querySelector('.ulClass');
const attributes= ul.attributes;
const lastLi = document.querySelector('ul li:last-child');
const firstLi = document.querySelector('ul li:first-child');

for(const attribute of attributes) {
    const result = [];
    result.push(attribute.value);
    console.log(result);
}
for(const attribute of attributes) {
    const result = [];
    result.push(attribute);
    console.log(result);
}

lastLi.innerText = 'Привет, меня зовут Слава!'
firstLi.setAttribute('data-my-name', 'Slava')
ul.removeAttribute('data-dog-tail')

