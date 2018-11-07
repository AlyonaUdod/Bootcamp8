// 'use strict';

// console.log(document);

// let title = document.querySelector('.title'); // достучались к эл-ту h2. мы теперь можем с ним делать что угодно.
// // обычно обращаются либо по классу, либо по id
// console.log(title);

// let text = document.querySelectorAll('p'); // мы выбираем все р в документе. получается ПСЕВДОМАССИВ
// // так мы можем обратиться к классу, например одинаковые кнопки по всему эл-ту
// console.log(text);

// let txt = [...document.querySelectorAll('p')]; // а так мы получаем сразу массив с помощью спред оператора
// console.log(txt);
// let txt2 = Array.from(document.querySelectorAll('p')); // так тоже получаем массив, но с помощь. функции Array.from
// console.log(txt2);
// // старый вариант записи 

// let text2 = document.getElementsByClassName('title') // мы обращаемся к классу старым методом. часто обращаются к id 
// console.log(text2);

// // подумали и решили эти селекторы (getElementsBy.... )объединить в один querySelector.

// let ul = document.querySelector('.list');
// console.log(ul);
// console.log(ul.children); // обращаемся ко всем детям в нашей ul
// console.log(ul.parentNode); // обращаемся к родителю 
// console.log(ul.previousElementSibling); // показывает предыдущий эл-т от нашего основного эл-та
// console.log(ul.nextElementSibling); // показывает следующий эл-т от нашего основного эл-та


// let text3 = document.querySelector('.par')
// console.log(text3);
// console.log(text3.classList.length ); // колличество классов нашего эл-та
// text3.classList.add('big-text')
// text3.classList.remove('par')
// console.log(text3.classList.contains('title'));
// console.log(text3);
// const lnk = document.querySelector('.link');
// console.log(lnk);
// console.log(lnk.hasAttribute('href')); // когда мы считываем информацию из атрибута мы получаем СТРОКУ
// console.log(lnk.getAttribute('href'));
// console.log(lnk.href); // второй вариант как обратится к атрибуту.
// lnk.setAttribute('title', 'super link') // для создания атрибута в html эл-те. 1 аругмент - название атрибута, 2 - содержание этого атрибута
// console.log(lnk); // появился тайтл со значением супер линк.
// lnk.setAttribute('id', 'idFromJs') // за один раз - можно добавить 1 атрибут. 2 не получится.
// lnk.removeAttribute('title') // удаляет атрибут
// lnk.toggleAttribute // как работает надо будет узнать

// // data-number // способ создания своих собственных атрибутов. 
// // Мы его создаем, чтобы хранить какую-то дополнительную инфу в теге. Можем его создавтаь через setAtribute
// console.log(lnk.dataset.number); // таким образом мы его вызываем 

// let li = document.querySelector('#one');
// console.log(li.dataset.number);



// let p = document.querySelector('.text').textContent; // первый вариант как достучаться именно к контенту
// console.log(p);

// let p1 = document.querySelector('.text').innerHTML; // второй вариант. 
// console.log(p1);

// let ul1 = document.querySelector(".list").textContent; // достает только текст из элемента
// console.log(ul1);
// let ul2 = document.querySelector(".list").innerHTML; // достает всю разметку html. можем передать ее в другой элт и нарисовать тем самым где-то еще ту же разметку. В формате строки передать разметку.
// console.log(ul2);


// let mainTitle = document.createElement('h1');
// mainTitle.classList.add('main-title');
// mainTitle.textContent = 'Hello! It\'s a mirracle!'

// console.log(mainTitle);


// let container = document.querySelector('.container');
// console.log(container);

// container.append(mainTitle) // в конец контейнера,
// container.prepend(mainTitle) // в начало контейнера,

// let h2 = document.querySelector('.title')
// h2.before(mainTitle); // перед элементом
// h2.after(mainTitle) // после элемента

// let result = mainTitle.cloneNode(true); // копируется весь элемент с содержимым. 
// // если пишем false - о скопируется только тег с классом, но не содержимое этого тега. 

// console.log(result);
// container.append(result);

// h2.replaceWith(mainTitle);

// ul.remove()

// let input = document.querySelector('.name'); 

// console.log(input.value); // value - инфа, что мы ввели в поле input
// let checkBox = document.querySelector('#box');
// console.log(checkBox.checked); // значение true/false из чекбокса или радиобатона мы получаем вот так.


// let articleTitle = document.querySelector('h2')
// console.log(articleTitle.style);
// articleTitle.style.color = "yellow";
// articleTitle.style.fontSize = "60px";
// articleTitle.style.textTransform = "uppercase"
// // articleTitle.style.position = "absolute"
// articleTitle.style.margin = "auto";
// articleTitle.style.backgroundImage = "url('./Product Img@1X (2).png')"
// console.log(articleTitle);



// let article = document.querySelector('.article')

// let a = document.createElement('a');
// a.setAttribute('href', '#')
// a.textContent = "My link";
// article.append(a);


// let str =`<a href="#">My 2 link</a>`;
// // article.innerHTML = str; // innerHTML перезаписывает полностью!
// article.innerHTML += str


// /*****************************************************/

// // 1

// /*
//   Есть список категорий с классом categories (на вкладке HTML).
  
//   Напишите код, который для каждого элемента li (первая вложенность) 
//   в списке categories выведет в консоль:
//   - Текст непосредственно в нём (название категории)
//   - Количество всех вложенных в него элементов li
  
//   К примеру:
//     Категория: Животные
//     Количество вложенных li: 4
// */

// let ul = document.querySelector('.categories');
// console.log(ul.children);
// console.log(`Категория:`,ul.children[0].firstChild.data.trim());
// console.log(`Колличество вложеных li:`,ul.children[0].firstElementChild.childElementCount);
// console.log(`Категория:`,ul.children[1].firstChild.data.trim());
// console.log(`Колличество вложеных li:`,ul.children[1].firstElementChild.childElementCount);
// console.log(`Категория:`,ul.children[2].firstChild.data.trim());
// console.log(`Колличество вложеных li:`,ul.children[2].firstElementChild.childElementCount);



// let ul = document.querySelectorAll('.categories > li');
// console.log(ul);
// ul.forEach(el => console.log(el.firstChild.data.trim(), el.firstElementChild.childElementCount))



// 2

/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/


// let list = document.querySelectorAll('.list > li');
// console.log(list);

// list[0].style.color = "red";
// list[list.length-1].style.color = "blue";


// 3

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];


// let list2 = document.querySelector('.list2');
// console.log(list2);
// elements.map(el => list2.innerHTML += `<li>${el}</li>`)



// 4

/*
  Напишите скрипт для создания списка ul.
  
  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.
*/


// let list3 = document.createElement('ul');
// let body = document.querySelector('body')
// body.append(list3)

// do { 
//     ask = prompt ('Enter Number');
//     if (ask === null) {
//         break;
//     } else {
//         list3.innerHTML += `<li>${ask}</li>` }
// } while (ask !== null)

// console.log(list3);


// let lst = document.createElement('ul');
// let body = document.querySelector('body')
// body.append(lst)

// do { 
//     ask = prompt ('Enter text');
//     let li = document.createElement('li');
//     if (ask === null) {
//         break;
//     } else {
//         li.textContent = ask;
//         lst.append(li)}
// } while (ask !== null)
// console.log(lst);




// 5

/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию getInputsData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/


// let ulC = document.querySelectorAll('.size-filter > li > label> input')
// console.log(ulC);
// let res1 = Array.from(ulC) 
// console.log(res1);
// let res = res1.filter(el => el.checked !== false)
// console.log(res);

// function getInputsData(res) {
//  return res.map(el => el.value)
// }
// console.log(getInputsData(res)); 



// 6

/*
  Создайте функцию createPostCard(), которая 
  создает и возвращает DOM-узел карточки поста.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

let body = document.createElement('body');

let div = document.createElement('div');
body.prepend(div);
div.classList.add('post')

let img = document.createElement('img');
div.prepend(img);
img.classList.add('post__image')
img.setAttribute('src', 'http://via.placeholder.com/400x150')
img.setAttribute('alt', 'post image') 

let h2 = document.createElement('h2');
div.append(h2);
h2.classList.add('post__title');
h2.textContent = 'Lorem ipsum dolor';


console.log(div);




