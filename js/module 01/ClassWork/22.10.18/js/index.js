'use strict'

// let = 'Mango';
// let = 6;
// let = q;

// let peopleName = 'Bob';
// let peoplename = 'Bob';

/*
dfgdfgdf
dfgdfgdg
dgfdfgdfg
dfdgdfgdfg
*/

// const UAH = 8;

// let bool = true;
// let n = null;
// let a = undefined;
// let obj = {
//     name: 'Americano',
//     price: 15,
//     currency: 'UAH',
//     milk: true,
// }

// const NAME = 'Americano';
// let price = 15;
// let currency = 'UAH';
// let milk = 'true';


// let b = Symbol('a'); 
// работает как уникальный идентификатор для данных, высокая материя

// Два метода вывода инфы на экран
// alert - для пользователей
// console.log - отображается инфа в devtools

// alert ('Hello World');

// 'typeof: '


// let word = 'Javascript___!';
// console.log(word);
// console.log(5);
// console.log(true);
// console.log(null);



// let w = 'JS';
// let num = 5;
// let b = true;
// let n = null;
// let a = undefined;
// console.log(typeof w);
// console.log(typeof num);
// console.log(typeof b);
// console.log(typeof n);
// console.log(typeof a);
// console.log(typeof obj);


// prompt; окно для ввода данных
// confirm; - да нет, окно подтверждения.

// let answer = prompt('Enter your name');
// console.log(answer);


// let answer2 = confirm('Are you happy?');
// console.log(answer2);


// var x = 5;
// x= 20;
// console.log(x);
// let y = 10;
// x= 30;
// console.log(y);
// const z = 30;
// z= 60;
// console.log(z);

//  JavaScript - однопоточный ассинхронный язык программирования. 


//  let a = 2.1;
//  let b = 2.55;
//  let c = Number((a * b).toFixed(3));
//  console.log(typeof c);   /*когда пишем toFixed из числа получается строка */

//  console.log (+c); /* унарный плюс, перед строкой ставим + и превращаем строку в число, если получается*/

//  console.log (Number(c)); /* возьми и преврати все что в скобках в номер */

//  let = a;
//  a = a + 6;
//  a++ /* Увеличь мне это число на 1 */

//  a += 2 /* Увеличь мне это число на 2 */

//  parseInt parseFloat

// let font = '2.5rem';
// console.log(perceInt(font));
// console.log(perceFloat(font));
// работают до первого встреченного символа буквенного. работает только если строка начинается с цифры


// MDN web docs - хороший сайт по javaScript
// devdocs.io

// console.log (isNan('qwerty'));
// console.log (isNan('5'));


// let str = 'I\'m a student' /* экранирование */

let name = prompt('Enter your name').trim();
let lastName = prompt('Enter your last name');
let age = prompt('Enter your age');

console.log ('User\'s full name is' + name + ' ' + lastName + '.' + 'He is' + age + ' years old'+ '.');

console.log(`User's full name ${name} ${lastName}. He is ${age} years old.`); /* шаблонная строка, включается обратными кавычками */
