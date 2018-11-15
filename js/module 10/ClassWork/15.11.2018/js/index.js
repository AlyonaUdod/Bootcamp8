'use strict';

// promise - метод web API

let obj = new Promise(function(ok, err) { // первый параметр - успешное исполнение кода, второй - fatal. как тут назвали, так внутри и пользуемся.
    let i = 1;
    let arr = [];
    while (i< 100000) {
        arr.push(i);
        i++;
    }
    if (arr.length === 999999) {
        ok(arr)
    } else {
        err(new Error) // функция конструктор Error.
    }
});

obj
    .then(data=> console.log(data))
    .catch(err => console.log(err))



























// Weather
// let url = "https://openweathermap.org/current"
// let form = document.querySelector('.search-form')
// let input = document.querySelector('[name="country"]')

// // 1) О котрій годині схід і захід сонця
// // 2) Яка  температура
// // 3) Мінімальна і максимальна температура
// // 4) Атмосферний тиск
// // 5) Швидкість вітру
// // 6) Назва міста

// function getWeatherInfo () {
//     event.preventDefault()
//     console.log(input.value);
//     fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${input.value}={7ed6ba32164c3f1c39aaeeecdc77928f}`)
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// form.addEventListener('submit',getWeatherInfo )
