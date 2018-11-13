'use strict';

// // https://jsonplaceholder.typicode.com/
// const req = new XMLHttpRequest(); // новый экземпляр запроса обязательно создавать.
// // console.log(req);
// // settings
// // req.open(method, URL, async);
// req.open('GET', 'https://jsonplaceholder.typicode.com/users', false);  // синхронный запрос
// req.setRequestHeader('Content-Type', 'application/json'); // заголовок 
// // // req.send([body])
// req.send();

// req.abort()

// status
// https://developer.mozilla.org/ru/docs/Web/HTTP/Status

// if (req.status !== 200) { // проверка на состояние завпроса -  в зависимости от ошибки выводится ошибка
//     console.error(`${req.status}: ${req.statusText} `)
// } else {
//     console.log(JSON.parse(req.response));
// }
// console.log(`test`);


// get - получить информацию
// post - передать информацию
// put - обновить информацию
// delete - удалить информацию 

// 3 большие группы статусов.  = 200 запрос успешный, 

// 5 состояний выполнения запроса :

// 0 - початок
// 1 - викликаний open
// 2 - отримані заголовки
// 3 - отримуємо данні
// 4 - запит закінчено

// const req1 = new XMLHttpRequest();
// req.open('GET', 'https://jsonplaceholder.typicode.com/users', true); // асинхронный запрос
// req.setRequestHeader('Content-Type', 'application/json');
// req.send();
// req.onreadystatechange = function () {
//     if (req.readyState !== 4) {
//         console.log(req.readyState);
//         return
//     }

//     if (req.status !== 200) {
//         console.error(`${req.status}: ${req.statusText} `)
//     } else {
//         console.log(JSON.parse(req.response));
//     }
// };


// fetch('https://jsonplaceholder.typicode.com/users') // посредством webAPI запускаем функцию fetch
// функция обложка облегчает выполнение запроса. Все что сверху написано только короче. Он автоматом ассинхронный 

// fetch('https://jsonplaceholder.typicode.com/users').then(response => console.log(response))

// JSON - формат, в котором инфа хранится на сервере. 
// JSON.parce() // метод для того, чтобы строку перевести в тот формат в котором она была, до того как его сделали JSON 
// JSON.stringify() // метод, чтобы из обычного формата превратить в формат JSON и отправить на сервер. 

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json()) // мы ответ с сервера конвертируем в понятный нам формат. 
// .then(data => console.log(data)) // data - return предыдущего запроса. Принято разделять логику на then-ы.
// // если в предыдущем запросе нет return, то цепочка then поламается


// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json()) // мы ответ с сервера конвертируем в понятный нам формат. 
// .then(function data (data) {
//     let body = document.querySelector('body');
//     let ul = document.createElement('ul');
//     for (let el of data) {
//         let li = document.createElement('li');
//         li.textContent = el.name;
//         ul.append(li)
//     } return body.append(ul)
// })


// CRUD = Create Read Update Delete
// POST - CREATE
// GET - READ
// PUT - UPDATE
// DELETE - DELETE



// https://pixabay.com/api/docs/
// endpoint - Точка входа
// resourse - ресурс к которому мы обращаемся
// ? - параметр запроса
// & - перечисление парметров запроса

// let URL = 'https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&category=backgrounds&order=latest&per_page=9';

//  let body = document.querySelector('body');

//  function forEa (el) {
//     let img = document.createElement('img');
//     img.setAttribute('src', el);    
//     img.style.width = '200px';
//     img.style.height = 'auto';
//     img.style.display = 'block'
//     img.style.margin = '10px auto'
//     return img
// }

// fetch(URL)
// .then(response => response.json()) 
// .then(function data (data) {
//     let body = document.querySelector('body');
//     for (let el of data.hits) {
//         let img = document.createElement('img');
//         img.setAttribute('src', el.largeImageURL);
//         body.append(img)}
// })
// .then(data => data.hits.forEach(el => body.append(forEa(el.largeImageURL))))



/*********************************************************************/
// Task 2

// let container = document.querySelector('#container');
// let input = document.querySelector('.input');
// let submit = document.querySelector('.box');
// let more = document.querySelector('#get');

// function findPictures (count) {
//     event.preventDefault()
//     fetch(`https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&category=backgrounds&order=latest&per_page=6&q=${input.value}&page=${count}`)
//     .then(response => response.json())
//     .then(data => data.hits.forEach(el => container.append(createDiv(el))))   
// }

// function createDiv (el) {
//     let div = document.createElement('div');
//     let p = document.createElement('p');
//     p.textContent = el.user;
//     let img = document.createElement('img');
//     img.setAttribute('src', el.webformatURL);    
//     div.append(p,img)
//     return div
// }

// function showMorePictures () {
//     let count = 1;
//     count++;
//     findPictures(count);
// }

// function showNew () {
//     let count = 1;
//     container.innerHTML ='';
//     findPictures(count);
// }

// window.addEventListener('DOMContentLoaded', findPictures);
// submit.addEventListener('click', showNew);
// more.addEventListener('click', showMorePictures )




/*********************************************************************/
// Task 3 
