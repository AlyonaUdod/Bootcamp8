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

// const BMW = {
//     wheels : 4,
//     color: 'red',
//     year : 2018,
//     model: 'X5',
//     fullComplect: false,
//     move : function () {            // первый способ записи функции в объекте.
//         console.log('I\'m move');
//     },
//     stop() {                        //второй вариант записи функции в объекте.
//         console.log('Stop');
//     },
//     start: () => console.log('start'), // так делать не надо. Когда используем this стрелочная функция выдает ошибку.
    
//     getColor : () => console.log(BMW.color),
// }

// // BMW.move();
// // BMW.stop();

// // console.log(console);
// BMW.getColor();



// let obj1 = {
//     name : 'Chack',
// }

// let obj2 = obj1;
// let obj3 = obj2;

// obj1.name ='Ric';

// obj2.name = 'kate';


// console.log(obj1);
// console.log(obj2);
// console.log(obj3);


// let user = {
//     name : 'Bob',
//     age: 45,
//     isHappy: true,
// }

// let user2 = Object.assign({}, user)     // сделать полную копию объекта, слить несколько объектов в один. 
// user2.name = 'Stue';
// user.age = 12;
// user2.work = 'manager';

// console.log(user);
// console.log(user2);

// // let user3 = Object.assign({}, user2, user) // суть - взять существующий объект и в него напихать столько объектов сколько мы хотим. 
// // console.log(user3);

// Object.assign(user2, user);
// console.log(user2);


// ... - оператор спред 

// const a = { x:1, y:2};
// const b = { x:0, z:5};

// // const c = Object.assign({}, a, b);                // первый вариант сливания двух объектов
// const c = {                                 // второй вариант слияния двух объектов, с помощью спред оператора.
//     ... a,
//     ... b, 
//     d : 2000,
//  };
//  console.log(c);



// for .. in // цикл перебора ключей в массиве

// let hotel = {
//     name : '7 Days',
//     stars: 4,
//     rooms: 150,
// };

// for (let key in hotel) {
//     if (hotel.hasOwnProperty(key)) { // hasOwnProperty - для того, чтобы проверка на ключи не лезла в __proto__
//         console.log(`${key}: ${hotel[key]}`);
//     }
// }


// let HOTEL = {
//     name : 'Resort Hotel',
//     stars : 5,
//     status : 'LUX',
//     roomNumbers : 100,
//     personal: ['Bob', 'Bender', 'Ben']
// };

// const keys = Object.keys(HOTEL); // вытянуть из объекта названия ключей в виде массива
// const values = Object.values(HOTEL); // вытянуть из объекта значения в виде массива
// const entries = Object.entries(HOTEL); // вытягиваем все значения из объекта в формате массивов ключ:значение в массиве.
//     console.log(keys);
//     console.log(values);
//     console.log(entries);





// let hotel = {
//     name : 'Resort Hotel',
//     stars : 5,
//     status : 'LUX',
//     roomNumbers : 100,
//     personal: ['Bob', 'Bender', 'Ben']
// };

// // let name = hotel.name;
// // let stars = hotel.stars;
// // let status = hotel.status;

// const { name, stars, status, roomNumbers, cash} = hotel;  // дестрктуризация. это тоже что и чуть выше 3 строки, простая запись.

// console.log(roomNumbers);
// console.log(cash);



// let dog = {
//     name: 'Mango',
//     age: 5,
//     isHappy: true,
// };


// function showObjVal({name, age, isHappy}) {   // деструктцризация в функции, удобно. Ключи должны соответствовать названиям ключей в объекте. можем писать только то колличество ключей, которые нам необходимо получить.
// console.log(name);
// console.log(age);
// console.log(isHappy);
// }

// showObjVal(dog)

// let strNum = ['one', 'two', 'three']; // деструктуризация массива. 
// let [ a, b, c, d ] = strNum;

// console.log(a);
// console.log(d);





/**************/

/* 1 */

/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };
  
//   user.mood = 'happy';
//   user.hobby = 'javascript';
//   delete user.premium;

//   for (let key in user) {
//     if (user.hasOwnProperty(key)) { // hasOwnProperty - для того, чтобы проверка на ключи не лезла в __proto__
//             console.log(`${key}: ${user[key]}`);
//     }
//   }

//   let keys = Object.keys(user);
//   for (let el of keys) {
//     console.log(`${el}: ${user[el]}`);
// }               


// let all = Object.entries(user);
// for (let el of all) {
//    console.log(`${el[0]}: ${el[1]}`);
// }
 





/**************/

/* 2 */


/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
//   };
  

// let values = Object.values(tasksCompleted);
// let count = 0;
// for ( let el of values) {
//     if (el>count) {
//         count=el
//     }  
// }
// for ( let elem in tasksCompleted) {
//     if (tasksCompleted[elem] === count){
//         console.log(`${elem}: ${count}`);
//     }
// }



/**************/

/* 3 */

/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// let countProps = function(obj) {
//     let keys = Object.keys(obj);
//     return (keys.length)
// }

// Вызовы функции для проверки
// console.log(
//     countProps({})
//   ); // 0
  
//   console.log(
//     countProps({a: 1, b: 3, c: 'hello'})
//   ); // 3


//   console.log(
//     countProps({a: 1, b: 3, c: 'hello', d: 35, f: 56})
//   ); // 3





/**************/

/* 4 */

/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// let isObjectEmpty = function(obj) {
//     let keys = Object.keys(obj)
//      if ( keys.length > 0) {
//         return obj.hasOwnProperty()   
//      } else {
//         return !obj.hasOwnProperty()   
//      }
//   }

// // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
//   ); // true
  
//   console.log(
//     isObjectEmpty({a: 1})
//   ); // false
  
//   console.log(
//     isObjectEmpty({a: 1, b: 2})
//   ); // false
  



/**************/

/* 5 */

/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/

// let countTotalSalary =function(salaries) {
//     let values = Object.values(salaries);
//     let count = 0;
//     for (let elem of values) {
//             count += elem;
//     } return count
// }


// // Вызовы функции для проверки
// console.log(
//     countTotalSalary({})
//   ); // 0
  
//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80
//     })
//   ); // 330



/**************/

/* 6 */

/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// function getAllPropValues (arr, prop) {
//     let arr1 = [];
//     for (let el of arr) {
//         if (el.hasOwnProperty(prop)) {
//          arr1.push(el[prop])   
//         }
//     } return arr1
// }

// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
//   ];
  
//   // Вызовы функции для проверки
//   console.log(
//     getAllPropValues(users, 'name')
//   ); // ['Poly', 'Mango', 'Ajax']
  
//   console.log(
//     getAllPropValues(users, 'mood')
//   ); // ['happy', 'blissful', 'tired']
  
//   console.log(
//     getAllPropValues(users, 'active')
//   ); // []






/**************/

/* 7 */

// Написати ф - ю яка знаходить в масиві число яке найблище знаходиться до нуля і повертає його.
// Якщо таких чисел 2(тобто 1 і - 1) тоді повертати додатнє

function closestToZero (arr) {
    for ( let el of arr) {
        if (Math.min(Math.abs(el))){
            return el
        // } else if ( Math.abs(el) === Math.min(el)) {
        //     return Math.min(el)
        }      
    }
 }


console.log(
    closestToZero([-5, -3, 1, 2, 3, 5])
    ); // 1
console.log(
    closestToZero([-2, 3, 5, 10])
    ); // -2
console.log(
    closestToZero([-7, -5, -3, 3, 5, 8])
    ); //3





/**************/

/* 8 */ // !ready

// Дано обєкт товарів виведіть товари в консоль ціна яких більше 20


// let goods = {
// 	"dd" : {
// 		"name": "Яблоки",
// 		"cost": 13
// 	},
// 	"dc" : {
// 		"name": "Груши",
// 		"cost": 23
// 	},
// 	"cd" : {
// 		"name": "Абрикосы",
// 		"cost": 33
// 	},
// 	"dee" : {
// 		"name": "Сливы",
// 		"cost": 43
// 	},
// 	"dd2" : {
// 		"name": "Вишни",
// 		"cost": 19
// 	},
// };

// const res = goods.filter(el => el.cost>20)
// console.log(res);

// function getCost (obj) {
//   let arr = [];
//   for ( let el in obj) {
//     if (obj[el].cost>20) {
//      arr.push(el);
//     }
//   } return arr
// }
// console.log(
//   getCost(goods)
// );



/**************/

/* 9 */

// Написати ф-ю cipher яка приймає зашифровану строку і повертає розшифровану. Перетворення строки відбувається за алгоритмом ROT13 який заміняє поточну літеру 13 буквою в абетці після неї. Наприклад A => N; K => X; R => E; U => H;
// Перші 13 літер алфавіту зміщуються вправо. Другі 13 літер зміщується вліво. Використати методи строки: 
// fromCharCode()  =   букви в юнікод
// charCodeAt()      = юнікод в букви
// console.log(cipher("SERR CVMMN"))  // FREE PIZZA;
// console.log(cipher("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT"))  // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG;




/**************/

/* 10 */

/*
let worker = {
    workSchedule: [
        {day: 'M', hours: 9},
        {day: 'T', hours: 10},
        {day: 'W', hours: 11},
        {day: 'T', hours: 5},
        {day: 'F', hours: 12},
        ],
        penalty: [
        {day: 'M', value: 0},
        {day: 'T', value: 120},
        {day: 'W', value: 50},
        {day: 'T', value: 0},
        {day: 'F', value: 35},
        ],
        premium: 500,
}

написати ф-ю getSalary(worker, rate) яка приймає аргументами обєкт робітника і погодинну ставку.
Ф-я вертає зарплату робітника за тиждень з урахуванням штрафів і премій
hours - години роботи
value - сума штрафу
premium - премія
console.log(getSalary(worker, 20)); // 1235
console.log(getSalary(worker, 8)); // 671
*/