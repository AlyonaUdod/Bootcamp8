'use strict';

// function addTwoNumbers () { /* если мы создаем функцию, то все равно выше или ниже создания функции мы будет ее использовать. */
//     console.log(5+6);
// }

// addTwoNumbers();  

// const addTwoNumbers = function () {  /* Если функция создана константой, то ее, как константу, можно использовтаь только ниже ее создания */
//     let result = 5+6;
//     return result;
// }
// console.log(addTwoNumbers ());

// /* можем результат записать в переменную */

// let sum = addTwoNumbers();


// /* в функцию можно передавать параметры (а в с), 4 и 44 это аргументы */
// function AddThreeNumbers (a, b, c) {
//     let result = a+b+c;
//     return result;
// }

// let sum3 = AddThreeNumbers(4,44,4);

// console.log(sum3)


// /* функция вычисляет век */

// const century = function(year) {
//     age = Math.ceil(year/100);
//     return age;
//  }
 
//  console.log(century(562));
//  console.log(century(2018));
//  console.log(century(1583));

//  /* ..... */


// function add () { /* если мы не знаем сколько аргументов точно мы будем передавать, то ничего не пишем в параметры */
//     // console.log(arguments);
//     let arr = Array.from(arguments);
//     // console.log(arr);
//     let total = 0;
//     for (let elements of arr) {
//         total += elements;
//     }
//     return total;
// }


// /* Псевдомассывы. нет методов для работы с массивом, необходимо превратить в массив обычный!! */
// console.log(add (5,10,20));
// console.log(add ('fff', 'rrr', 'fgfg'));
// console.log(add (1,2,3,8,56));



// function connect (par1=3, par2=3, par3=100) {
//     return par1 + par2 + par3;
// }


// connect(5,6);
// connect(null,3); /* когда нам надо запустить функцию, но пропуститить один из аргументов. Пишем вместо этого аргумента null */

// console.log(connect(3,5));
// console.log(connect(3));
// console.log(connect(3, null, 8));
// console.log(connect(null, 3));




// let a = 10;
// let b = 20;





/* --------------------------------- */

/* 1 */
/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки

// function checkNumberType (par1) {
//     if (par1%2) {
//        return 'Odd'
//     } else {
//        return 'Even'
//     }
// }
// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'




/* --------------------------------- */
/* 2 */

/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

// function formatString (str) {
//     if (str.length >= 40) {
//         let str1 =(str.slice(0,40)+'...')
//         return str1
//     } else {
//         return str
//     }
// }

// // Вызовы функции для проверки
// console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
//   ); // вернется оригинальная строка
  
//   console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
//   ); // вернется форматированная строка
  
//   console.log(
//     formatString("Curabitur ligula sapien.")
//   ); // вернется оригинальная строка
  
//   console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
//   ); // вернется форматированная строка



/* --------------------------------- */

/* 3 */


/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

// function checkForSpam (str) {
//     if (str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')) {
//         return true
//     } else {
//         return false
//     }
// }

// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best SALE offers now!') ); // true




/* --------------------------------- */

/* 4 */

/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/


// function getPx(str) {
//     if ( typeof str === 'string' ) {
//         return parseFloat(str);
//     } else {
//         return null
//     }
// }

// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null





/* --------------------------------- */

/* 5 */


/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*/

// function findLongestWord (str) {
//     let arr = str.split(' ');
//     let longestWord = arr[0];
//     let count = 0;
//     for (let i=0; i<arr.length; i++) {
//         if(arr[i].length > count){
//         count = arr[i].length;
//         longestWord=arr[i];}
//     }
//     return longestWord;
// }

// // Вызовы функции для проверки
// console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
//   ); // вернет 'jumped'
  
//   console.log(
//     findLongestWord("Google do a roll")
//   ); // вернет 'Google'
  
//   console.log(
//     findLongestWord("May the force be with you")
//   ); // вернет 'force'
  






/* --------------------------------- */

/* 6 */

  /*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/


// function findLargestNumber(numbers) {
//     let largestNumber = 0;
//     for (let elements of numbers) {
//         if (elements>largestNumber) {
//             largestNumber=elements
//         }
//     }
//     return largestNumber
// }



// // Вызовы функции для проверки
// console.log(
//     findLargestNumber([1, 2, 3])
//   ); // вернет 3
  
//   console.log(
//     findLargestNumber([27, 12, 18, 5])
//   ); // вернет 27
  
//   console.log(
//     findLargestNumber([31, 128, 14, 74])
//   ); // вернет 128





/* --------------------------------- */

/* 7 */


/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

// const uniqueNumbers  = [2, 1, 4, 9];

// function addUniqueNumbers () {
//   let arr = Array.from(arguments);
//   for ( let elements of arr){
//     if (!uniqueNumbers.includes(elements) ) {
//       uniqueNumbers.push(elements)
//     }
//   }
// }

// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]






/* --------------------------------- */

/* 8 */

/*
  Создайте функцию removeFromArray(arr), 
  которая получает 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Удалите все элементы из исходного массива, 
  которые имеют такое же значение, что и аргументы.
*/

// function removeFromArray (arr) {
//   let arrAll= Array.from(arguments);
//   let ourArr = arrAll.slice(1);
//     for (let el of ourArr) { 
//       if (arr.includes(el)) {
//           arr.splice(arr.indexOf(el),1);
//     } 
//   } return arr
//  }

// // Вызовы функции для проверки
// console.log(
//   removeFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]

// console.log(
//   removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17 ]






/* --------------------------------- */

/* 9 */

/*
Написати ф-ю convertToRem(px) яка приймає строку і повертає значення в rem

// */

// function convertToRem(px) {
  // return (parseFloat(px)/16)+'rem';
// }
// console.log(
//   convertToRem('16px')
//   );

// console.log(
//   convertToRem('24px')
//   );

// console.log(
//   convertToRem('0px')
//   );
// console.log(
//   convertToRem('44px')
//   );
// // console.log('16px'); // 1rem
// // console.log('24px'); // 1.5rem
// // console.log('0px'); // 0rem






// =============================== 2 ===================================

/*
Написати ф-ю convertToPrc(container, block) яка приймає розміри контейнера та розміри блока в форматі строк і повертає значення блока в %. 
Якщо результат дробовий округлювати до двох знаків після коми. Респонсив верстка делим блок на общую область. 
console.log('1000px', '100px'); //10%
console.log('950px', '150px'); // 15.79%
*/

// function convertToPrc (container, block) {
// return Number((parseFloat(block)/parseFloat(container)*100).toFixed(2))+'%'
// } 
// console.log(
//   convertToPrc('1000px','100px')
// );

// console.log(
//   convertToPrc('950px','150px')
// );



// =============================== #3 ===================================
/*
Написати ф-ю pxConvertor(from, to, block, container)  яка приймає параметри:
 from - одиниці з яких конвертувати, 
 to - одиниці в які конвертувати, 
 block - розміри блока для конвертації, 
 container - розмір контейнера. Всі параметри це строки. Ф-я повертає результат або % або rem.
   console.log('px', 'rem', 16); // 1rem
   console.log('px', 'rem', 24); // 1.5rem
   console.log('px','%', 100px', '1000px'); //10%
   console.log('px', '%', '150px', '950px'); // 15.79%
*/


// function pxConvertor(from, to, block, container) {
//  if (to === 'rem') {
//    return (Number((parseFloat(block)/16))+to)
// } else {
//   return (Number((parseFloat(block)/parseFloat(container)*100).toFixed(2))+to)
// } }
// console.log (
//   pxConvertor ('px', 'rem', 16) 
// )
// console.log (
//   pxConvertor ('px', 'rem', 24) 
// )
// console.log (
//   pxConvertor ('px','%', '100px', '1000px')
// )
// console.log (
//   pxConvertor ('px', '%', '150px', '950px')
// )


// =============================== #4 ===================================
/*
Медіана – це числове значення, яке ділить відсортований масив чисел на більшу і меншу половини. 
У відсортованому масиві з непарним числом елементів медіана – це число в середині масиву. 
Для масиву з парним числом елементів медіана – це середнє значення двох чисел, які знаходяться в середині масиву. 
Вам потрібно нвписати ф-ю яка приймає аргументом масив, знаходить  медіану даного масиву і повертає її.
console.log(median([1, 2, 3, 4, 5])) // 3;
console.log(median([1, 2, 3, 3, 5])); // 3
console.log(median([1, 1, 2,  200, 300])) // 2;
console.log(median([3, 6, 10, 15, 20, 99]));
*/

// calculate the median
function median(arr){
    if (arr.length%2) {
      let i = Math.floor(arr.length/2);
      return arr[i] 
    } else {
      let a = arr.length/2;
      let b = (arr.length+2)/2;
      let c = (arr[a-1]+arr[b-1])/2;
      return c
    } 
  }

console.log(
 median ([1, 2, 3, 4, 5])
); // 3
console.log(
  median ([1, 2, 3, 3, 5])
 ); // 3

console.log(
  median ([1, 1, 6, 200, 300, 34])
 ); // 103

console.log(
  median ([3, 6, 10, 15, 20, 99])
 ); // 12.5

 console.log(
  median ([3, 6, 124, 32, 20, 99])
 ); // 12.5