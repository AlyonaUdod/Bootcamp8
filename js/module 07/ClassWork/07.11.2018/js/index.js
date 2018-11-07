'use strict';

// function showLocation(position) {
//   console.log(position);
//   let latitude = position.coords.latitude;
//   let longitude = position.coords.longitude;
//   alert("Latitude : " + latitude + " Longitude: " + longitude);
// }

// function errorHandler(err) {
//   if(err.code == 1) {
//      alert("Error: Access is denied!");
//   } else if( err.code == 2) {
//      alert("Error: Position is unavailable!");
//   }
// }

// function getLocation() {

//   if(navigator.geolocation) {
//      navigator.geolocation.getCurrentPosition(showLocation, errorHandler);
//   } else {
//      alert("Sorry, browser does not support geolocation!");
//   }
// }

// getLocation();


// 6

/*
  Создайте функцию createPostCard(), которая 
  создает и возвращает DOM-узел карточки поста.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

// let body = document.querySelector('body');

// let div = document.createElement('div');
// div.classList.add('post');
// body.prepend(div);

// let img = document.createElement('img');
// div.prepend(img);
// img.classList.add('post__image')
// img.setAttribute('src', 'http://via.placeholder.com/400x150')
// img.setAttribute('alt', 'post image') 

// let h2 = document.createElement('h2');
// div.append(h2);
// h2.classList.add('post__title');
// h2.textContent = 'Lorem ipsum dolor';

// let p = document.createElement('p');
// div.append(p);
// p.classList.add('post__text');
// p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!'

// let a = document.createElement('a');
// div.append(a);
// a.classList.add('button');
// a.setAttribute('href', '#');
// a.textContent = 'Read more';
// console.log(div);


// function createPostCard () {
//   return body.append(div)
// }
// createPostCard();

// 7

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/
  
let body = document.querySelector('body')
function createBoxes(num) {
  let divWrap = document.createElement('div');
    let size = 30;
    for (let i=0; i<num; i++) {
      let div = document.createElement('div');
      // let color ="#"+((1<<24)*Math.random()|0).toString(16);
      let color1 = `rgb(${(Math.random()*256).toFixed(0)},${(Math.random()*256).toFixed(0)},${(Math.random()*256).toFixed(0)})`
      div.style.height = `${size}px`;
      div.style.width = `${size}px`; 
      size += 10;
      div.style.backgroundColor = color1;
      div.style.margin = "auto";
      div.style.marginTop = "10px";
      divWrap.append(div); 
    } body.append(divWrap)
}
console.log(createBoxes(8));



