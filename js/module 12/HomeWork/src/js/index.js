'use strict'

/* 
  Напишите приложение для хранения url веб-страниц в виде карточек-закладок. 
  
  Реализуйте следующий функционал:
    - Используйте Gulp для сборки проекта, JS обработан транспайлером Babel, ресурсы оптимизированы
    
    - Для добавления новой закладки, в приложении есть форма с элементом input и кнопкой "Добавить"
    
    - В приложении есть список всех добавленных карточек-закладок, располагающийся под формой
    
    - Некоторые элементы интерфейса создаются динамически. Используйте шаблонизатор Handlebars для
      создания списка карточек. Форма уже есть в HTML при загрузке страницы.
      
    - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходят проверки:
        * на существование закладки с такой ссылкой в текущей коллекции закладок. Если такая закладка есть,
          всплывает диалоговое окно оповещающее пользователя о том, что такая закладка уже есть.
        * при условии валидной, еще не существующей в коллекции ссылки, карточка с такой ссылкой
          добавляется в коллекцию.
          
    - В интерфейсе, новые карточки добавляются наверх списка, а не вниз.
    
    - Каждая карточка-закладка содержит кнопку для удаления карточки из коллекции, при клике 
      на кнопку происходит удаление.
      
    - При повторном посещении страницы с одного и того же устройства и браузера, пользователь видит
      все карточки-закладки которые были во время последнего его посещения. Используйте localStorage
      
  🔔 Оформление интерфейса произвольное
*/

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
    - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходи проверка 
      на валидность введенной ссылки: если был введен невалидный url то должно всплывать 
      диалоговое окно, оповещающее пользователя о том, что это невалидный url. Используйте
      регулярные выражения для валидации url.
          
    - Каждая карточка содержит превью изображение и базовую информацию о странице по адресу закладки,
      для получения этой информации воспользуйтесь этим Rest API - https://www.linkpreview.net/
*/


let cardsArr = []; 
// каждый раз при добавление или удалении карточки происходит перезапись массива закладок в LocalStorage.

const input = document.querySelector('.form__input')
const addCard = document.querySelector('.form__submit');
const form = document.querySelector('.form')

const divWrap = document.querySelector('.wrapper');

// const divCard = document.querySelector('.card');
// const btnDelete = document.querySelector('.delete');
// const linkImg = document.querySelector('.link-img');
// const link = document.querySelector('.card-link');
 
// console.log(cardsArr)
let regExp = /^[a-z]{1,}\.\w{2,3}/
console.log(regExp);

// функция проверки валидности введеного адреса
function isUrlValid (event) {
  event.preventDefault()
  let a = input.value
  if (input.value.length === 0) {
    alert ('Please enter url!')
  } else if(regExp.test(a)) {
    getInfoAboutLink(event)
  } else {
    alert('Url is invalid!')
  }
}

// функция отправляет запрос на сервер.
function getInfoAboutLink (ev) {
  ev.preventDefault()
  fetch(`http://api.linkpreview.net/?key=5bfda7235645423745dd9b252ba856cdd795b606a47ea&q=https://www.${input.value}`)
  .then(response => response.json())
  .then(data => addLinkToArr(data))
  .catch(err => console.log(err))
}
addCard.addEventListener('click', isUrlValid);

// функция обрабатывает ответ и, если такой адрес существует, добавляет карточку в массив.
function addLinkToArr (data) {
  console.log(data.error)
  if (data.error === 424) {
    alert ('Url doesn\'t exist!')
    form.reset()
  } else {
    form.reset();
    let obj = {
      url: data.url,
      title: data.title,
      image: data.image,
      description: data.description,
    }
    // проверка на существование закладки в массиве.
    if (cardsArr.length > 0) {
        let arr = cardsArr.map(el => el.description);
        if (!arr.includes(obj.description)){
          cardsArr.push(obj);
          createCard(data);
          localStorage.setItem(`arrCards`, JSON.stringify(cardsArr)) 
        } else {
          alert ('Закладка уже существует!')
        }
    } else {
      cardsArr.push(obj);
      createCard(data);
      localStorage.setItem(`arrCards`, JSON.stringify(cardsArr))
    }
  }
}

// function addCardPainCard () {

// }

// функция с помощью шаблонизатора отрисовывет карточку на экране.
function createCard(obj) {
  const source = document.querySelector("#cards-template").innerHTML.trim();
  const template = Handlebars.compile(source);
  const mark = template(obj);
  divWrap.insertAdjacentHTML('afterbegin', mark)
}

// функция удаляет карточки из списка закладок отображенных на экране и из массива всех закладок.
function removeCard(event) {
  // (event.target.parentNode)
  // console.log([...event.target.parentNode.children][1].src)
  if (event.target.className === 'delete') {
    cardsArr = cardsArr.filter(el => el.image !== [...event.target.parentNode.children][1].src)
    event.target.parentNode.remove()
    localStorage.setItem(`arrCards`, JSON.stringify(cardsArr))
  }
}
divWrap.addEventListener('click', removeCard)


// при закрузке страницы проверяем есть ли у нас закладки в LocalStorage
function isLocalStorageFull () {
  if (localStorage.getItem('arrCards') !== null) {
    createCardsFromLocalStorage()
  }
}

// если в LocalStorage усть массив с карточками - записываем его в нашу переменную-массив и отрисовываем карточки
function createCardsFromLocalStorage () {
  cardsArr = JSON.parse(localStorage.getItem('arrCards'));
  cardsArr.map(el => createCard(el))
}

window.addEventListener('DOMContentLoaded', isLocalStorageFull)
