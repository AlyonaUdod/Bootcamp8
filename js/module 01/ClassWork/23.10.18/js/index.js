'use strict';

// let str = 'hello world red fox run away';
// console.log(str.length); /* длина строки */

// console.log(str.toLowerCase()); /* все буквы маленькие */
// console.log(str.toUpperCase()); /* все буквы большие */

// console.log(str.includes('z')); /* выдает false, потому что такого символа в строке нет, чувствительно к регистру */
// console.log(str.indexOf('l'));  /* выдает только первое совпадение, стопает работу, чтобы искало слово необходимо слева и справа ограничить пробелами */
// console.log(str[6]);

// // str[0].toUpperCase;
// // console.log(str);

// // console.log(str.split(' ')); /* разбивает строку на отдельные слова в массив */

// let arr = str.split(' ');
// // let arrBig = arr[0].toUpperCase();
// console.log(arr);
// let strNew = arr.join(' ');
// console.log(strNew);


// console.log(str.slice(5,10)); /* из строки вырезает символы, в данном случает первые три символа С какого символа начинаем до какого порядкового номера вырезать */
// console.log(str.substr(6,7)); /* с какого символа и сколько штук вырезаем  С какого символа начинаем и сколько штук вырезаем*/
// console.log(str.substring(5,10)); /* работает как slice, только называется по-другому */
// console.log(str.substring(5,10));
// console.log(str.replace('world', 'create')); /* заменяет одно слово на другое */

// console.log(Math.floor(2.99999999)); /* к меньшему числу */
// console.log(Math.ceil(2.000000878)); /* к большему числу */
// console.log(Math.round(2.5656234234)); /* округляет по математическим правилам, только 1 число после запятой */
// console.log(Math.abs(10)); /* модуль */
// console.log(Math.pow(9,2)); /* возведение в степень, первое число число, второе степень */
// console.log(Math.sqrt(30)); /* квадратный корень, кубический и тп - возведение в степень 1/3, 1/4*/
// console.log(Math.max(-50,-14)); /* выводит максимальное число из набора, тут только 2, больше 2х это уже из массива */
// console.log(Math.min(4, 7)); /* выводит минимальное число из набора, тут только 2, больше 2х это уже из массива */
// console.log(Math.random()); /* выдает любое число от 0 до 1, 1 не выпадет никогда. */
// console.log(Math.random()*100); /* выдает любое число от 0 до 100, 100 не выпадет никогда. */
// console.log(Math.round(Math.random()*10)+50); /* выдает любое число от 50 до 60, округлили. */

/* есть еще куча математический операций, залезть в документацию Math и понеслось */

// console.log(password.length > 5);

// let a = 5;
// let b = '5';
// // console.log (a = b); /* а присваивается значение в */
// console.log (a == b); /* это уже сравнение, мы чисто сравниваем по ифнормации */
// console.log (a === b); /* это уже сравнение, сначала сравниваем типы данных, потом сравниваем по ифнормации */


// let a = null,
//     b = undefined;
//     console.log (a == b); /*  */
//     console.log (a === b);  /* всегда использовать === чтобы контролировать типы данных, которые мы используем */


// let a = NaN,
//     b = NaN;
//     console.log (a != b); /*  */
//     console.log (a !== b);  /* проверка на неравенство, ! - проверка на НЕ */

/* FALSY  при превращении чего-то в будлевый оператор эти значения всегда будет выдавать false*/
// console.log(Boolean(0));
// console.log(Boolean(-0));
// console.log(Boolean(false));
// console.log(Boolean(null));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

/* Логические операторы */

// && /* и, останавливается на первом false, если таких нет показывает последнее значение true*/
// || /* или, останавливается на первом true, если таких нет показывает последнее значение false */

/* проверки приводят к булевому типу данных */


//  Control Structures 
//  if else - условие
//  function
//  цикл

// let time = prompt('Enter time');

// if (time <= 21) {
//     alert ('You are Win! Включай телевизор')
// } else {
//    alert ('Иди спать')
// }; 

// if (Number(time)) {
//     if (time <= 21) {
//             alert ('You are Win! Включай телевизор')
//         } else {
//            alert ('Иди спать')
//         }
// } else {
//     alert ('Введите число');
// }

// console.log(time);

// let month = prompt('Enter Month').toLowerCase();

// if (month === 'декабрь'|| month === 'январь' || month === 'февраль') {
//     alert ('Зима');
// } else if (month === 'март'|| month === 'апрель' || month === 'май' ) {
//     alert ('Весна');
// } else if (month === 'июнь'|| month === 'июль' || month === 'август' ) {
//     alert ('Лето');
// } else if (month === 'сентябрь'|| month === 'октябрь' || month === 'ноябрь' ) {
//     alert ('Осень'); 
// } else {
//     alert ('Ошибка')
// }


// switch (month) {
//     case 'декабрь' : 
//         alert ('Зима');
//         break;
//     case 'январь' : 
//         alert ('Зима');
//         break;
//     case 'февраль' : 
//         alert ('Зима');
//         break;
//     case 'март':    
//     case 'апрель':    
//     case 'май':    
//         alert ('Весна');
//         break;
//     default:
//         alert ('Ошибка ввода');
//         break;
// }


/* 
switch (true) {
    case (month > 5);
        alert ('весна');
        break;
     default:
        alert ('Ошибка ввода');
        break;
} */

/* Тернарный оператор */

// let age = prompt('Enter Age');

// let result = age > 15 ? 'Студент' : 'Учень';

// let result = age > 15 ? 'Студент' : age < 15 && age > 8 ? 'Учень' : 'Дитина';

// if (age > 15) {
//     result = 'Student';
// } else {
//     result = 'School';
// }




/* 1 */

// let guest = undefined;
// let name = 'Mango';
// console.log(guest=name);



/* 3 */

// let start = prompt('Enter Name');
// alert (start);

/* 4 */

// const name = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';

// const message = `${name} прибывает на отдых ${date} в ${roomType}.`;

// console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.


/* 5 */

/*
  Есть 3 переменные в которых хранится  размер составляющих 
  блочной модели в формате Npx, где N это целое число.
  
  Используя эти переменные, запишите в переменную totalWidth 
  общую ширину блока в формате Npx.
  
  К примеру "сумма" '20px' и '30px' будет равна '50px'.
  
  Если все верно, то в консоли будет выведена строка '125px'
*/

// const padding = "20px";
// const border = "5px";
// const contentWidth = "100px";

// let totalWidth = Number.parseInt(padding) + Number.parseInt(border) + Number.parseInt(contentWidth);

// console.log(totalWidth); // '125px'
 

/* 6 */

/*
  Напишите скрипт который: 
  
  - Через prompt cпрашивает 'Какой сейчас год?'
  - Если посетитель вводит 2018 - показывать alert со строкой 'Все верно!'
  - Если что-то другое — показывать alert 'Но ведь на вдоре 2018!'
  
  PS: используйте конструкцию if..else.
*/ 


// let year = prompt('Какой сейчас год?');

// switch (year) {
//     case '2018' :
//         alert ( 'Верно!');
//         break;
//     default :
//         alert (' Но ведь 2018!');
//         break;
// }


/* 7 */

/*
  Напишите скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
  
  PS: используйте конструкцию if..else.
*/ 

// let num = prompt('Введите произвольное целое число');

// if (.Numberis.NaN) { 
//     if (num = Number.isInteger) {
//         alert ('Спасибо!');
//     } else {
//         alert ('Необходимо было ввести целое число!');
//     }
    
// } else {
//     alert ( 'Приходите еще!');
// }

// if (num === null) {
//     alert ('Приходите еще!');
// } else if (Number.isInteger(Number(num))) { 
//     alert ('Спасибо');
// } else {
//     alert ('Необходимо было ввести целое число!');
// }


/* 8 */

/* 
  В переменную num записывается случайное число.
  
  Используя ветвления запишите в переменную type строку:  
    - "even" если num четное
    - "odd" если num не четное

  PS: попробуйте использовать тернарный оператор
*/

// const num = Number.parseInt(Math.random() * 100);

// let type = num %2 ? 'odd' : 'even';

// console.log(`${num} is ${type}`);


/* 9 */

/* 
  Время состоит из: 
    часов(hours)
    минут (minutes)
    секунд(seconds).
  
  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45
  
  Составляющие времени не гарантированно состоят из 2-х цифр!
  
  Напишите скрипт который проверяет каждую составляющую,
  тоесть значения переменных hours, minutes, seconds 
  и добавлят впереди 0 если необходимо.
*/


// let a = 7;
// let b = 3;
// let c = 42;

// let hours = a >= 10 ? a : '0'+a;
// let minutes = b >= 10 ? b : '0'+b;
// let seconds = c >= 10 ? c : '0'+c;

// const time = `${hours}:${minutes}:${seconds}`;

// console.log('Time is: ', time);



/* 10 */

/* 
  Создайте срипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то вывести 
  alert с текстом 'очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, 
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, 
  в зависимости от числа, используя switch, 
  вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/

// (month === 'декабрь'|| month === 'январь' || month === 'февраль') {
let hotel = prompt('Поиск Отелей');

if (hotel === null) {
    alert ('Очень жаль, приходите еще!');
} else if (hotel < 1 || hotel > 5 ) {
    alert ('Неверный ввод, возможные варианты 1-5!');
} else {
    switch (hotel) {
        case '1' :
            alert ("Каталог хостелов");
            break;
        case '2' : 
            alert ("Каталог бюджетных отелей");
            break;
        case '3' : 
            alert ("Каталог отелей ***");
            break;
        case '4' : 
            alert ("Каталог отелей ****");
            break;
        case '5' : 
            alert ( "Каталог лучших отелей");
            break; 
    }
}