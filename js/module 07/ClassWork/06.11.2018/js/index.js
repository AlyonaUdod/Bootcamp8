'use strict';

console.log(document);

let title = document.querySelector('.title'); // достучались к эл-ту h2. мы теперь можем с ним делать что угодно.
// обычно обращаются либо по классу, либо по id
console.log(title);

let text = document.querySelectorAll('p'); // мы выбираем все р в документе. получается ПСЕВДОМАССИВ
// так мы можем обратиться к классу, например одинаковые кнопки по всему эл-ту
console.log(text);

let txt = [...document.querySelectorAll('p')]; // а так мы получаем сразу массив с помощью спред оператора
console.log(txt);
let txt2 = Array.from(document.querySelectorAll('p')); // так тоже получаем массив, но с помощь. функции Array.from
console.log(txt2);
// старый вариант записи 

let text2 = document.getElementsByClassName('title') // мы обращаемся к классу старым методом. часто обращаются к id 
console.log(text2);

// подумали и решили эти селекторы (getElementsBy.... )объединить в один querySelector.

let ul = document.querySelector('.list');
console.log(ul);
console.log(ul.children); // обращаемся ко всем детям в нашей ul
console.log(ul.parentNode); // обращаемся к родителю 
console.log(ul.previousElementSibling); // показывает предыдущий эл-т от нашего основного эл-та
console.log(ul.nextElementSibling); // показывает следующий эл-т от нашего основного эл-та


let text3 = document.querySelector('.par')
console.log(text3);
console.log(text3.classList.length ); // колличество классов нашего эл-та
text3.classList.add('big-text')
text3.classList.remove('par')
console.log(text3.classList.contains('title'));
console.log(text3);
const lnk = document.querySelector('.link');
console.log(lnk);
console.log(lnk.hasAttribute('href')); // когда мы считываем информацию из атрибута мы получаем СТРОКУ
console.log(lnk.getAttribute('href'));
console.log(lnk.href); // второй вариант как обратится к атрибуту.
lnk.setAttribute('title', 'super link') // для создания атрибута в html эл-те. 1 аругмент - название атрибута, 2 - содержание этого атрибута
console.log(lnk); // появился тайтл со значением супер линк.
lnk.setAttribute('id', 'idFromJs') // за один раз - можно добавить 1 атрибут. 2 не получится.
lnk.removeAttribute('title') // удаляет атрибут
lnk.toggleAttribute // как работает надо будет узнать

// data-number // способ создания своих собственных атрибутов. 
// Мы его создаем, чтобы хранить какую-то дополнительную инфу в теге. Можем его создавтаь через setAtribute
console.log(lnk.dataset.number); // таким образом мы его вызываем 

let li = document.querySelector('#one');
console.log(li.dataset.number);



let p = document.querySelector('.text').textContent; // первый вариант как достучаться именно к контенту
console.log(p);

let p1 = document.querySelector('.text').innerHTML; // второй вариант. 
console.log(p1);

let ul1 = document.querySelector(".list").textContent; // достает только текст из элемента
console.log(ul1);
let ul2 = document.querySelector(".list").innerHTML; // достает всю разметку html. можем передать ее в другой элт и нарисовать тем самым где-то еще ту же разметку. В формате строки передать разметку.
console.log(ul2);


let mainTitle = document.createElement('h1');
mainTitle.classList.add('main-title');
mainTitle.textContent = 'Hello! It\'s a mirracle!'

console.log(mainTitle);


let container = document.querySelector('.container');
console.log(container);

container.append(mainTitle) // в конец контейнера,
container.prepend(mainTitle) // в начало контейнера,

let h2 = document.querySelector('.title')
h2.before(mainTitle); // перед элементом
h2.after(mainTitle) // после элемента

let result = mainTitle.cloneNode(true); // копируется весь элемент с содержимым. 
// если пишем false - о скопируется только тег с классом, но не содержимое этого тега. 

console.log(result);
container.append(result);

h2.replaceWith(mainTitle);

ul.remove()

let input = document.querySelector('.name'); 

console.log(input.value); // value - инфа, что мы ввели в поле input
let checkBox = document.querySelector('#box');
console.log(checkBox.checked); // значение true/false из чекбокса или радиобатона мы получаем вот так.


let articleTitle = document.querySelector('h2')
console.log(articleTitle.style);
articleTitle.style.color = "yellow";
articleTitle.style.fontSize = "60px";
articleTitle.style.textTransform = "uppercase"
// articleTitle.style.position = "absolute"
articleTitle.style.margin = "auto";
articleTitle.style.backgroundImage = "url('./Product Img@1X (2).png')"
console.log(articleTitle);



let article = document.querySelector('.article')

let a = document.createElement('a');
a.setAttribute('href', '#')
a.textContent = "My link";
article.append(a);


let str =`<a href="#">My 2 link</a>`;
// article.innerHTML = str; // innerHTML перезаписывает полностью!
article.innerHTML += str



// BOM hf,jnf c 
console.log(navigator);
console.log(navigator.userAgent); // 
console.log(navigator.vendor);
console.log(window.screen);

console.log(location); // твое местонахождение
console.log(history); // твоя история посещений







//DOM - объектная можель, набор элементов (всех объектов), которые собирают тебе сайт
//BOM - встроеные объекты в брайзер, которыми мы можем пользоваться. (узнать о пользовательском браузере)ю

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



// let newDiv = document.createElement('div');
// newDiv.classList.add('div__new');

// // function createBoxes(num) {
// //  return div.innerHTML += newDiv 
// // }
// let array = [1, 2, 3]
// var htmlElements = "";
// for (var i = 0; i < array.length; i++) {
//    htmlElements += '<div class="div__new"></div>';
// }

// let div = document.querySelector('#root');
// div.innerHTML = htmlElements;
// console.log(div);
// // createBoxes(3)


// let a = {
//  "total": 4692,
//  "totalHits": 500,
//  "hits": [
//    {
//      "id": 195893,
//      "pageURL": "https://pixabay.com/en/blossom-bloom-flower-195893/",
//      "type": "photo",
//      "tags": "blossom, bloom, flower",
//      "previewURL": "https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg",
//      "previewWidth": 150,
//      "previewHeight": 84,
//      "webformatURL": "https://pixabay.com/get/35bbf209e13e39d2_640.jpg",
//      "webformatWidth": 640,
//      "webformatHeight": 360,
//      "largeImageURL": "https://pixabay.com/get/ed6a99fd0a76647_1280.jpg",
//      "fullHDURL": "https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg",
//      "imageURL": "https://pixabay.com/get/ed6a9364a9fd0a76647.jpg",
//      "imageWidth": 4000,
//      "imageHeight": 2250,
//      "imageSize": 4731420,
//      "views": 7671,
//      "downloads": 6439,
//      "favorites": 1,
//      "likes": 5,
//      "comments": 2,
//      "user_id": 48777,
//      "user": "Josch13",
//      "userImageURL": "https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg",
//    },
//  ]
//  }

//  console.log(a.total);
//  console.log(a.hits[0].id);
//  console.log(a.hits[0].imageWidth);
//  console.log(a.hits[0].downloads);



// let b = {
//   albums: {
//     entities: {
//       '1384': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/cover_front_100.jpg',
//         description: 'Exclusive Soundtrack!\r\n\r\nEver wanted to know how Youtubers get down? Look no further than this party playlist, specially curated for Buffer Festival 2018.\r\n\r\n<a target="_blank" href="http://link.epidemicsound.com/Off_The_Record">Love these tracks? Click here to find them on Spotify, Apple Music and more!</a>\r\n\r\n',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/cover_front_250.jpg',
//         title: 'Off the Record     ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-09-27T10:49:24',
//           name: 'Off the Record',
//           unpublishedAlbumCount: 0,
//           id: 994
//         },
//         titleNumber: '    ',
//         created: '2018-09-27T10:50:39',
//         published: true,
//         trackCount: 20,
//         tracks: [
//           {
//             s3TrackId: '206384',
//             title: 'LBL'
//           },
//           {
//             s3TrackId: '208955',
//             title: 'For The Record'
//           },
//           {
//             s3TrackId: '204693',
//             title: 'In And Out Of Love (Tigerblood Jewel Remix)'
//           },
//           {
//             s3TrackId: '202851',
//             title: 'Copacabana'
//           },
//           {
//             s3TrackId: '207168',
//             title: 'Isla Del Sol'
//           },
//           {
//             s3TrackId: '165857',
//             title: 'Pretty Awkward'
//           },
//           {
//             s3TrackId: '202437',
//             title: 'I Have'
//           },
//           {
//             s3TrackId: '203935',
//             title: 'Lucid Dreaming'
//           },
//           {
//             s3TrackId: '181826',
//             title: 'Search Light'
//           },
//           {
//             s3TrackId: '161402',
//             title: 'Ganja'
//           },
//           {
//             s3TrackId: '205356',
//             title: 'Black Lies'
//           },
//           {
//             s3TrackId: '168240',
//             title: 'I Met You In The Summer'
//           },
//           {
//             s3TrackId: '206914',
//             title: 'Synergy'
//           },
//           {
//             s3TrackId: '205169',
//             title: 'I Am Better Off'
//           },
//           {
//             s3TrackId: '207079',
//             title: 'Raspberry'
//           },
//           {
//             s3TrackId: '170850',
//             title: 'Cats Walking'
//           },
//           {
//             s3TrackId: '205761',
//             title: 'Always Sister'
//           },
//           {
//             s3TrackId: '205053',
//             title: 'Starfields'
//           },
//           {
//             s3TrackId: '170912',
//             title: 'Swag Rider'
//           },
//           {
//             s3TrackId: '205245',
//             title: 'Paradigm Shift'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-09-27T11:28:48',
//         creator: 'SETsxRhLO',
//         id: 1384,
//         categories: [
//           {
//             id: 25,
//             name: 'Electronica & Dance'
//           },
//           {
//             id: 31,
//             name: 'Pop'
//           },
//           {
//             id: 57,
//             name: 'Special Occasions'
//           },
//           {
//             id: 65,
//             name: 'YouTube / Online Creators'
//           }
//         ],
//         descriptionExcerpt: 'Exclusive Soundtrack!'
//       },
//       '1385': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/retrowave_vol1_100.jpg ',
//         description: 'Retrofuturism!\r\n\r\nThis is the first in a series of albums focused on synth-heavy electronic tracks with a cool retrofuturistic vibe. ',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/retrowave_vol1_250.jpg ',
//         title: 'Retrowave Vol. 1',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-09-27T15:56:02',
//           name: 'Retrowave',
//           unpublishedAlbumCount: 0,
//           id: 995
//         },
//         titleNumber: 'Vol. 1',
//         created: '2018-09-27T15:58:52',
//         published: true,
//         trackCount: 12,
//         tracks: [
//           {
//             s3TrackId: '209108',
//             title: 'Speeding Through The Night'
//           },
//           {
//             s3TrackId: '209468',
//             title: 'On The Knife'
//           },
//           {
//             s3TrackId: '166045',
//             title: 'Remembrance'
//           },
//           {
//             s3TrackId: '209905',
//             title: 'Powerwalkin\''
//           },
//           {
//             s3TrackId: '163893',
//             title: 'Yhello'
//           },
//           {
//             s3TrackId: '170010',
//             title: 'The Space Mechanic'
//           },
//           {
//             s3TrackId: '166523',
//             title: 'Awoken'
//           },
//           {
//             s3TrackId: '209310',
//             title: 'Follow The Trail'
//           },
//           {
//             s3TrackId: '159735',
//             title: 'And Behold'
//           },
//           {
//             s3TrackId: '203463',
//             title: 'Night Stalker'
//           },
//           {
//             s3TrackId: '167793',
//             title: 'I Am Falling For You (SLCT Remix) (Instrumental Version)'
//           },
//           {
//             s3TrackId: '163329',
//             title: 'Arctic Peach'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-09-28T10:11:47',
//         creator: 'SEpZb-7M0k',
//         id: 1385,
//         categories: [
//           {
//             id: 25,
//             name: 'Electronica & Dance'
//           },
//           {
//             id: 27,
//             name: 'Eras'
//           },
//           {
//             id: 36,
//             name: 'Retro & Nostalgia'
//           }
//         ],
//         descriptionExcerpt: 'Retrofuturism!'
//       },
//       '1386': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/soft_serve_100x100.jpg',
//         description: 'New album from Brendon Moeller\r\n\r\n’Soft Serve’ is the new release from Brendon Moeller. The album consists of six tracks with dreamy and ambient house beats. \r\n\r\n<a target="_blank" href="http://link.epidemicsound.com/SoftServe">Love these tracks? Click here to find them on Spotify, Apple Music and more!</a>',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/soft_serve_250x250.jpg ',
//         title: 'Brendon Moeller - Soft Serve    ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-10-01T15:35:56',
//           name: 'Brendon Moeller - Soft Serve',
//           unpublishedAlbumCount: 0,
//           id: 996
//         },
//         titleNumber: '   ',
//         created: '2018-10-01T15:38:33',
//         published: true,
//         trackCount: 6,
//         tracks: [
//           {
//             s3TrackId: '207605',
//             title: 'Inbound'
//           },
//           {
//             s3TrackId: '207634',
//             title: 'Namibia'
//           },
//           {
//             s3TrackId: '207325',
//             title: 'Steady On'
//           },
//           {
//             s3TrackId: '207425',
//             title: 'Outcome'
//           },
//           {
//             s3TrackId: '207574',
//             title: 'Diversion'
//           },
//           {
//             s3TrackId: '207317',
//             title: 'Soft Serve'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-10-01T16:21:08',
//         creator: 'SEpZb-7M0k',
//         id: 1386,
//         categories: [
//           {
//             id: 25,
//             name: 'Electronica & Dance'
//           },
//           {
//             id: 40,
//             name: 'Ambient & Atmospheric'
//           },
//           {
//             id: 76,
//             name: 'Artist Releases'
//           }
//         ],
//         descriptionExcerpt: 'New album from Brendon Moeller'
//       },
//       '1388': {
//         coverImageThumbnailUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/tn/podcast_soundbeds_100.jpg ',
//         description: 'On the air!\r\n\r\nDo you need low or medium energy tracks that don’t overtake voice overs? These tracks in diverse genres and moods are perfect as Soundbeds for different podcasts.',
//         coverImageUrl: 'https://d34qmkt8w5wll9.cloudfront.net/album-covers/medium/podcast_soundbeds_250.jpg',
//         title: 'Podcast Soundbeds       ',
//         series: {
//           publishedAlbumCount: 1,
//           created: '2018-10-03T10:18:08',
//           name: 'Podcast Soundbeds',
//           unpublishedAlbumCount: 0,
//           id: 997
//         },
//         titleNumber: '      ',
//         created: '2018-10-03T10:23:31',
//         published: true,
//         trackCount: 14,
//         tracks: [
//           {
//             s3TrackId: '206641',
//             title: 'New Ambitions'
//           },
//           {
//             s3TrackId: '202874',
//             title: 'Fuzzy Logic'
//           },
//           {
//             s3TrackId: '207948',
//             title: 'Hibernation'
//           },
//           {
//             s3TrackId: '209729',
//             title: 'Luvon'
//           },
//           {
//             s3TrackId: '209918',
//             title: 'We Are Meant To Be (Instrumental Version)'
//           },
//           {
//             s3TrackId: '201906',
//             title: 'Site Specific Memory'
//           },
//           {
//             s3TrackId: '206719',
//             title: 'Zanzibar'
//           },
//           {
//             s3TrackId: '209371',
//             title: 'Homecoming'
//           },
//           {
//             s3TrackId: '208983',
//             title: 'Into The Blue'
//           },
//           {
//             s3TrackId: '207479',
//             title: 'The Longing'
//           },
//           {
//             s3TrackId: '209900',
//             title: 'Nomad Life'
//           },
//           {
//             s3TrackId: '209458',
//             title: 'Offline'
//           },
//           {
//             s3TrackId: '209512',
//             title: 'Secret Love'
//           },
//           {
//             s3TrackId: '204856',
//             title: 'Watcher'
//           }
//         ],
//         spotifyUrl: '',
//         audioMixUrl: '',
//         lastModified: '2018-10-03T10:28:23',
//         creator: 'SEpZb-7M0k',
//         id: 1388,
//         categories: [
//           {
//             id: 25,
//             name: 'Electronica & Dance'
//           },
//           {
//             id: 40,
//             name: 'Ambient & Atmospheric'
//           },
//           {
//             id: 46,
//             name: 'Entertainment'
//           },
//           {
//             id: 75,
//             name: 'Podcast'
//           }
//         ],
//         descriptionExcerpt: 'On the air!'
//       },
//     },
//   },
// }


// console.log(b.albums.entities[1384].description);
// console.log(b.albums.entities[1384].series.name);
// console.log(b.albums.entities[1384].tracks[4].title);
// console.log(b.albums.entities[1385].series.id);


