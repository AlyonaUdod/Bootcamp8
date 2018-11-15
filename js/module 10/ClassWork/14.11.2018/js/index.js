'use script';

let list = document.querySelector('.list')
let input = document.querySelector('[type="text"]');
let form = document.querySelector('#form');

function postTask() {
    event.preventDefault();
    let value = input.value;
    if (value !== ''){
        fetch('http://localhost:3001/tasks', {
        method: 'post',
        body: JSON.stringify({text:value}),
        headers: {
            'Content-Type': 'application/json'
         }
        }) 
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => addLi(data))
    } form.reset(); 
}

function deleteLi (event) {
    let id = event.target.dataset.id;
    fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'delete',
    })
    .then(() => event.target.remove())
}

function updateData() {
    fetch(`http://localhost:3001/tasks/1`, {
        method: 'put',
        body: JSON.stringify({text:'Котлета'}),
        headers: {
            'Content-Type': 'application/json'
         }
    })
    // .then(res => res.json())
}
updateData()

function loadTask() {
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

function addLi (obj) {
    let li = document.createElement('li');
    li.textContent = obj.text;
    li.setAttribute('data-id', obj.id);
    list.append(li)
}

window.addEventListener('DOMContentLoaded', loadTask);
form.addEventListener('submit', postTask)
list.addEventListener('click', deleteLi)
