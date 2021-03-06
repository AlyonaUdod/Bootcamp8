'use strict';

/*
  Написать следующий скрипт:
  
    - При загрузке страницы пользователю предлагается ввести через prompt число. 
      Число введенное пользователем записывается в массив чисел.
      
    - Операция ввода числа пользователем и сохранение в массив продолжается до
      тех пор, пока пользователь не нажмет Cancel в prompt. Используйте цикл do...while.
      
    - После того как пользователь прекратил ввод нажав Cancel, необходимо взять 
      массив введенных чисел, сложить общую сумму всех элементов массива и 
      записать ее в переменную. Используйте цикл for...of.
      
    - По окончанию ввода, если массив не пустой, вывести alert с текстом `Общая сумма чисел равна ${сумма}`
      
   PS: Делать проверку того, что пользователь ввел именно число, а не произвольный набор 
      символов, не обязательно. Если хотите, в случае некорректного ввода покажите alert с текстом 
      'Было введено не число, попробуйте еще раз', при этом результат prompt записывать 
      в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.
*/

let userInput;
let num = 0;
const numbers = [];
let total = 0;

do { 
    userInput = prompt ('Enter Number');
    if (userInput === null) {
        break;
    } else if (!isNaN(userInput) && userInput !== ''){
        numbers.push(Number(userInput));
    } else {
        alert ('You have to enter number, try again please.')
    }
} while (userInput !== null)
for ( let elements of numbers) {
    total += elements;     
}
if ( numbers.length > 0) {
     alert (`Total numbers are ${total}.`)
    }
console.log(numbers);
console.log(total);