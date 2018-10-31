'use strict';

// let num = [2, 3, 16];
// console.log(num);

// let result = arr.method(function(num, index, arr) { // в первый параметр попадает элемент массива, 
// во второй - индекс, в третий - массив полностью (например нам надо получить число предыдущее или последующее.)
//  code
//  code
// })

// анонимная функция - функция без имени, мы ее призвали в методе, она отработала и умерла. 



/***************/
// MAP
// map - перебирает каждый элемент массива и делает с ним то, что мы хотим.
// Создает копию оригинально массива и пушит туда наши изменения.


// let money = [500, 700, 800, 100, 1000]; // ниже 4 варианта записи одной и той же функции. 
//                                         // На выходе мы получаем 0.7*el

//1
// let res = [];
// for (let el of money) {
//     res.push(Number((el*0.7)).toFixed(2))
// } 
// console.log(res);


// 2
// let result = money.map(function (el) {
//     return el*0.7;
// })
// console.log(result);


// 3
// let result = money.map(el => {
//     return el*0.7;
// });
// console.log(result);


// 4 
// let result = money.map(el => el*0.7);
// console.log(result);

// let result = money.map(el => el > 500 ? el * 0.7 : el);  // фильтрация, если el > 500, то тогда *0.7, если нет - оставляем без изменений.
// console.log(result);



/********************/

// const inventors = [{
//     first: 'Albert',
//     last: 'Einstein',
//     year: 1879,
//     passed: 1955
//   },
//   {
//     first: 'Isaac',
//     last: 'Newton',
//     year: 1643,
//     passed: 1727
//   },
//   {
//     first: 'Galileo',
//     last: 'Galilei',
//     year: 1564,
//     passed: 1642
//   },
//   {
//     first: 'Marie',
//     last: 'Curie',
//     year: 1867,
//     passed: 1934
//   },
//   {
//     first: 'Johannes',
//     last: 'Kepler',
//     year: 1571,
//     passed: 1630
//   },
//   {
//     first: 'Nicolaus',
//     last: 'Copernicus',
//     year: 1473,
//     passed: 1543
//   },
//   {
//     first: 'Max',
//     last: 'Planck',
//     year: 1858,
//     passed: 1947
//   },
//   {
//     first: 'Katherine',
//     last: 'Blodgett',
//     year: 1898,
//     passed: 1979
//   },
//   {
//     first: 'Ada',
//     last: 'Lovelace',
//     year: 1815,
//     passed: 1852
//   },
//   {
//     first: 'Sarah E.',
//     last: 'Goode',
//     year: 1855,
//     passed: 1905
//   },
//   {
//     first: 'Lise',
//     last: 'Meitner',
//     year: 1878,
//     passed: 1968
//   },
//   {
//     first: 'Hanna',
//     last: 'Hammarström',
//     year: 1829,
//     passed: 1909
//   }
// ];


// 1
// let arr = []
// for (let el of inventors) { 
//     arr.push(el.first)  
// }
// console.log(arr);

// 2 
// let res = inventors.map(function(el){
//      return el.first;
// })
// console.log(res);

//3 
// let res = inventors.map(el => el.first);
// console.log(res);




/***********/
// FILTER

// const numbers = [250, 1, 10, 3, 25, 5, 60, 7, 12, 9]; // вернуть цифры меньше или равны 10.
// // 1
// let res = [];
// for (let el of numbers) {
//     if (el<=10){
//     res.push(el) }
// }
// console.log(res);


// // 2
// let res2 = numbers.filter(function(el){
//     if (el<=10){
//         return el;
//     }
// })
// console.log(res2);


// // 3
// let res3 = numbers.filter(el => el<=10);
// console.log(res3);



/***********/
// const inventors = [{
//     first: 'Albert',
//     last: 'Einstein',
//     year: 1879,
//     passed: 1955
//   },
//   {
//     first: 'Isaac',
//     last: 'Newton',
//     year: 1643,
//     passed: 1727
//   },
//   {
//     first: 'Galileo',
//     last: 'Galilei',
//     year: 1564,
//     passed: 1642
//   },
//   {
//     first: 'Marie',
//     last: 'Curie',
//     year: 1867,
//     passed: 1934
//   },
//   {
//     first: 'Johannes',
//     last: 'Kepler',
//     year: 1571,
//     passed: 1630
//   },
//   {
//     first: 'Nicolaus',
//     last: 'Copernicus',
//     year: 1473,
//     passed: 1543
//   },
//   {
//     first: 'Max',
//     last: 'Planck',
//     year: 1858,
//     passed: 1947
//   },
//   {
//     first: 'Katherine',
//     last: 'Blodgett',
//     year: 1898,
//     passed: 1979
//   },
//   {
//     first: 'Ada',
//     last: 'Lovelace',
//     year: 1815,
//     passed: 1852
//   },
//   {
//     first: 'Sarah E.',
//     last: 'Goode',
//     year: 1855,
//     passed: 1905
//   },
//   {
//     first: 'Lise',
//     last: 'Meitner',
//     year: 1878,
//     passed: 1968
//   },
//   {
//     first: 'Hanna',
//     last: 'Hammarström',
//     year: 1829,
//     passed: 1909
//   }
// ];

// // 1   // выбрать всех ученых, что родились в 16 веке и вывести их имена.
// let res = inventors.filter(el => el.year >= 1500 && el.year < 1600).map(el => el.first)
// // тоже самое ниже в столбик, чтобы нагляднее было
// let res = inventors
//     .filter(el => el.year >= 1500 && el.year < 1600)
//     .map(el => el.first)
// console.log(res);




/*********/

// FIND находит первый элемент, который удовлетворяет проверку, и останавливается. Удобно работать с уникальными объектами.

// const numbers = [0, 1, 10, 3, 25, 5, 60, 7, 12, 9];

// let res = numbers.find(el => el>5)
// console.log(res);


/*********/
// EVERY - выдает true / false. Если хотя бы один эл-т не удовлетворяет - false.
// SOME - выдает true / false. Если хотя бы один эл-т удовлетворяет - true

// const temperature = [25, 15, -10, 28, 5];

// let res = temperature.every(el => el>0)
// console.log(res);

// let res2 = temperature.some(el => el>50)
// console.log(res2);

/*********/
// REDUCE - cуммирует элементы в массиве и возвращает результат.

// const numbers = [250, 1, 10, 3];

// let res = numbers.reduce( (acc, el) => acc + el,0)
// console.log(res);

// const hoursWorkedPerWeek = [
//     {day: 'M',number: 9},
//     {day: 'T',number: 10},
//     {day: 'W',number: 11},
//     {day: 'T',number: 5},
//     {day: 'F',number: 12}
//     ];

// let res = hoursWorkedPerWeek.reduce( (acc, el) => acc + el.number,0)
// console.log(res);


/*********/
// SORT - меняет исходный массив. Сортирует в алфавитном/против, по возрастанию/убыванию.

// const numbers = [1, 250, 10, 3, 25, 5, 60, 7, 12, 9];
// const word = [ 'a', 'd', 'l', 'c']

// // let res = numbers.sort(function (a,b){
// //     if (a > b) {
// //         return 1
// //     } else {
// //         return -1
// //     }
// // })
// let res = numbers.sort( (a,b) => a - b)
// console.log(res);
// let res2 = word.sort( (a,b) => a > b ? 1 : -1)
// console.log(res2);


/*********/
//1 


const scientist = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
},
{
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
},
{
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
},
{
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
},
{
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
},
{
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
},
{
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
},
{
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
},
{
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
},
{
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
},
{
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
},
{
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
}
];


// 1) отримати масив вчених що народилися в 19 ст
// 2) знайти суму років скільки прожили всі вченні
// 3) Відсортувати вчених по алфавіту
// 4) Відсортувати вчених по даті народження
// 5) Відсортувати вчених по кількості прожитих років
// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// 7) Знайти вченого який народився найпізніше.
// 8) Знайти рік народження Albert Einstein
// 9) Знайти вчених прізвище яких починається на літеру С
// 10) Видалити з масива всіх вчених імя яких починається на A

// 1)
// let res = scientist.filter(el => el.year>=1800 && el.year < 1900)
// console.log(res);

// 2)
// let res2 = scientist
//     .map(el => el.passed-el.year)
//     .reduce(((acc, el) => acc + el),0)
// console.log(res2);

//  3)
    // let res3 = scientist.sort((a,b) => a.first > b.first ? 1 : -1)
    // console.log(res3);

    // let res3 = scientist.sort(function (a,b){
    //     if (a.first > b.first) {
    //         return 1
    //     } else {
    //         return -1
    //     }
    // })
    // console.log(res3);

// 4)
    // let res4 = scientist.sort((a,b) => a.year > b.year ? 1 : -1)
    // console.log(res4);


// 5)
    // let res5 = scientist.map(el => el.live = el.passed - el.year)
    // let res6 = scientist.sort((a,b) => a.live > b.live ? 1 : -1)

    // let res5 = scientist.sort((a, b) => (a.passed - a.year) - (b.passed - b.year))
    // console.log(res5);

// 6)
    // let res7 = scientist.filter( el => el.year <= 1400 || el.year>1800 )
    // console.log(res7);

// 7) 
    // let res8 = scientist.find(el => Math.max(el.year)) - не выводит правильно
    // let res8 = scientist.sort((a, b) => b.year - a.year).find(el => el)
    // console.log(res8);

// 8)
    // let res9 = scientist.filter(el => el.first === 'Albert').map( el => el.year) 
    // console.log(res9);

// 9)
    // let res10 = scientist.filter(el => el.last.includes('C'))
    // console.log(res10);

// 10) 
//     let res11 = scientist.filter(el => el.first[0] !== 'A')
//     console.log(res11);





    /**************************************************************************************************/

    /* 1 */

    /*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/* 
  Функция findGreaterThan получает два аргумента - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/


//   const findGreaterThan = (num, arr) => arr.filter(el => el>num)
  
//   console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
//   console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
//   console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]
  

  /* 
    Функция multiplyBy принимает два аргумента - число и массив. 
    Возвращает массив все значения которого умножены на число.
  */


//   const multiplyBy = (num, arr) => arr.map( el => el*num)
  
//   console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
//   console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
//   console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]
  
  /* 
    Функция summAllNumbers принимает любое число аргументов.
    Возвращает число - сумму всех аргументов.
  */


// const summAllNumbers = (...args) => args.reduce((acc, el) => acc + el);

// console.log( summAllNumbers(1, 2, 3) ); // 6
// console.log( summAllNumbers(1, 2, 3, 4) ); // 10
// console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15
  
  /* 
    Функция findEvery получает два аргумента - число и массив.
    Возвращает true если все элементы массива больше или равны числу.
    Иначе если есть хоть один элемент меньше числа, то возвращается false.
  */

//   const findEvery = (num, arr) => arr.every(el => el>=num)

//   console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
//   console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
//   console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true
  

/* 2 */

/*
  Напишите функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];
  
//  const res5_1 = guests.map(el => el.name);
//  const res5_2 = guests.map(el => el.age);
//  const res5_3 = guests.map(el => el.isActive);
//     console.log(res5_1);
//     console.log(res5_2);
//     console.log(res5_3);



/* 3 */

/*      
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
    
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
    
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: 'Mango', inactiveDays: 15, isActive: true },
//     { name: 'Poly', inactiveDays: 8, isActive: false },
//     { name: 'Ajax', inactiveDays: 32, isActive: false },
//     { name: 'Chelsey', inactiveDays: 85, isActive: true }
//   ];
  
// const setGuestState = (guests,num) => guests.map( el => el.inactiveDays > num ? el.isActive=false : el.isActive=true )

// //   // Вызовы функции для проверки
//   console.log(
//     setGuestState(guests, 10)
//   ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
  
//   console.log(
//     setGuestState(guests, 20)
//   ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
  
//   console.log(
//     setGuestState(guests, 50)
//   ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true



/* 4 */

/*
  Напишите функию getActiveGuests(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.
         
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];


// const getActiveGuests = (guests) => guests.filter(el => el.isActive)
//   // Вызовы функции для проверки
// console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax
  




/* 5 */

/*      
  Напишите функцию getGuestsOlderThan(guests, age), где 
  guests - массив объектов гостей, age - предел возраста 
  для сортировки. 
  
  Функция возвращает массив объектов значение свойства 
  age которых больше чем параметр age.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];


//   const getGuestsOlderThan = (guests, num) => guests.filter( el => el.age > num )
  
// //   Вызовы функции для проверки
//   console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
  
//   console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
  
//   console.log(getGuestsOlderThan(guests, 55)); // []
  




/* 6 */

/*
  Напишите функию getGuestById(guests, id), принимающую 
  guests - массив объектов гостей, id - идентификатор (число). 
  
  Функция должна возвращать объект гостя с совпадающим id.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { id: 1, name: 'Mango', age: 20 },
//     { id: 2, name: 'Poly', age: 18 },
//     { id: 3, name: 'Ajax', age: 30 },
//     { id: 4, name: 'Chelsey', age: 45 }
//   ];

// const  getGuestById = (guests, id) => guests.filter( el => el.id === id)
//   // Вызовы функции для проверки
//   console.log(
//     getGuestById(guests, 3)
//   ); // {id: 3, name: 'Ajax', age: 30}
  
//   console.log(
//     getGuestById(guests, 1)
//   ); // {id: 1, name: 'Mango', age: 20}
  
//   console.log(
//     getGuestById(guests, 5)
//   ); // undefined




/* 7 */

/*
  Используя метод reduce, посчитайте сумму 
  всех значений свойств объекта order.
*/ 
// const order = {
//     bread: 10,
//     apples: 25,
//     chicken: 60,
//     milk: 15,
//     cheese: 40
//   };
  
// let arr = Object.values(order)

// const res10 =arr.reduce((acc, el) => acc + el)

// console.log(res10); // 150



/* 8 */

/*
  Напишите функцию getTotalPrice(products, order), где 
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  
  PS: используйте метод reduce
*/

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    cheese: 30,
    chicken: 40
  };
  
  const orderA = {
    bread: 2,
    apples: 4,
    chicken: 1
  };
  
  const orderB = {
    bread: 1,
    milk: 2,
    cheese: 3
  };


const getTotalPrice = (function(products, order){
    const arr = [];
    for (let key in order) {
        arr.push(order[key]*products[key])
    } 
    return arr.reduce((acc, el) => acc + el, 0)
})

  // Вызовы функции для проверки
  console.log(getTotalPrice(products, orderA)); // 140
  
  console.log(getTotalPrice(products, orderB)); // 130
  


  /* 9 */ 


  /*     
  Напишите функию allGuestsActive(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать true если значение поля isActive 
  всех объектов true, в противном случае false.
  
  PS: используйте метод every или some, никаких for!
*/

const guestsA = [
    { name: "Mango", isActive: true },
    { name: "Poly", isActive: false },
    { name: "Ajax", isActive: true }
  ];
  
  const guestsB = [
    { name: "Mango", isActive: true },
    { name: "Poly", isActive: true },
    { name: "Ajax", isActive: true }
  ];
  

const allGuestsActive = (arr) => arr.every(el => el.isActive)

  // Вызовы функции для проверки
  console.log(allGuestsActive(guestsA)); // false
  
  console.log(allGuestsActive(guestsB)); // true
  