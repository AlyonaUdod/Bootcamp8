'use strict';

// promise - метод web API

// let obj = new Promise(function(ok, err) { // первый параметр - успешное исполнение кода, второй - fatal. как тут назвали, так внутри и пользуемся.
//     let i = 1;
//     let arr = [];
//     while (i< 100000) {
//         arr.push(i);
//         i++;
//     }
//     if (arr.length === 999999) {
//         ok(arr)
//     } else {
//         err(new Error) // функция конструктор Error.
//     }
// });

// obj
//     .then(data=> console.log(data))
//     .catch(err => console.log(err))


// function asyncLoop (number) {
//     let obj = new Promise(function(ok, err){
//         let i = 1;
//         let arr = [];
//         while (i<number) {
//             arr.push(i);
//             i++;
//         }
//         if (arr.length === number-1) {
//             ok(arr)
//         } else {
//             err(new Error());
//         }
//     }); return obj
// }

// asyncLoop(5)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// Promise.all([promiseA, promiseB]) // неограниченое колличество промисов. пока не получим результат всех.
// Promise.race([promiseA, promiseB]) // нам достаточно хотя бы одного результата. Какой первый. 


















// Weather
let url = "https://openweathermap.org/current"
let form = document.querySelector('.search-form')
let input = document.querySelector('[name="country"]')

// 1) О котрій годині схід і захід сонця
// 2) Яка  температура
// 3) Мінімальна і максимальна температура
// 4) Атмосферний тиск
// 5) Швидкість вітру
// 6) Назва міста

// function getWeatherInfo () {
//     event.preventDefault()
//     console.log(input.value);
//     fetch(`http://api.apixu.com/v1/current.json?key=f9c031a6d4a941adb1b112739181511&q=${input.value}`)
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// // function showInfo (obj) {
// //     let 
// // }

// form.addEventListener('submit', getWeatherInfo )

// console.log(localStorage);
// localStorage.setItem('key1', JSON.stringify(5))
// let res = localStorage.getItem('key1')
// let a = JSON.parse(res)
// console.log(a);
// localStorage.removeItem('key1')


// let formSelect = document.querySelector('#form')
// let selectSize = document.querySelector('#fontSize')
// let selectColor = document.querySelector('#color')
// let selectFamily = document.querySelector('#fontFamily')

// function readValue () {
//     event.preventDefault();
//     localStorage.setItem('Settings', JSON.stringify({
//          FontSize: selectSize.value+'px', 
//          Color: selectColor.value, 
//          FontFamily: selectFamily.value
//     }))
//     getDataFromStorage()
// }

// function getDataFromStorage() {
//     let result =JSON.parse(localStorage.getItem('Settings'));
//     let allP = [...document.querySelectorAll('p')];
//     for ( let el of allP) {
//         el.style.color = result.Color;
//         el.style.fontSize = result.FontSize;
//         el.style.fontFamily = result.FontFamily;
//     }
// }

// formSelect.addEventListener('submit', readValue)
// window.addEventListener('DOMContentLoaded', getDataFromStorage)

// localStorage.setItem(JSON.stringify('Settings', ))




/***********************************************************************************/
// 6
/*
  Напишите скрипт работы магазина со складом товаров.
  
  Есть переменная goodsAmount хранящиая в себе
  текущее количество единиц какого-то товара на складе.
  
  Напишите функцию processOrder(amount), получающую
  кол-во товаров заказанных покупателем, и возвращающую промис.
  
  Для имитации проверки достаточного количества товаров
  на складе используйте setTimeout с delay 500мс.
  
  Если на складе товаров больше либо равно заказанному
  количеству, "верните" строку - "Ваш заказ готов!".
  
  В противном случае - "К сожалению на складе не достаточно товаров!".
  
  Если же пользователь ввел не число, то выдайте ошибку throw new Error("Некорректный ввод!")  
*/

let goodsAmount = 100;

function processOrder(num) { 
return new Promise(function(ok, err){
    setTimeout(function(){
            if (!isNaN(num)) {
                if (goodsAmount > num) {
                ok('Ваш заказ готов!')
                } else {
                ok('К сожалению на складе не достаточно товаров!')
                }
            } else {
            err("Некорректный ввод!")
            } 
        },500); 
    });
}

// Вызовы функции для проверки
processOrder(50)
  .then(x => console.log(x)) // Ваш заказ готов!
  .catch(err => console.log(err));

processOrder(50)
  .then(x => console.log(x)) // Ваш заказ готов!
  .catch(err => console.log(err));

processOrder(500)
  .then(x => console.log(x)) // К сожалению на складе недостаточно товаров!
  .catch(err => console.log(err));

processOrder("qwe")
  .then(x => console.log(x))
  .catch(err => console.log(err)); // Некоректный ввод!



  