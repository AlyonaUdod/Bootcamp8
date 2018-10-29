'use strict';

/* --------------------------------- */
// while - сначала выполняется проверка, а потом только выполняется код. У нас только проверка.

// let num = 0; /* обычно счетчики называет 1 буквой, чтобы было понятно, что это просто счетчик */
// let arr = [];
// // // пока номер меньше 4 выводить в консоль этот номер и потом увеличивать на 1.
// // console.log(num<4);
// while (num < 4) {
//     let userNumber = prompt('Enter Number');
//     if (Number(userNumber) === 9)  {
//     alert ('9 - Wrong Number!') /* 9 вводить нельзя */
//     num+=1 /* даже если человек ввел число 9 счетчик все равно посчитал это как ввод */
//     continue
// } else if (userNumber!== null && userNumber !== '') {
//     arr.push(Number(userNumber)); /* Number - мы превращаем в номер строку полученую из prompt */
//     num+=1 /* увеличивает на 1, лучше работает такой вариант в браузере */
// } else {
//     break } 
//     // num++ /* увеличивает на 1 */
// }  /* Каждый проход цикла - итерация */

// console.log(arr);

// let const - имеют блочную область видения. Если мы их создали в цикле, то только 
// в цикле мы и можем к ним достучаться. За пределами цикла ее не существует.


// while (num < 4) {
//     let userNumber = prompt('Enter Number');
//     if (userNumber!== null && userNumber !== '') {
//         if (Number(userNumber) === 9)  { 
//             alert ('9 - Wrong Number!')
//             num+=1
//             continue 
//         } else {
//             arr.push(Number(userNumber));
//             num+=1 
//         }
//     } else {
//         break
//     }
// }

// console.log(arr);






/* --------------------------------- */
// do while - сначала выполняется код, а потом делается проверка.

// let number = 1;
// do {
//     console.log(number);
//     number++;
// }
// while (number < 5);






/* ------------------------------- */
// for - уплотнили while. 

// let arr = [];
// for (let i = 0; i < 10; i+=1) {
//     let number = prompt('Enter Number');
//     arr.push(Number(number));
// }

// console.log(arr);-- */

// toFixed - всегда в строку превращает.

// let arr = [5, 10, 25, 68, 78, 95];
// let arrTenPrc = [];
// for(let i=0, max = arr.length; i < max; i+=1) {
//     arrTenPrc.push(Number((arr[i]*1.1).toFixed(2)));
// }

// console.log(arrTenPrc);






/* ------------------------------- */
// for of - за нас создает счетчик, за нас все перебирает, нам надо только сказать какой массив перебирать. 
// Создан для работы с массивом.


// let arr = [5, 10, 25, 68, 78, 95];
// let arrTenPrc = [];
// for(let element of arr) {
//     arrTenPrc.push(Number((element*1.1).toFixed(2))); 
// }

// console.log(arrTenPrc);


// область видения функции создается только тогда, когда запускается функция (!!!)


/* ------------------------------- */
// Задачи

// / * 1 */
 
/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/

// let string = [];
// let arr = [];

// string = prompt('Введи текст');
// arr = string.split(' ');

// // Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
// console.log(arr);

// // Вывести в консоли общую длину массива arr
// console.log(arr.length);

// // Используя цикл, вывести в консоль все индексы массива arr
// for (let elements of arr) {
//     console.log(arr.indexOf(elements));
// }

// // Используя цикл, вывести в консоль все элементы массива arr
// for (let elements of arr) {
//     console.log(elements);
// }

// // Используя цикл, bывести в консоли все пары индекс:значение массива arr
// for (let elements of arr) {
//     console.log((arr.indexOf(elements))+"="+(elements));
// }


/* 2 */

/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

  Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, 
  либо не нажмёт кнопку Cancel.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/


// let string
// do {
//     string = prompt('Enter Number')
//     if ( string === null) {
//         alert ('Next Time!')
//         break;
//     } else if (string > 100 ){
//         alert ('You Win!');
//         break;
//     } else {
//         alert ('Enter number > 100')
//     }
// } while ( string !== null && string <= 100)


// let user;
// do{
//     user = prompt('Введие число больше 100')
// } while(user < 100 && user!==null)


/* 3 */

/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

// const min = 1;
// const max = 100;
// let i;
// for ( i = min; i <= max; i++) {
//     if (i%3 === 0) {
//         console.log('Fizz')
//     } else if(i%5 === 0 && i%3 !== 0) {
//         console.log('Buzz')
//     } else {
//         console.log(i)
//     }
// }


/* 4 */

/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];

// for ( let elements of numbers) {
//   if ( num < elements){
//     newArray.push(elements)
//   } 
// }
// console.log(newArray);



/* 5 */

/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/


// const string = "May the force be with you";
// let arr = string.split(' ');
// let longestWord = arr[0];
// let count = arr[0].length;

// for(let i=0;i<arr.length;i++){
//     if(arr[i].length > count){
//       count = arr[i].length;
//       longestWord=arr[i];
//     }
// }
// console.log(longestWord); // 'force'


/* 6 */

/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  
  - Заканчивает запрашивать числа, как только посетитель введёт не число 
    или нажмёт Cancel. При этом ноль 0 не должен заканчивать ввод, 
    это разрешённое число.
  
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/

// let num 
// const arr = []
// let total = 0;

// do {
//   num = prompt('Enter Number');
//     if (num === null) {      
//       break;
//     } else if (!isNaN(num)) {
//       arr.push(Number(num))
//     } else {
//       alert ('Number!')
//     }
// } while (num !== null)

// for (let elements of arr) {
//   total += elements
// }

// alert (`Sum ${total}`)


/* 7 */

/*
  ***ЗАДАНИЕ ПОВЫШЕНОЙ СЛОЖНОСТИ***
  
  Создайте игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Но пользователь может ввести что угодно, необходимо проверить 
  что было введено. Преобразовать input в числовой тип и проверить 
  число ли это.
  
    - Если не число - выводим alert с сообщением о том, что было 
      введено не число.
    - Если число - проверить содержит ли в себе массив numbers это число.
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

const numbers = [12, 15, 25, 37, 41];
let num 

do {
  num = prompt("Let's play! Enter number from 12 to 41") 
      if (num === null) {
      alert ('Thanks for play! Hope see you soon!')
      } else if (!isNaN(num)){
          if (numbers.includes(Number(num))) {
            alert ('You Win!')
          } else {
            alert ('You lost!')
          }
    } else {
      alert ('Enter a Number!')
    }
} while ( num !== null) 
