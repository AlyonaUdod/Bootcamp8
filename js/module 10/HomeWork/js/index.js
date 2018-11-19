'use strict';

/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.

  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.

  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.

*/

let getAllUserBtn = document.querySelector('.getAlluser');
let getUserByIdBtn = document.querySelector('.getUserById');
let deleteUserBtn = document.querySelector('.deleteUser');
let addUserBtn = document.querySelector('.addUser');
let updateUserBtn = document.querySelector('.updateUser');

let resultDiv = document.querySelector('.result');
let form = document.querySelector('.search-form');
let input = document.querySelector('[name="name"]');
let input2 = document.querySelector('[name="age"]');


// 1 - getAllUsers()
/////////////////////////////////////////////////////////////////////////////////////////
// для этой функции используется submit
function getAllUsers () {
    event.preventDefault();
    resultDiv.innerHTML = '';
    fetch('https://test-users-api.herokuapp.com/users/')
    .then(res => res.json())
    .then(data => createUsersList(data.data))
}
    function createUsersList (arr) {
        let table = document.createElement('table');
        resultDiv.append(table);

        let th = document.createElement('tr');
        table.append(th);

        let td1 = document.createElement('th');
        td1.textContent = 'ID';

        let td2 = document.createElement('th');
        td2.textContent = 'NAME';

        let td3 = document.createElement('th');
        td3.textContent = 'AGE';

        th.append(td1, td2, td3)
        for (let el of arr) {
            let tr = document.createElement('tr');

            let td1 = document.createElement('td');
            td1.textContent = el.id
        
            let td2 = document.createElement('td');
            td2.textContent = el.name
        
            let td3 = document.createElement('td');
            td3.textContent = el.age

            tr.append(td1, td2, td3);
            table.append(tr);
        }
    }
getAllUserBtn.addEventListener('click', getAllUsers)


// 2 - getUserById(id)
/////////////////////////////////////////////////////////////////////////////////////////
// для этой функции используется только первое поле input
function getUserById() {
    event.preventDefault();
    resultDiv.innerHTML = '';
    fetch(`https://test-users-api.herokuapp.com/users/${input.value}`)
    .then(res => res.json())
    .then(data => showUserInfo(data.data))
    .catch(() => {
        resultDiv.textContent = 'Такого пользователя в списке нет!'
    })
}
    function showUserInfo(obj) {
        let wrap = document.createElement('div');
        resultDiv.append(wrap)

        let id= document.createElement('p');
        id.textContent = `Id: ${obj.id}`;
        
        let name = document.createElement('p');
        name.textContent = `Name: ${obj.name}`;
         
        let age = document.createElement('p');
        age.textContent = `Age: ${obj.age}`;
        
        wrap.append(id, name, age)
    }   
getUserByIdBtn.addEventListener('click', getUserById)


//3 addUser()
/////////////////////////////////////////////////////////////////////////////////////////
// для этой функции используются оба поля input
function addUser(){
    event.preventDefault();
    let nameP = input.value;
    let ageP = input2.value;
    let obj = {
        name: nameP,
        age: ageP,
    } 
      fetch('https://test-users-api.herokuapp.com/users/', {
          method: 'POST',
          body: JSON.stringify(obj),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('ERROR' + error));
    } 
addUserBtn.addEventListener('click', addUser)


// 4 removeUser()
/////////////////////////////////////////////////////////////////////////////////////////
// для этой функции используется первое поле input

function removeUser() {
    event.preventDefault()
    // console.log(input.value);
    // let idDel = input.value;
    fetch(`https://test-users-api.herokuapp.com/users/${input.value}`, {
        method: 'DELETE'
      })
      .then(() => console.log('success'))
      .catch(error => console.log('ERROR' + error));
}
deleteUserBtn.addEventListener('click', removeUser)


// 5 updateUser()
/////////////////////////////////////////////////////////////////////////////////////////
// для этой функции используются оба поля input

function updateUser() {
    event.preventDefault();
    let userName = input2.value;
    let userAge = Math.floor(Math.random()*76); // вместо этого может быть еще одно поле инпут, в которое вводится возраст в формате числа.
    let obj = {
        name: userName,
        age: userAge,
    }
    console.log(obj);
    fetch(`https://test-users-api.herokuapp.com/users/${input.value}`, {
      method: 'PUT',
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log('ERROR' + error));
}
updateUserBtn.addEventListener('click', updateUser)
