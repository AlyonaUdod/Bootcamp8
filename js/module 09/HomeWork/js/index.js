'use strict';

/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/



/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Выполните домашнее задание используя класс с полями и методами.
  
  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
  динамически создана вся разметка для секундомера.
  
  Должна быть возможность создать сколько угодно экземпляров секундоментов 
  на странице и все они будут работать независимо.
  
  К примеру:
  
  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);
  
  Где parent* это существующий DOM-узел. 
*/

let parentA = document.querySelector('.parentA');
let parentB = document.querySelector('.parentB');


// let lapsArr = []; // я не поняла где должен быть массив? 
// Если глобальный, то вот он тут, если надо каждый раз массив заново создавать, то другое дело.
// Создала массив в конструкторе. =>

// Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
// в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x

class Stopwatch {
    constructor (parent) {
    this.parent = parent;
    this.wrap = document.createElement('div');
    this.time = document.createElement('p');
    this.smTime = document.createElement('p');
    this.btnStart = document.createElement('button');
    this.btnLoop = document.createElement('button');
    this.btnStop = document.createElement('button');
    this.lapsList = document.createElement('ul');
    this.isActive = false;
    this.startTime;
    this.timerId;
    this.deltaTime;
    this.lapsArr = [];

    this.createStopwatch = this.createStopwatch.bind(this);
    this.start = this.start.bind(this);
    this.lap = this.lap.bind(this);
    this.stop = this.stop.bind(this);
    this.calculateTime = this.calculateTime.bind(this);
    this.updateClockface = this.updateClockface.bind(this);
    this.getFormattedTime = this.getFormattedTime.bind(this);
    }

    createStopwatch () {
      this.wrap.classList.add('wrapper');
      this.time.classList.add('time');
      this.smTime.classList.add('sm-time');
      this.lapsList.classList.add('laps-list');
      this.btnStart.classList.add('js-start');
      this.btnStart.classList.add('btn');
      this.btnLoop.classList.add('js-take-lap');
      this.btnLoop.classList.add('btn');
      this.btnLoop.setAttribute('disabled', 'disabled');
      this.btnStop.classList.add('js-reset');
      this.btnStop.setAttribute('disabled', 'disabled')
      this.btnStop.classList.add('btn');

      this.time.textContent = '00:00:0';
      this.smTime.textContent = '000';
      this.btnStart.textContent = 'start';
      this.btnLoop.textContent = 'lap';
      this.btnStop.textContent = 'reset';

      this.parent.append(this.wrap, this.btnStart, this.btnLoop, this.btnStop);
      this.wrap.append(this.time, this.smTime, this.lapsList,);
    }

    start() {
      console.log(this.startTime);
        if (this.isActive === false && this.startTime === undefined) {
          this.startTime = Date.now();
          this.isActive = true;
          this.timerId = setInterval(this.calculateTime, 100);
          this.btnStart.textContent = 'pause';
          this.btnStop.removeAttribute('disabled', 'disabled');
          this.btnLoop.removeAttribute('disabled', 'disabled');
        } else if (this.isActive === false && this.startTime !== isNaN){
          this.isActive = true;
          this.timerId = setInterval(this.calculateTime, 100);
          this.btnStart.textContent = 'pause';
        } else {     
          this.isActive = false;
          this.btnStart.textContent = 'continue';
          clearInterval(this.timerId);
        }
    }

    stop() {
      clearInterval(this.timerId);
      this.time.textContent = '00:00:0';
      this.smTime.textContent = '000';
      this.startTime = undefined;
      this.btnStart.textContent = 'start';
      this.btnStop.setAttribute('disabled', 'disabled');
      this.btnLoop.setAttribute('disabled', 'disabled');
      this.lapsList.innerHTML = '';
      this.isActive = false;
    }

    lap() {
      if (this.startTime !== isNaN){
        this.lapsArr.push(`${this.time.textContent}`);
        let laps = document.createElement('li');
        laps.classList.add('laps') 
        laps.textContent = `${this.time.textContent}`;
        this.lapsList.append(laps)
      } console.log(this.lapsArr);
    }

    calculateTime () {
        this.deltaTime = Date.now()-this.startTime;
        this.updateClockface(this.time,this.deltaTime) 
    }

    updateClockface(elem, time) {
      elem.textContent = this.getFormattedTime(time);
    }
   
    getFormattedTime () {
        let ms = Math.floor(Math.floor(this.deltaTime%1000)/100) ;
        let sec = Math.floor(this.deltaTime/1000%60); 
        let min = Math.floor(this.deltaTime/1000/60%60);
          if (Math.floor(Date.now()%1000)<=10) {
            this.smTime.textContent = `00${Math.floor(Date.now()%1000)}`
          } else if (Math.floor(Date.now()%1000)>10&&(Math.floor(Date.now()%1000)<=100)){
            this.smTime.textContent =`0${Math.floor(Date.now()%1000)}`
          } else {
            this.smTime.textContent = Math.floor(Date.now()%1000)
          }
        return `${min>=10?min:'0'+min}:${sec>=10 ? sec:'0'+sec}:${ms}`
    }
}


let sw1 = new Stopwatch(parentA);
window.addEventListener('DOMContentLoaded', sw1.createStopwatch);
sw1.btnStart.addEventListener('click', sw1.start)
sw1.btnStop.addEventListener('click', sw1.stop);
sw1.btnLoop.addEventListener('click', sw1.lap);



// let sw2 = new Stopwatch(parentB);
// window.addEventListener('DOMContentLoaded', sw2.createStopwatch);
// sw2.btnStart.addEventListener('click', sw2.start)
// sw2.btnStop.addEventListener('click', sw2.stop);
// sw2.btnLoop.addEventListener('click', sw2.lap);
