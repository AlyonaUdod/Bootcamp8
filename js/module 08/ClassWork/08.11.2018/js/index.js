'use strict';

// click // нажатие мышки
// submit // отправка данных в форме
// focus // event - окошко активно, там стоит курсор. 
// blur // потеря фокуса
// keydown // реагирует на нажатие кнопки на клавиатуре до момента отпускания.
// keyup // реагирует на отпускание кнопки на клавиатуре.
// keypress //  keyup+keydown 
// input // действие навешивается на форму, активируется форма, когда в ней начинают в любом инпуте что-то писать.
// onChange // навешивается конкретно на один инпут. 
// scroll // событие навешивается на срол (когда пользователньо прокрутил скролом 500рх у нас появляется что-то)
// DOMContentLoaded // навешивается на весь сайт (когда у нас достроится все DOM дерево) например - мы запускаем скрипт только тогда, когда построится дом.
// onbeforeunload // когда человек хочет уйти с сайта , например "Ты уверен, что хочешь уйти с сайта?" конкретно на крестик


// element.addEventListener('event', functio) // функция отвечает за то, чтобы тег следил за событием.
// это формат записи. Сначала элемент, к которому мы применяем прослушку, потом сама прослушка. В скобках передаем два параметра
// 1 - событие на которое должно реагировать, 2 - функция, которая должна срабатывать при активации события. 


// let but1 = document.querySelector("#btn")
// function Hello () {
//     alert('Hello user!')
//     but1.removeEventListener('click', Hello) // для того, чтобы функция сработала только 1 раз.
// }
// but1.addEventListener('click', Hello);

// function eventInfo() {
//     console.log(event.type); // target - ключ event, в котором инфа про элемент, на который тыц
// }
// event - служебный объект js в который попадает вся инфа про событие, которое произошло.
// but1.addEventListener('click', eventInfo)
// eсли event is not define передаем ивент в функцию.






// let formBtn = document.querySelector('#formBtn'); // eсли нет id мы можем обращаться к атрибутам. Но главное чтобы атрибут был уникальным
// let name = document.querySelector('[placeholder="name"]')
// let lastName = document.querySelector('[placeholder="lastname"]')
// let form = document.querySelector('[action="#"]')


// function readValue(){
//     event.preventDefault() // отменяет дефолтное поведение объектов. Только в такой комбинации работает. применяется только к event
//    // если мы работаем с формой необходимо прописывать эту функцию, чтобы нам все не ломало.
//     console.log(`Name: ${name.value}`);
//     console.log(`Lastname: ${lastName.value}`);  
//     // name.value = '';
//     // lastName.value = '';
//     form.reset() // обнуляет поля формы. // мы обращаемся к переменной form
// }

// formBtn.addEventListener('click', readValue) // удобнее навесить на форму, чтобы срабатывал не только клик, а и enter на клавиатуре
// form.addEventListener('submit', readValue);

// всплытие 
// .stopPropagation() 
// Обработчик навешивается не на каждый элемент, а на контейнер, в котором эти эл-ты лежат.
// Использует механизм высплытие (для делегирования) для активации обработчика на контейнере. 
// Оптимизация работы сайта. Чем меньше всего навешено, тем лучше. 
// event.target  // какой элемент активировал событие
// event.currentTarget // до какого элемента добралось всплытие. 





// создали юл с лишками, необходимо при клике получить номер лишки на которую тыцнули.
// let list = document.querySelector('#list')
// console.log(object);
// // let listItems = Array.from(list.children); // [...list.children] - спред оператор.

// function numClick() { 
//      console.log([...list.children].indexOf(event.target)+1);
// }

// list.addEventListener('click', numClick)


// let form = document.querySelector('#calculate')
// let input = document.querySelector('[type="text"')
// let arr = [...document.querySelectorAll('#calculate > label > input')];
// let num = [ 1, 100, 10000, 0.001, 1.09361, 3.28084, 39.3701];

// function calculate () {
//     let name = event.target.name;
//     let value = event.target.value;
//     let a = 0;
//     if ( name === "metr") {
//         a = Number(value); 
//     } else if ( name === "sm"){
//         a = Number(value)/100; 
//     } else if (name === "mm") {
//         a = Number(value)/10000; 
//     } else if (name === "km") {
//         a = Number(value)/0.001; 
//     } else if (name === "yard") {
//         a = Number(value)/1.094; 
//     } else if (name === "ft") {
//         a = Number(value)/3.28084
//     } else {
//         a = Number(value)/39.3701
//     }
//     for (let el of num) {
//       arr[num.indexOf(el)].value = Number((a*el).toFixed(2))
//     }
// }

// function reset() {
//     // input.value = '';
//     form.reset();
// }

// form.addEventListener('focus', reset)
// form.addEventListener('input', calculate)


// console.log(formInput);//  arr[0].value = formCalc[0].value;
//  arr[1].value = formCalc[0].value*100;
//  arr[2].value = formCalc[0].value*10000;
//  arr[3].value = formCalc[0].value*0.001;
//  arr[4].value = formCalc[0].value*1.094;
//  arr[5].value = formCalc[0].value*3.28084;
//  arr[6].value = formCalc[0].value*39.3701;





// 1

/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

// let button = document.querySelector('.button');
// button.textContent = '0'
// function onClick () {
//    button.textContent = Number(button.textContent)+1
// }
// button.addEventListener('click', onClick);



// 2

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа стоящие в инпутах и запишите их сумму в абзац.
*/

// let form = document.querySelector('.calc')
// let button = document.querySelector('[class = "22"]')
// let input1 = document.querySelector('[id="1"]')
// let input2 = document.querySelector('[id="2"]')
// let result = document.querySelector('.result')

// function calcSum() {
//     result.textContent = Number(input1.value) + Number(input2.value);
// }

// button.addEventListener('click', calcSum)
// // console.log(event.target);




// 3 

// /*
//   Дан спан и кнопки +1, -1, которые будут увеличивать 
//   и уменьшать на 1 значение спана. Сделайте так, чтобы 
//   это значение не могло стать меньше нуля.
// */

// let but1 = document.querySelector('.js-add');
// let but2 = document.querySelector('.js-sub');
// let sum = document.querySelector('.js-value');

// function sum1 () {
//     sum.textContent = Number(sum.textContent) +1
// }

// function sum2 () {
//   if (sum.textContent>0) {
//     sum.textContent = Number(sum.textContent) -1 
//   }
// }

// but1.addEventListener('click', sum1);
// but2.addEventListener('click', sum2);


// 4 
/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Send" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в абзац с классом .result
*/

// let form = document.querySelector('.question-form')
// let input = [...document.querySelectorAll('[type="radio"]')]
// let result = document.querySelector('.result')
// function res() {
//     event.preventDefault();
//     for ( let el of input) {
//         if (el.checked === true) {
//         result.textContent = el.value
//       }
//     }
// }
// form.addEventListener('submit', res)



// 5 

// Дан список изображений. Сделайте так, чтобы по клику на картинку 
// алертом выводился ее src. Используйте делегирование.


let list = document.querySelector('.images');
let items = [...document.querySelectorAll('.images > li > img')]

function showSrc() {
      alert (`${event.target.src}`)
  }  

list.addEventListener('click', showSrc)

