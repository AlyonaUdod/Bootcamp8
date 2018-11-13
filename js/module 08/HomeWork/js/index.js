'use strict';

/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
  { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
  { preview: 'img/preview-7.jpeg', fullview: 'img/fullview-7.jpeg', alt: "alt text 7" },
  { preview: 'img/preview-8.jpeg', fullview: 'img/fullview-8.jpeg', alt: "alt text 8" },
  { preview: 'img/preview-9.jpeg', fullview: 'img/fullview-9.jpeg', alt: "alt text 9" },
  { preview: 'img/preview-10.jpeg', fullview: 'img/fullview-10.jpeg', alt: "alt text 10" },
];

const galleryItems2 = [
  { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  // { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  // { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
  // { preview: 'img/preview-7.jpeg', fullview: 'img/fullview-7.jpeg', alt: "alt text 7" },
  // { preview: 'img/preview-8.jpeg', fullview: 'img/fullview-8.jpeg', alt: "alt text 8" },
  // { preview: 'img/preview-9.jpeg', fullview: 'img/fullview-9.jpeg', alt: "alt text 9" },
  // { preview: 'img/preview-10.jpeg', fullview: 'img/fullview-10.jpeg', alt: "alt text 10" },
];

const galleryItems3 = [
  // { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
  // { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
  // { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
  { preview: 'img/preview-7.jpeg', fullview: 'img/fullview-7.jpeg', alt: "alt text 7" },
  { preview: 'img/preview-8.jpeg', fullview: 'img/fullview-8.jpeg', alt: "alt text 8" },
  { preview: 'img/preview-9.jpeg', fullview: 'img/fullview-9.jpeg', alt: "alt text 9" },
  { preview: 'img/preview-10.jpeg', fullview: 'img/fullview-10.jpeg', alt: "alt text 10" },
];

// 

  let mainDiv = document.querySelector('.js-image-gallery');
  let fullviewDiv = document.createElement('div');
  let previewList = document.createElement('ul');
  let fullImage = document.createElement('img');

function createGallery() {
  fullviewDiv.classList.add('fullview');
  previewList.classList.add('preview');
  fullImage.setAttribute('alt','alt text 1');
  fullImage.setAttribute('src','img/fullview-1.jpeg'); 
  mainDiv.append(fullviewDiv, previewList);
  fullviewDiv.append(fullImage);
  createPreviewGallery(galleryItems);
} 

function createPreviewGallery(galleryItems) {
  for ( let el of galleryItems) {
    let previewItem = document.createElement( 'li');
    let previewImage = document.createElement( 'img');
    previewImage.setAttribute('src', el.preview)
    previewImage.setAttribute('data-fullview', el.fullview);
    previewImage.setAttribute('alt', el.alt);    
    previewList.append(previewItem);
    previewItem.append(previewImage);
  }
}

function changeFullview() {
    event.preventDefault();
    if(event.target.tagName === "IMG") {
      fullImage.setAttribute('src', event.target.dataset.fullview)
      document.querySelectorAll('.preview img').forEach(el => el === event.target ? el.classList.add('hover') : el.classList.remove('hover'))
    }
}

window.addEventListener('DOMContentLoaded', createGallery)
previewList.addEventListener('click', changeFullview)


/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
  чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
  аналогичный заданию выше.
  
  При создании экземпляра конструктор получает:
    - items - список элементов для preview
    - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
    - defaultActiveItem - номер активного элемента preview по умолчанию
    
  Тогда создание экземпляра будет выглядеть следующим образом.
*/

// new Gallery({
//   items: galleryItems,
//   parentNode: document.querySelector('.image-gallery'),
//   defaultActiveItem: 1
// });

/* Далее плагин работает в автономном режиме */

class Gallery {
    constructor(items, parentNode, defaultActiveItem) {
      this.items = items;
      this.parentNode = parentNode;
      this.defaultActiveItem = defaultActiveItem;
      this.fullviewDiv = document.createElement('div');
      this.previewList = document.createElement('ul');
      this.fullImage = document.createElement('img');   
      this.createGallery = this.createGallery.bind(this);
      this.changeFullview = this.changeFullview.bind(this);
    }
    createGallery() {
      this.fullviewDiv.classList.add('fullview');
      this.previewList.classList.add('preview');
      this.fullImage.setAttribute('alt','alt text 1');
      this.fullImage.setAttribute('src', this.items[this.defaultActiveItem-1].fullview); 
      this.parentNode.append(this.fullviewDiv, this.previewList);
      this.fullviewDiv.append(this.fullImage);
      for ( let el of this.items) {
        let previewItem = document.createElement( 'li');
        let previewImage = document.createElement( 'img');
        previewImage.setAttribute('src', el.preview)
        previewImage.setAttribute('data-fullview', el.fullview);
        previewImage.setAttribute('alt', el.alt);    
        this.previewList.append(previewItem);
        previewItem.append(previewImage);
      }
    } 
    changeFullview(event) {
      event.preventDefault();
      if(event.target.tagName === "IMG") {
        this.fullImage.setAttribute('src', event.target.dataset.fullview)
        document.querySelectorAll('.preview img').forEach(el => el === event.target ? el.classList.add('hover') : el.classList.remove('hover'))
      }
  }
}

// let gal1 = new Gallery(galleryItems, document.querySelector('.js-image-gallery'), 1)
// console.log(gal1);
// window.addEventListener('DOMContentLoaded', gal1.createGallery)
// gal1.previewList.addEventListener('click', gal1.changeFullview)

let gal2 = new Gallery(galleryItems2, document.querySelector('.js-image-gallery'), 2)
window.addEventListener('DOMContentLoaded', gal2.createGallery)
gal2.previewList.addEventListener('click', gal2.changeFullview);

let gal3 = new Gallery(galleryItems3, document.querySelector('.js-image-gallery'), 4)
window.addEventListener('DOMContentLoaded', gal3.createGallery)
gal3.previewList.addEventListener('click', gal3.changeFullview);