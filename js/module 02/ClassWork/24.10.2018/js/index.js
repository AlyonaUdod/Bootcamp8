'use strict';

// let arr = [52, 23, 12, 10];
// let arr2 = new Array (1, 5, 89, 52, 23, 12, 10);

// console.log(arr2.length);
// console.log(arr2[3]);

// let arr = [1,2,3,4,[1,2,5,9,12,15,[23,24,124,2,[34.3,5,98,['Error']]]]];
// arr[0] = 120;
// arr[3]= 345;
// arr[25]= 567;
// console.log(arr);

// let firstArr = [ 'Ваня', 'Данил', 'Костя'];
// let secondArr = [ 1, 3, 6];
// firstArr.push( 'Катя', 'Юля');
// firstArr.push( 'Килька');
// firstArr.shift();
// firstArr.unshift('Оля', 'Коля');
// let a = firstArr.pop();
// secondArr.push(a);

// let lengthArr = firstArr.length;
// console.log(firstArr[lengthArr - 1]); /* всегда обращается к последнему элементу массива, вне зависимости от его индекса */
// // console.log(secondArr);
// // console.log(a);
//  console.log(firstArr.indexOf('Данил'));
//  console.log(firstArr.includes('23'));



/* ------------------------------------------ */
/* Задания, классная работа */

// let logins = ['rew', 'qwewwe', 'apple', 'js', 'row', 'col'];
// // 1) Запитати логін через prompt
// // 2) Перевірити чи існує логін в масиві logins
// // 3) Якщо логін існує вивести алерт ("Такий логін вже існує")
// // 4) Якщо логін не існує вивести алерт ("Вітаємо") 
// console.log (logins);
// let ask = prompt('Enter Login');
// if (logins.includes(ask)) {
//     alert ("Такой логин уже существует")
// } else {
//     let logins2= (logins.push(ask))
//     alert ("Ура, логинься")
// }
// console.log (logins2);
// switch (true) {
//     case (logins.includes(ask)) :
//         alert ('Такой логин существует');
//         break;
//     case !(logins.includes(ask)):     
//         alert ('Ты можешь логиниться!');        
//         // logins.push(ask);
//         break;
// }

// console.log (logins);

// console.log (logins);
// logins.includes(ask) ? alert ('Error') : logins.push(ask), alert ('Happy!');
/* ------------------------------------------ */


// let firstArray = [10, 8, 7, 5];
// let secondArr = [12, 13, 16, 19, 87];
// let newArray = ['add me', 'join us'];
// let result = firstArray.concat(secondArr, newArray);
// // let result = firstArray.concat(secondArr,newArray, 100);
// console.log(result);
// console.log(firstArray);
// // console.log(newArray);



// slice and splice
// slice start index and end index do not includes делает копию исходного 
// splice start index and how many

// let arr = [5, 10, 12, 15, 25]; 
// let newArr = arr.slice(0,2); /* индекс с которого начать, и индекс до которого вырезать */
// let arr3 = arr.slice(); /* делается копия массива */ 

// console.log(arr);
// console.log(newArr);


// let arr = [1, 5, 9, 8, 7, 10];
// let x = arr.slice();
// x.splice(2,1);
// x.splice(3, 0, 'a', 's', 'd');
// // delete
// let x = arr.splice(1, 1);
// console.log(arr);
// console.log(x);
// paste
// let a = arr.splice(4, 1, 'b', 'c', 'f');
// arr.splice(1, 0, 'javascript');
// console.log(arr);
// // replace
// arr.splice(5, 1, 'abc');
// console.log(arr);
// arr.splice(1, 4, 'java', 'script');
// console.log(arr);

// let NewArr = arr.reverse() /* переписывает существующий массив */
// let newArr = arr.slice().reverse();
// console.log(newArr);


/*----------------------------------------*/
// 1. Записываем в строку переменную из промта.
// 2. Делаем строку массивом. splite
// 3. Копируем массив. 
// 4. Реверс массива. 
// 5. Из массивов делаем строки. join 
// 6. Сравниваем исходную строку с реверсной. 

// let str = prompt('Напиши слово');
// let arrStr = str.split('');
// let arrStrRew = arrStr.slice().reverse();
// let rew = arrStrRew.join('');
// if ( str === rew) {
//     alert ('Палиндром!')
// } else {
//     alert ('Shit\'s happend')
// }

// console.log(str);
/*----------------------------------------*/


/*----------------------------------------*/
// let animals = ["cat","dog","rabbit","bird","fish"];

// 1. Необходимо выбрать случайное значение. от нуля до длины массива.
// 2. Записать в переменную обращение массив [индекс]
// 3. вывести аллертом.

// let rand = Math.floor(Math.random()*animals.length);
// console.log(rand);
// let show = animals[rand];
// console.log(show);
// alert (show);
/*----------------------------------------*/




/*----------------------------------------*/
// 1. Написать через prompt свой вариант животного.
// 2. Вариант компьютера записать в переменную.
// 3. Сравнение в if else 

// let animals = ["cat","dog","rabbit","bird","fish", "elefant", "camel", "bird"];

// let rand = Math.floor(Math.random()*animals.length);
// console.log(rand);
// let show = animals[rand];
// console.log(show);

// let game = prompt ('Напиши одно из животных "cat, dog, rabbit, bird, fish, elefant, camel, bird"');
// if ( game === show) {
//     alert ( 'Ты крут!')
// } else {
//     alert ('Комп выиграл')
// }
/*----------------------------------------*/



/*----------------------------------------*/
/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.
  
  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях 
  элементы массива.
*/

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// console.log(users.length); // 4

// console.log(users[1]); // Poly
// console.log(users[3]); // Chelsey
// console.log(users[0]); // Mango
// console.log(users[2]); // Ajax
/*----------------------------------------*/




/*----------------------------------------*/
/* Есть массив имен пользователей */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// /* Используя методы массива, последовательно выполнить следующие операции */

// // Удалить из начала массива нулевой элемент
// console.log(users.shift()); // ["Poly", "Ajax", "Chelsey"]
// console.log(users);
// // Удалить из конца массив последний элемент
// console.log(users.pop()); // ["Poly", "Ajax"]
// console.log(users);
// // Добавить в начало массива любое имя
// console.log(users.unshift('Ruby')); // ["добавленое имя", "Poly", "Ajax"]
// console.log(users);
// // Добавить в конец массива два любых имени за одну операцию
// console.log(users.push("Muse", "Lisy")); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]
// console.log(users);
/*----------------------------------------*/


/*----------------------------------------*/

// Написати гру Камінь Ножиці Папір.
// Варіанти вибору потрібно зберігати в масиві
// Користувач вводить свій варіант
// Компютер вибирає свій рандомний варівант з масиву
// Первіряємо вибір користувача і вибір компютера. 


let game = ["Камень","Ножницы","Бумага"];
let rand = Math.floor(Math.random()*game.length);
console.log(rand);
let show = game[rand];
console.log(show);

let play = prompt ('Сыграем! Камень, Ножницы, Бумага, 1, 2, 3!').toLowerCase();
let choise = play;
if ( choise === 'камень' && show === 'Камень' || 
     choise === 'бумага' && show === 'Бумага' || 
     choise === 'ножницы' && show === 'Ножницы') {
  alert ('Ничья! Победила дружба')
} else if  ( choise === 'бумага' && show === 'Камень' ||
             choise === 'ножницы' && show === 'Бумага' ||
             choise === 'камень' && show === 'Ножницы'){
  alert ('Ты выиграл! :)')
} else if  ( choise === 'камень' && show === 'Бумага' ||
             choise === 'ножницы' && show === 'Камень' ||
             choise === 'бумага' && show === 'Ножницы'){
  alert ('Ты проиграл! :(') 
} else {
  alert ('Попробуй в следующий раз ввести камень, ножницы или бумага')
}
