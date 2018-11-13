'use strict';

// setTimeout(callback, delay);

// setInterval(callback, delay);

// function sayHello() {
//     console.log('Hello!');
// }

// // setTimeout(sayHello, 2000);
// // setInterval(sayHello, 1000);

// let timeOutId = setTimeout(sayHello, 2000); // получили порядковый номер, который js присвоил данному интервалу. Уникальны, сверху вниз js читает и дает номера
// let intervalId = setInterval(sayHello, 1000);

// console.log(`Timeout`, timeOutId);
// console.log(`Interval`, intervalId);


// clearInterval(intervalId);
// clearTimeout(timeOutId);


// ////////////////
// let date = new Date();
// console.log(date);

// console.log(date.getDate());
// console.log(date.getMonth()); // отсчет от 0 индекса.
// console.log(date.getDay()); // воскресенье первый день недели, индекс 0
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime()); // в миллисекундах on начал эпохи Unix (?)

// let date1 = new Date (2001, 5, 8, 12, 1, 3, 0) // год, месяц, день, час, минута, секунда, мс
// console.log(date1);


//     let deadline = new Date (2018, 10, 23, 0, 0);

//     let seconds =  document.querySelector('.seconds');
//     let minutes =  document.querySelector('.minutes');
//     let hours = document.querySelector('.hours'); 
//     let days = document.querySelector('.days');
    
// function timer() {

//     let today = Date.now();
//     let delta = deadline - today;
//     console.log(delta);
//     let sec = Math.floor(delta/1000%60);
//     let minute = Math.floor(delta/1000/60%60)
//     let hour = Math.floor(delta/1000/60/60%24)   
//     let day = Math.floor(delta/1000/60/60/24)
//     seconds.textContent = sec >= 10 ? sec :0+ sec;
//     minutes.textContent = minute >= 10 ? sec : '0' + minute;
//     hours.textContent = hour > 10 ? hour : '0' + hour;
//     days.textContent = day;
// }

// setInterval(timer, 1000);




 /* resets and general styles */
//  *{
//     margin: 0 auto;
//     -webkit-box-sizing: border-box;
//     -moz-box-sizing: border-box;
//     box-sizing: border-box;
// }
// ::-moz-selection{
//     color: #FFFFFF;
//     background: #FF5722;
// }
// ::selection{
//     color: #FFFFFF;
//     background: #FF5722;
// }
// body{
//     font: normal 16px 'Roboto', sans-serif;
//     position: absolute;
//     height: 100%;
//     width: 100%;
// }
// div.wrapper{
//     width: calc(4*225px);
//     margin: 0 auto;
// }
// span, a, strong{font-weight: 700;}
// a{transition: .2s; text-decoration: none; color: #787878; border-bottom: 1px solid #607D8B;}
// a:hover{transition: .2s; color: #FF5722;}
// /* page layout */
// /* header */
// header{
//     width: 100%;
//     height: 60%;
//     background: #607D8B;
// }
// /* section */
// /* /* section{
//     width: 100%;
//     height: 50%;
// } */
// section h1, section p.meta{
//     color: #FFFFFF;
//     margin-bottom: 15px;
// }
// section hgroup{margin-top: -360px;}
// section p.numbers{font-size: 6em;}
// section p.meta,section p.strings{font-size: 1.5em;}
// section h1{font-size: 4.5em;} */
// /* countdown styles */
// div#countdown{color: #353535;}
// div#countdown p{
//     width: 100%;
//     display: inline-block;
//     text-align: center;
// }
// p.numbers{
//     width: 100%;
//     height: 85%;
//     background: #FFFFFF;
//     margin-top: -25px;
//     padding-top: 100px;
// }
// p.strings{
//     width: 100%;
//     height: auto;
//     padding: 30px 0;
//     background: #FF5722;
//     color: #FFFFFF;
// }
// div.cd-box{
//     width: 210px;
//     height: 360px;
//     background: #FFFFFF;
//     float: left;
//     padding: 25px 0 0 0;
//     margin: 30px 15px 0 0;
//     -webkit-box-shadow: 5px 6px 9px 1px rgba(53, 53, 53, 0.5);
//     -moz-box-shadow: 5px 6px 9px 1px rgba(53, 53, 53, 0.5);
//     box-shadow: 5px 6px 9px 1px rgba(53, 53, 53, 0.5);
// }
/* * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .timer {
    padding: 30px;
    text-align: center;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
    color: #212121;
    border-radius: 2px;
  }
  
  .clockface {
    margin-bottom: 15px;
    font-family: "Roboto Mono", monospace;
    font-size: 80px;
  }
  
  .timer-btn {
    display: inline;
    text-transform: uppercase;
    border: 0;
    background-color: #212121;
    color: #ffffff;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 28px;
    border-radius: 2px;
    font-family: "Roboto", sans-serif;
  }
  
  .active {
    background-color: #2196F3;
  }
   */






// 1

/*
  Дан массив цветов и кнопки "Start" и "Stop". Сделайте так, чтобы после
  нажатия кнопки "Start", каждую секунду body менял цвет фона на случайное 
  значение из массива. 

  При нажатии на кнопку "Stop", изменении цвета фона должно останавливаться.
*/

// const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
// let body = document.querySelector('body');
// let start = document.querySelector('.js-start');
// let stop = document.querySelector('.js-stop');
// let chan;


// function changeColor () {
//     let i = Math.floor(Math.random()*7);
//     body.style.backgroundColor = colors[i];
// }

// function st() {
//     chan = setInterval(changeColor, 1000)
// }

// function stp() {
//    clearInterval(chan)
// }

// start.addEventListener('click', st );
// stop.addEventListener('click', stp );


// 2

/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

// function getFormattedTime(time) {
//     let ms = Math.floor(Math.floor(time%1000)/100) ;
//     let sec = Math.floor(time/1000%60); 
//     let minute = Math.floor(time/1000/60%60)
//     return `${minute>10?minute:'0'+minute}:${sec>10 ? sec:'0'+sec}:${ms}`;
//   }
  
//   console.log(
//     getFormattedTime(1523621052858)
//   ); // 04:12.8
  
//   console.log(
//     getFormattedTime(1523621161159)
//   ); // 06:01.1
  
//   console.log(
//     getFormattedTime(1523621244239)
//   ); // 07:24.2
   
  
   

  // 3

  /* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 1.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const stopBtn = document.querySelector(".js-timer-stop");

const timer = {
  startTime: null,
  deltaTime: null,
  id: null
};

function start() {
   timer.startTime = Date.now();
   timer.id = setInterval(sumTime, 100)
}
startBtn.addEventListener('click', start)

function stop() {
  clearInterval(timer.id)
}
stopBtn.addEventListener('click', stop)

function sumTime () {
    timer.deltaTime = Date.now()-timer.startTime;
    updateClockface(clockface, timer.deltaTime)
}

/*
* Вспомогательные функции
*/

function getFormattedTime(time) {
    let ms = Math.floor(Math.floor(time%1000)/100) ;
    let sec = Math.floor(time/1000%60); 
    let minute = Math.floor(time/1000/60%60)
    return `${minute>=10?minute:'0'+minute}:${sec>=10 ? sec:'0'+sec}:${ms}`;
}

/*
* Обновляет поле счетчика новым значением при вызове
* аргумент time это кол-во миллисекунд
*/
function updateClockface(elem, time) {
  // Используйте функцию getFormattedTime из задания #1
  elem.textContent = getFormattedTime(time);
}

/*
* Подсветка активной кнопки
*/
function setActiveBtn(target) {
  if(target.classList.contains('active')) {
    return;
  }
  
  startBtn.classList.remove('active');
  stopBtn.classList.remove('active');
  
  target.classList.add('active');
}



// 4

