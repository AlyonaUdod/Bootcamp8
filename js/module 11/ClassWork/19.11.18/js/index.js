'use strict'

// let reg = new RegExp() // 1 способ создания регулярного выражения.
// let pattern = /win/; // 2 способ создания регулярного выражения.
// const string = 'text windows win' ;
// console.log(string.match(pattern)); // метод строки, проверяет есть ли в строке наш шаблон. Вернет массив. 1 совпадение нашел и стопнулся.
// console.log(pattern.test(string)); // метод шаблона, возвращает значение true/false.

let string = 'Is that all there is?';
let reg = /is/gi; // g(global) - ищет все совпадения, i(ignore) - игнорирует регистр.
console.log(string.match(reg));

let string1 = '12345, q5 wq w. www h - whwhwh';
let reg1 = /\d/g; // \d (digit) - класс, который ищет числа. 0-9
console.log(string1.match(reg1));
let reg2 = /\D/g; // \d (digit) - класс, который ищет НЕ числа. Все кроме чисел.
console.log(string1.match(reg2));
let reg3 = /\w/gi; // \w - ищет все цифры и все буквы, игнорирует символы(пробелы, запятые и тп.)
let reg4 = /\W/g; // \W - ищет все кроме цифр и всех букв, то есть пробелы, символы(запятые, восклицальный знак и тп). 
console.log(string1.match(reg3));
console.log(string1.match(reg4));


let string2 = '92345 123, 243 467 52 34 987 5';
let reg21 = /\d{1,}/g; // {2} - выбираем колличество стоящих подряд цифр.  {1,2} - min и max, {1,} - от 1 и до бесконечности.
console.log(string2.match(reg21)); 
let reg22 = /\b\d{2}\b/g; // /b - выделяет нам слово - от начала и до конца. 
console.log(string2.match(reg22)); 

let string3 = 'random Text with a Number - 5';
let reg31 = /[a-zA-Z0-9]/gi; // ищи мне от a-z вне зависимости от регистра, цифры от 0 до 9.
console.log(string3.match(reg31));

let string4 = 'sdasd 1 random text 5 afafa';
let reg41 = /^[a-zA-Z0-9]{1,}.{1,}/g // /5$/ - найди мне 5 в конце строки // ^ - начало строки. $ - конец строки. строка должна начинаться на 2 цифры.
console.log(string4.match(reg41)); // . - любой символ, {1,} - любое колличество. 
// \ перед любым символом служебным экранирует его. Для того, чтобы найти именно точку необхожимо написать \.



// Флаги
// i - ігнорує регістр*
// g - глобальний погук а не перший збіг*
// m - багатостроковий пошук*
// Класи
// \d - numbers 0-9*
// \D - not numbers*
// \w - word*
// \W - not word*
// \s - space*
// \S - not space*
// \b - word or symbol with spase around*
// \B - not word*
// [] - набір *
// - діапазон *
// ^ - в [] це виключення за межами набору це початок строки*
// {} - показник кількості*
// () - група символів*
//  + - один або більше
//  ? - нуль або один
//  * - нуль або більше
//  . - будь - який символ*
//  $ - кінець строки*

// \s - ищет все пробелы в строке. 


let str = 'the car is parked in garage.';
let regV = /\b(c|g|p)ar\b/gi; // | - или
console.log(str.match(regV));
