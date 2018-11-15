'use strict';

/******************************************************************************************/
// 1

/*
  Написать функцию fetchCountryData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому 
  адресу. Обязательно обработать вариант с ошибкой запроса
  используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

// const input = document.querySelector("input");
// const submitBtn = document.querySelector(".js-submit");
// const result = document.querySelector(".js-result");
// const apiUrl = "https://restcountries.eu/rest/v2/name/";
// let form = document.querySelector('.search-form')

// submitBtn.addEventListener("click", fetchCountryData);

// /*
//   @param {FormEvent} evt
// */

// function fetchCountryData(evt) {
//   evt.preventDefault();
//   result.innerHTML = '';
//   fetch(`https://restcountries.eu/rest/v2/name/${input.value}`)
//  .then(res => res.json())
//  .then(data => getInfo(data))
//  .catch(err => console.log(err))
// }

// function getInfo(data) {
//     for (let el of data) {
//         let country = document.createElement('p');
//         country.textContent = `Country name: ${el.name}`;
// 
//         let capital = document.createElement('p');
//         capital.textContent = `Capital: ${el.capital}`;
//  
//         let current = document.createElement('p');
//         current.textContent = `Main currency: ${el.currencies[0].code}`;

//         let flag = document.createElement('img');
//         flag.setAttribute('src', el.flag);

//         result.append(country, capital, current, flag)
//     }
// }

// submitBtn.addEventListener('click', fetchCountryData)


/******************************************************************************************/
// 2 

/*
  Написать функцию fetchUserData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

// const input = document.querySelector("input");
// const submitBtn = document.querySelector("#js-submit");
// const result = document.querySelector(".result");
// // const apiUrl = "";

// submitBtn.addEventListener("click", fetchUserData);

// /*
//   @param {FormEvent} evt
// */

// function fetchUserData(event) {
//     event.preventDefault();
//     result.innerHTML = '';
//     fetch(`https://api.github.com/users/${input.value}`)
//    .then(res => res.json())
// //    .then(data => console.log(data.avatar_url))
//    .then(data => getInfo(data))
//    .catch(err => console.log(err))
// }

// function getInfo(data) {
//         let avatar = document.createElement('img');
//         avatar.setAttribute('src', data.avatar_url);
        
//         let userName = document.createElement('p');
//         userName.textContent = `Username: ${data.name}`;
        
//         let bio = document.createElement('p');
//         bio.textContent = `Bio: ${data.bio}`;

//         let publicRepos = document.createElement('p');
//         publicRepos.textContent = `Public repos: ${data.public_repos}`;

//         result.append(avatar, userName, bio, publicRepos);
//     }

/******************************************************************************************/
// 3

/*
  Документация API: https://github.com/trostinsky/users-api#users-api

  Просмотр всех записей: https://test-users-api.herokuapp.com/users/ 

  Написать функцию fetchUsers, которая используя REST сервис 
  по адресу https://test-users-api.herokuapp.com/users/
  посылает get запрос и получает ответ.
  
  Результатом fetch будет массив объектов с полями.
  
  В элемент result поместить таблицу состоящую из 2-х
  столбцов след формата, где кол-во строк будет такое как
  и кол-во объектов пользователей в ответе:
  
    ID | NAME | AGE
    id | name | age  
    id | name | age  
*/

// const getBtn = document.querySelector(".js-get");
// const result = document.querySelector(".result");

// getBtn.addEventListener("click", fetchUsers);

// /*
//   @param {FormEvent} evt
// */
// function fetchUsers(evt) {
//     evt.preventDefault();
//     fetch(`https://test-users-api.herokuapp.com/users/`)
//     .then(res => res.json())
//     // .then(data => console.log(data.data))
//     .then(data => getInfo(data.data))
// }


// function getInfo(arr) {
//     let th = document.createElement('tr');
//     result.append(th);

//     let td1 = document.createElement('th');
//     td1.textContent = 'ID';

//     let td2 = document.createElement('th');
//     td2.textContent = 'NAME';

//     let td3 = document.createElement('th');
//     td3.textContent = 'AGE';

//     th.append(td1, td2, td3)
//     for (let el of arr) {
//         let tr = document.createElement('tr');

//         let td1 = document.createElement('td');
//         td1.textContent = el.id
    
//         let td2 = document.createElement('td');
//         td2.textContent = el.name
    
//         let td3 = document.createElement('td');
//         td3.textContent = el.age

//         tr.append(td1, td2, td3);
//         result.append(tr);
//     }
// }

/******************************************************************************************/
// 4

/*
  Документация API: https://github.com/trostinsky/users-api#users-api

  Просмотр всех записей: https://test-users-api.herokuapp.com/users/ 

  Написать функцию getUserByName, которая используя REST сервис 
  по адресу https://test-users-api.herokuapp.com/users/
  посылает запрос с name введенным в input.
 
  Результатом fetch будет ответ от сервера, 
  вывести содержимое всего ответа (id, name, age) 
  или 'Такого пользователя в списке нет!'.
*/

// const input = document.querySelector("input");
// const postBtn = document.querySelector(".js-post");
// const result = document.querySelector(".result");

// postBtn.addEventListener("click", getUserByName);

// function getUserByName(evt) {
//     evt.preventDefault();
//     result.innerHTML = '';
//     fetch(`https://test-users-api.herokuapp.com/users/${input.value}`)
//     .then(res => res.json())
//     // .then(data => console.log(data))
//     .then(data => getInfo(data.data))
//     .catch(err => result.textContent = 'Такого пользователя в списке нет!')
// }

// function getInfo(obj) {
//     let id= document.createElement('p');
//     id.textContent = `Id: ${obj.id}`;

//     let name = document.createElement('p');
//     name.textContent = `Name: ${obj.name}`;
 
//     let age = document.createElement('p');
//     age.textContent = `Age: ${obj.age}`;

//     result.append(id, name, age)
// }


/******************************************************************************************/
// 5

let cont = document.querySelector('.container')

function fetchNasa () {
    fetch("https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo")
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => createInfo(data))
}

function createInfo(obj) {
    let title = document.createElement('h1');
    title.textContent = obj.title;

    let img = document.createElement('img');
    img.setAttribute('src', obj.url);

    let sp = document.createElement('span');
    sp.textContent = obj.copyright;

    let text = document.createElement('p');
    text.textContent = obj.explanation;
    cont.append(title, img, sp, text)
}

window.addEventListener('DOMContentLoaded', fetchNasa)