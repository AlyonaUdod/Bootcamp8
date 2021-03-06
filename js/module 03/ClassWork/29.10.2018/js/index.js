'use strict';

/* стрелочные функции */

// const add = (a, b) => {return a + b; };
// const add1 = (a, b) => a + b  // неявный return


function counter() { /* функция замыкания, в середине функции мы спрятали переменную и меняем ее только с помощью внутренней функции, мы на ее подействовать можем только запустив функцию counter*/
    let count = 0;
    function increment(){
        count++;
        console.log(count);
    }    
        return increment;
}

let user = counter(); // сам код функции
let user2 = counter();
let user3 = counter();
user (); // 1
user (); // 2
user (); // 3
user (); // 4

user2 (); // 1
user2 (); // 2

user3 (); // 1
user3 (); // 2


// cсуть замыкания - в середине функции создаем переменную, которую замыкаем исключительно в этой функции, чтобы извне нельзя было 
// на нее повлиять 
// создаем функцию в функции, которая собственно действует на эту функцию. Мы ее запускаем, а только return нашей основной функции.