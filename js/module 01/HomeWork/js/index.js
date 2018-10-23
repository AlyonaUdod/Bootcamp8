'use strict';
// const adminLogin = 'admin';
// const adminPassword = 'm4ngo1zh4ackz0r';

let admin = prompt("Enter login");

// if (admin === null) {
//     alert ('Отменено пользователем!'); 
// } else if ( admin !== 'admin') {
//     alert ('Доступ запрещен!')
// } else { 
//     let password = prompt("Enter password"); 
//     if ( password === 'm4ngo1zh4ackz0r') {
//         alert ('Happy!')
//     } else {
//         alert ('Доступ запрещен!')
//     }
// }






switch (true) {
    case (admin === null) :
        alert ('Отменено пользователем!');
        break;
    case (admin !== 'admin') :
        alert ('Доступ запрещен!');
        break; 
    case (admin === 'admin'):
    let password = prompt('Enter password');
        switch (password) {
            case 'm4ngo1zh4ackz0r' :
            alert ('Добро пожаловать!');
            break;
            default :
            alert ('Доступ запрещен!');
            break; 
        } 
    break; 
}