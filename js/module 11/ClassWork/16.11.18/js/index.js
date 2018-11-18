'use strict';

const context = {
    city: "London",
    street: "Baker Street",
    number: "221B"
};
 // 1. Получить доступ к шаблону. 
// let template = document.querySelector('#adress-template').innerHTML.trim();
// console.log(template);

 // 2. Запускаем функцию шаблонизатор. 
//  let temp = Handlebars.compile(template);
// console.log(temp);

// 3. Передаем в функцию объект.
// const mark = temp(context);
// console.log(mark);

// 4. Готовую разметку вставляем на экран. 
// let container = document.querySelector('.result-templ')
// container.innerHTML = mark;


// Task 1
const info = {
    title: 'Handlebars',
    helpers: 'Each and if',
    func: 'compile'
}

// let source1 = document.querySelector('#task1-templ').innerHTML.trim();
// let temp1 = Handlebars.compile(source1);
// const mark1 = temp1(info);
// let container = document.querySelector('.result-templ')
// container.innerHTML = mark1;




// 2
// const data = {
//     people: [
//         {firstName: 'Homer', lastName: 'Simpson'},
//         {firstName: 'Peter', lastName: 'Griffin'},
//         {firstName: 'Eric', lastName: 'Cartman'},
//         {firstName: 'Kenny', lastName: 'McCormick'},
//         {firstName: 'Bart', lastName: 'Simpson'}
//     ],
//     temp : [ 'a', 'b', 'c', 'd']
// };

// const source2 = document.querySelector("#expl-templ2").innerHTML.trim();
// const templ2 = Handlebars.compile(source2);
// const mark2 = templ2(data);
// let container = document.querySelector('.result-templ')
// container.innerHTML = mark2;



// 3

const menuData = {
    title: 'Eat it createElement, templates rule!',
    items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'Home', 'Rose']
};

// const source3 = document.querySelector("#expl-templ3").innerHTML.trim();
// const templ3 = Handlebars.compile(source3);
// const mark3 = templ3(menuData);
// let container = document.querySelector('.result-templ')
// container.innerHTML = mark3;



// 4

// const data = {
//     animals: [
//         {
//             name: "cow",
//             noise: "moooo"
//         },
//         {
//             name: "cat",
//             noise: "meow"
//         },
//         {
//             name: "fish",
//             noise: ""
//         },
//         {
//             name: "farmer",
//             noise: "Get off my property!"
//         }
//     ]
// };

// const source4 = document.querySelector("#expl-templ4").innerHTML.trim();
// const templ4 = Handlebars.compile(source4);
// const mark4 = templ4(data);
// let container = document.querySelector('.result-templ')
// container.innerHTML = mark4;

// 5

const gallery = {
    title: 'Gallery',
    items: [
        {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
        {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
        {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
        {img: 'https://placeimg.com/300/150/people', text: 'people'},
        {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
        {img: 'https://placeimg.com/300/150/any', text: 'random'}
    ]
};

const source5 = document.querySelector("#expl-templ5").innerHTML.trim();
const templ5 = Handlebars.compile(source5);
const mark5 = templ5(gallery);
let container = document.querySelector('.gallery-content')
container.innerHTML = mark5;