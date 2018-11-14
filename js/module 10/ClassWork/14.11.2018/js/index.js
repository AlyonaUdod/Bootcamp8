'use script';

let list = document.querySelector('.list')
let input = document.querySelector('[type="text"]');
let form = document.querySelector('#form');

function postTask() {
    event.preventDefault();
    let text = input.value;
    console.log(text);
    form.reset();
}

function showTask() {
     fetch('http://localhost:3001/tasks')
    .then(res => res.json())
    .then(data => createLi(data)) 
}

function createLi (arr){
    for (let el of arr) {
        let li = document.createElement('li');
        li.textContent = el.text;
        li.setAttribute('data-id', el.id);
        list.append(li)
    }
}

window.addEventListener('DOMContentLoaded', showTask);
form.addEventListener('submit', postTask)
