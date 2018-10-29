'use strict';

// const HOTEL_NAME = 'Resort Hotel';
// const STARS = 5;
// const STATUS = 'LUX';
// const ROOM_NUMBERS = 100;

// let h = [2,3,4,5,6];

// let HOTEL = {
//     name : 'Resort Hotel',
//     stars : 5,
//     status : 'LUX',
//     roomNumbers : 100,
//     personal: ['Bob', 'Bender', 'Ben']
// };
// let key = 'status';

// console.log(HOTEL.name);
// console.log(HOTEL.personal[2]);
// console.log(HOTEL.stars);
// console.log(HOTEL['status']); // если мы будем получать имя ключа как переменную или как-то еще, не зная имени ключа. Ключ динамичный.
// // необходимо писать только в формате строки, это второй способ достучаться до ключа объекта.
// // console.log(HOTEL[key]); // найди мне в объекте значение переменной key
// // console.log(HOTEL.key); // найди мне в объекте ключ key // undefined 


// let HOTEL = {
//     name : 'Resort Hotel',
//     stars : 5,
//     status : 'LUX',
//     roomNumbers : 100,
//     personal: ['Bob', 'Bender', 'Ben']
// };

// HOTEL.manager = 'Jack Jons'; // добавляет поле или перезаписывает значение, если поле уже существует.
// console.log(HOTEL.manager);

// HOTEL.manager = 'Chack Norris';
// HOTEL.stars = 10;
// console.log(HOTEL.manager);
// console.log(HOTEL.stars);
// console.log(HOTEL); // информация перезаписана.

// delete HOTEL.personal // удаляет целиком(!) ключ:значение.
// console.log(HOTEL);

// let name = "Company";
// let stars = 5;

// const hotel = {
//     name : name,
//     stars : stars,
// }

// const hotel = { // упрощенный вариант записи переменной в объект.
//     name,
//     stars,
// }

// const hotel = {
//     name : 'Resort Hotel',
//     stars : 5,
//     pool : {
//         volume : '50m',
//         temp : '25c',
//     }
// }
//  let hasStars = hotel.hasOwnProperty('pool'); // получаем ответ true/false. Проверят есть ли вообще такой ключ в объекте.
//  console.log(hasStars);
//  let hasPool = 'pool' in hotel; // ,более новый вариант записи проверки на наличие ключа.
//  console.log(hasPool);



 // метод объекта - функция записанная внутрь объекта.

const BMW = {
    wheels : 4,
    color: 'red',
    year : 2018,
    model: 'X5',
    fullComplect: false,
    move : function () {            // первый способ записи функции в объекте.
        console.log('I\'m move');
    },
    stop() {                        //второй вариант записи функции в объекте.
        console.log('Stop');
    },
    start: () => console.log('start'), // так делать не надо. Когда используем this стрелочная функция выдает ошибку.
    
    getColor : () => console.log(BMW.color),
}

// BMW.move();
// BMW.stop();

// console.log(console);
BMW.getColor();
