'use strict';

// mousedown - кнопка мыши нажата над элементом. левая кнопка.
// mouseup - кнопка мыши отпущена над элементом. правая кнопка.
// mouseover - курсор мыши навелся над элементом //  hover
// mouseout - курсор мыши ушел с элемента.
// mousemove - каждое движение мыши над элементом генерирует это событие

// click - mousedown+mouseup
// contextmenu - вызывается при клике правой кнопкой мыши.
// dblclick - двойной клик на элементе.

//  clientX/clientY - 

// elem.clientWidth - определеяет ширину элемента, на которую нажали
// elem.clientHeight - определеяет высоту элемента, на которую нажали

//*************************************************************************** */

// Шашлык 

// let form = document.querySelector('.form');
// let inputPrice = document.querySelector('#price');
// let inputQuantity = document.querySelector('#quantity');
// let amount = document.querySelector('.amount')
// let total = document.querySelector('.total');

// function calculate () {
//     amount.textContent = inputQuantity.value;
//     total.textContent = Number(inputPrice.value*inputQuantity.value).toFixed(2) + ' грн';
// }

// form.addEventListener('input', calculate)
// window.addEventListener('DOMContentLoaded', calculate)


//*************************************************************************** */
// 6

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Используйте делегирование.
*/

// let list = document.querySelector('.list');
// let items = [...document.querySelectorAll('li')];
// console.log(items);

// function deleteItem () {
//     event.target.parentNode.remove()
// }

// list.addEventListener('click', deleteItem)

//*************************************************************************** */

// Task 2

// Для вирішення задачі корисними будуть такі команди :
// clientHeight
// pageYOffset
// scroll

// Щоб меню прилипало до верху потрібно додати клас fixed-nav

// let header = document.querySelector('.header')
// let nav = document.querySelector('.nav')

// function navFixed() {
//     if (pageYOffset > header.clientHeight){
//         nav.classList.add('fixed-nav')
//     } else {
//         nav.classList.remove('fixed-nav')
//     }
// }

// // console.log(pageYOffset); // - отслеживает сколько пользователь прокрутил по Y.
// // console.log(header.clientHeight); - это высота элемента на странице у пользователя. 

// window.addEventListener('scroll', navFixed)

//*************************************************************************** */


// 7

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  Если введено подходящее количество, то outline инпута становится зеленым, 
  если неправильное - красным. 
*/

// let div = document.querySelector('.inputs')
// // let inputs =[...document.querySelectorAll('.inputs > input')];
// // let input = document.querySelector('[type="text"]')

// function checkLength() {
//     // console.log(event);
//     // console.log(event.target.dataset.length);
//     // console.log(event.target.value);
//     // console.log(event.target.style);
//         if (event.target.dataset.length <= event.target.value.length) {
//             event.target.style.outline = '3px solid green';
//         } else {
//             event.target.style.outline = '3px solid red';
//         }
// }
// div.addEventListener('change', checkLength)


//*************************************************************************** */

// Task 3

// 1) Створити в HTML 5 кнопок
// 2) Написати скрипт який при ховері буде міняти позицію кнопок на екрані, щоб не можна було по них клікнути
// 3) Нова позиція кнопок має бути випадковою
// 4) Кнопки не повинні виїжати за межі екрану
// 5) Позиція кнопок має вираховуватися відносно висоти і ширини вікна браузера
// 6) Переміщення кнопок зробити плавним за допомогою transition
// 7) Визначати кнопку на якій відбулася подія можна двома способами:
// 7.1) event
// 7.2) this

// 8) Корисні команди:
// window.innerWidth
// window.innerHeight
// clientHeight
// clientWidth
// mouseenter

// let div = document.querySelector('.container');
// // let button = document.querySelector('.btn');

// function run() {
//     event.target.style.top =  Math.random()*(window.innerHeight-event.target.clientHeight)+'px';
//     event.target.style.left = Math.random()*(window.innerWidth-event.target.clientWidth)+'px';
//     event.target.style.background = `rgb(${(Math.random()*256).toFixed(0)},${(Math.random()*256).toFixed(0)},${(Math.random()*256).toFixed(0)})`
// }

// div.addEventListener('mouseover', run)



//*************************************************************************** */
// Task 4


// 1) Створити калькулятор за допомогою класа
// 2) Клас має мати такі методи:
// 2.1) getValue - запитати 2 числа в користувача і зберегти їх 
// 2.2) sum - метод що додає 2 числа;
// 2.3) minus - метод що віднімає 2 числа;
// 2.4) mult -метод що перемножує 2 отриманих числа
// 2.5) devide - метод ділить число а на b
// 2.6) pow - метод що підносить а до степеня b
// 3 ) створити в розмітці 6 кнопок кожна з яких буде запускати свій метод калькулятора
// 4 ) Вивести на екран резльтат роботи кожного метода калькулятора після натискання відповідної кнопки 
// (Наприклад при натисканні на створену кнопку + вивести на екран фразу "Сума = і результат робити метода sum")


// class Calculator {
//     constructor() {
//         this.num1;
//         this.num2;
//         this.sum;
//         this.getValue = this.getValue.bind(this);
//         this.getSum = this.getSum.bind(this);
//         this.getMinus = this.getMinus.bind(this);
//         this.getMult = this.getMult.bind(this);
//         this.getDivide = this.getDivide.bind(this);
//         this.getPow = this.getPow.bind(this);

//     }

//     getValue() {
//         this.num1 = +prompt('Enter first number');
//         this.num2 = +prompt('Enter second number');
//         console.log(this.num1);
//         console.log(this.num2);
//         let res = document.createElement('p');
//         root.append(res);
//         res.textContent =`a = ${this.num1} b = ${this.num2}`
//     }

//     getSum() {
//         let res = document.createElement('p');
//         root.append(res);
//         res.textContent = `Summary: ${this.num1} + ${this.num2}  = ${this.num1 + this.num2} `
//     }

//     getMinus() {
//         let res = document.createElement('p');
//         root.append(res);
//         res.textContent = `Minus: ${this.num1} - ${this.num2}  = ${this.num1 - this.num2} `
//     } 

//     getMult() {
//         let res = document.createElement('p');
//         root.append(res);
//         res.textContent = `Multiply: ${this.num1} * ${this.num2}  = ${this.num1*this.num2} `
//     }

//     getDivide() {
//         let res = document.createElement('p');
//         root.append(res);
//         res.textContent = `Divide: ${this.num1} / ${this.num2}  = ${(this.num1/this.num2).toFixed(2)} `
//     }

//     getPow() {
//         let res = document.createElement('p');
//         root.append(res);
//         res.textContent = `Pow: ${this.num1}(${this.num2})  = ${Math.pow(this.num1, this.num2)} `
//     }   
// }


// let div = document.querySelector('.box');
// let getValue = document.querySelector('.get-Value')
// let getSum = document.querySelector('.sum');
// let getMinus = document.querySelector('.minus')
// let getMult = document.querySelector('.mult')
// let getDivide = document.querySelector('.divide')
// let getPow = document.querySelector('.pow')

// let body = document.querySelector('body')
// let root = document.createElement('div')
// root.classList.add('root')
// body.append(root)

// let calc = new Calculator()

// getValue.addEventListener('click', calc.getValue);
// getSum.addEventListener('click', calc.getSum)
// getMinus.addEventListener('click', calc.getMinus);
// getMult.addEventListener('click', calc.getMult)
// getDivide.addEventListener('click', calc.getDivide)
// getPow.addEventListener('click', calc.getPow)


//*************************************************************************** */

// 8

/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в консоль выводит строку "Input is in focus!"
    - При наборе текста в текстовое поле (событие input), текущее его значение должно 
      отображаться в абзаце с классом input-value 
*/

// let input = document.querySelector('.input')
// let p = document.querySelector('.input-value > span');


// function showInfo() {
//     console.log('Input is in focus!');
//     p.textContent = input.value;
// }

// input.addEventListener('input', showInfo)


//*************************************************************************** */

// 9 

/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal" 
    и классом js-open-modal, модальное окно с классом modal, 
    должно появляться, тобишь необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (js-close-modal)
    или на серый фон с прозрачностью (js-modal-backdrop), 
    модальное окно должно закрываться.
    
  
  Задание повышеной сложности:
  - Попробуйте реализовать плагин функционала модального окна используя класс.
    При создании экземпляра необходимо передать селекторы для кнопки закрытия окна
    и самого прозрачного фона. Плагин должен реализовавать два метода show и hide,
    либо один toggle.
    
    При клике на кнопку показа модального окна должен вызываться 
    метод show или toggle. Соответственно при для закрытия 
    окна hide либо toggle.
*/


// let button = document.querySelector('.js-open-modal');
// let divModal = document.querySelector('.js-modal-backdrop')
// let divCloseBut = document.querySelector('.js-close-modal')
// let divCloseGrey = document.querySelector('.js-modal-backdrop')


// function showModal() { 
//     if (event.target === button) {
//          divModal.classList.remove('modal-hidden')
//     } 
// }

// function hideModal() { 
//     divModal.classList.add('modal-hidden')
// }

// button.addEventListener('click', showModal)
// divCloseBut.addEventListener('click', hideModal)
// divCloseGrey.addEventListener('click', hideModal);


// class Modal {
//       // constructor (divCloseBut, divCloseGrey) {
//       //   this.closeBtn = divCloseBut;
//       //   this.closeGrey = divCloseGrey;
//       // }

//       showModal () {
//         if (event.target === button) {
//           divModal.classList.remove('modal-hidden')
//         } 
//       }

//       hideModal() { 
//           divModal.classList.add('modal-hidden')
//       }
// }


// let mod1 = new Modal();
// console.log(mod1);

// button.addEventListener('click', mod1.showModal)
// divCloseBut.addEventListener('click', mod1.hideModal)
// divCloseGrey.addEventListener('click', mod1.hideModal);


//*************************************************************************** */

// 10

/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс menu-link-active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пункотв меню может быть произвольное количество, используйте
  прием "Делегирование событий". Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

// let list = document.querySelector('.js-menu');
// let links = [...document.querySelectorAll('.js-menu > li > a')];

// function linkHover () {
//   event.preventDefault()
//   for ( let el of links){
//      el.classList.remove('menu-link-active')  
//   }
//    event.target.classList.add('menu-link-active');
//    event.stopPropagation()
// }

// list.addEventListener('click', linkHover)