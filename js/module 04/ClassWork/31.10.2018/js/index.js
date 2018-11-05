'use strict'; // this для строгого режима показывает undefined, для нестрогого - window.

// THIS *******************************************************

// const motel = {
//     name: '7 Days',
//     stars: 4,
//     rooms: 150,
//     hasSwPool: true,
//     hasCort: false,
//     showName() {
//         console.log(`${this.name}`);
//     },
//     changeRoomNum(number) {
//         this.rooms = motel.rooms - number; // this - мы обращаемся к имени объекта, в котором вызывается функция.
//         return motel.rooms;
//     },
//     openCort() {
//         motel.hasCort = !motel.hasCort;
//     },
//     //   showThis() {
// //         console.log(this); // в таком случае у нас выводятся все характеристики объекта, в котором запускается функция (который является this для этой функции)
// //     }
//     // showThis: () => { 
//     //     console.log(this);
//     // }

//     wrapper () {    // мы создаем обычную функцию внутри объекта, в нее засовываем стрелочную функцию, чтобы при запуске стрелочной функции она подтягивала контекст обычной функции, которой оборачивается. 
//         const showThis = () => { 
//             console.log('Show this context', this);
//         };
//         showThis();
//     }
// }


// // Функция обычная создает контекст исполнения в момент запуска. 
// // контекст исполнения такой функции определяется в момент запуска функции. ТОЛЬКО ДЛЯ ТАКИХ ФУНКЦИИ, не для стрелочных
// // function showThis() {
// //     console.log(this);
// // }
// // console.log(motel.stars);

// // motel.showName(); // если возле функции есть объект - это ссылка на объект, который функцию запускает.
// // motel.changeRoomNum(10);
// // console.log(motel.rooms);
// // motel.openCort();
// // console.log(motel.hasCort);

// // Контекст исполнения функции. - ссылка на объект, который запускает функцию
// // motel.showThis();

//    motel.wrapper();


// 1. Cтрелочная функция запоминает свой контекст исполнения в момент написания.
// 2. Стрелочная функция не имеет своего this. Она его идет искать выше. Контекст исполнения имеет только фенкции. 
//    При вызове стрелочной функции будет вылетать Window.







// APPLY, CALL ***********************************************

// const hotel = {
//     name: 'Resort Hotel',
//     price: 2500,
// };
// const hotel2 = {
//     name: '4 Seasons Hotel',
//     price: 500,
// };
// const hotel3 = {
//     name: '7 days Hotel',
//     price: 700,
// };

// // const hotelInfo = (function() {
// //     console.log(`${this.name} and ${this.price}.`);
// // })

// // Используется для проверки например норм работает функция или нет. 
// function showInfo (name = 'User', age = 'old') {
//     console.log(`Hello ${name} you live in ${this.name} and ${this.price}. You are ${age}?`);
// }

// // Первый аргумент - всегда объект, к которому функию ты применяешь. остальные - аргументы, которые хочешь передать.
// // showInfo.call(hotel, 'Homer', 25); // только один объект вызывается. 
// // showInfo.call(hotel3, 'Rick', 100)

// // apple - аргументы после объекта передаются в виде массива. Чтобы не писать например в функии преобразование полученых аргументов в массив
// showInfo.apply(hotel, ['Homer', 25]);
// showInfo.apply(hotel3);

// // call - coma;
// // apply - arr;


// // BIND **********************************

// // функция создает копию, и намертво привязывает контекст исполнения к конкртеному объекту

// const boundShowInfo = showInfo.bind(hotel); 
// boundShowInfo (); 





// CONCTRUCTOR **********************************************

// const Tank = {
//     speed: 100,
//     armor: 50,
//     life: 100,
//     damage: 20,
//     name: 'Tiger',
//     nickName: 'Tankist',
//     amunition: 10,
//     x: 0,
//     y: 0,

//     move(a,b) {
//         this.x = a;
//         this.y = b;
//     },

//     fire() {
//         this.amunition > 0 ? this.amunition-=1 : alert ('You have to recharge') 
//     },

//     heal(size) {
//        this.life+size > 100 ? this.life : this.life += size; 
//     }
// };

    // Tank.move(50,100)
    // Tank.fire();
    // Tank.fire();
    // Tank.fire();
    // Tank.life = 50;
    // Tank.heal(25);
    // console.log(Tank);


// функции названые с большой буквы - контруктор.
// function Tank (speed, amunition, armor, nickName, x, y) {
//     // this = {} - суть, при запуске конструктора создается пустой объект, который мы наполняем переданными аргументами, return объект.

//     // return this

//     this.speed = speed;
//     this.amunition = amunition;
//     this.armor = armor;
//     this.nickName = nickName;
//     this.x = x;
//     this.y = y;
//     this.life = 100;
//     this.damage = 20;
//     this.name = 'Tiger';

//     this.move = function(a,b) {
//         this.x = a;
//         this.y = b;
//     };

//     this.fire = function() {
//         this.amunition > 0 ? this.amunition-=1 : alert ('You have to recharge') 
//     };

//     this.heal = function (size) {
//         this.life+size > 100 ? this.life : this.life += size; 
//     };


// }

// let tiger = new Tank(10, 30, 45, 'Hell', 0, 0);
// let scorpion = new Tank(20,40,60,'Devil', 65,90);


// console.log(tiger);
// console.log(scorpion);





/* 7 */


/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  необходимо передать как аргументы 
  при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/


// function User (name, isActive, age, friends) {
//     this.name = name;
//     this.isActive = isActive;
//     this.age = age;
//     this.friends = friends;

//     this.getInfoUser = function() {
//         console.log(`User ${name} is ${age} years old and has ${friends} friends.`);
//     };
// }

// let user01 = new User ('Nick', true, 18, 65);
// let user02 = new User ('Kasye', false, 78, 40);
// let user03 = new User ('Charming', true, 23, 100);

// user01.getInfoUser();
// user02.getInfoUser();
// user03.getInfoUser();





/* 8 */

/*  
  Расставьте отсутствующие this 
  в методах объекта store
*/

// const store = {
//     products: ['bread', 'cheese', 'milk', 'apples'],
//     managers: ['poly', 'mango', 'ajax'],

//     addManager(manager) {
//       this.managers.push(manager);
      
//       console.log(this.managers);
//     },
//     removeManager(manager) {
//       const idx = this.managers.indexOf(manager);
      
//       this.managers.splice(idx, 1);
      
//       console.log(this.managers);
//     },
//     getProducts() {
//       console.log(this.products);
      
//       return this.products;
//     }
//   }
  
//   store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']
  
//   store.removeManager('mango'); // ['poly', ajax', 'chelsey']
  
//   store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']
  





/* 9 */

/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

// function Account({ login, password, type = "regular" }) {
//     this.login = login;
//     this.password = password;
//     this.type = type;
  
//     this.changePassword = function(newPassword) {
//       this.password = newPassword;
//       console.log(this.password);
//     };
  
//     this.getAccountInfo = function() {
//       console.log(`
//         Login: ${login}, 
//         Pass: ${password}, 
//         Type: ${type}
//       `);
//     };
//   }


//   const account = new Account({
//     login: "Mango",
//     password: "qwe123",
//     type: "premium"
//   });
  

//   console.log(account.login); // 'Mango'
//   console.log(account.password); // 'qwe123'
//   console.log(account.type); // 'premium'
//   account.changePassword("asdzxc"); // 'asdzxc' 
//   account.getAccountInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'




/* 10 */


//   Написати калькулятор за допомогою ф-ї конструктора. Ця ф-я створює обєкт 
//  з  методами read(), sum(), mul(), addMethod(name, function);
// Метод read() запитує в користувача числа за допомогою prompt і запамятовує їх.
// Метод read() працює до тих пір поки користувач не натисне Cancel;
// Метод sum() виводить в консоль суму всіх чисел що ввели в процесі роботи метода read().
// Метод console.log(calculator.sum()) // 15() виводить в консоль добуток всіх чисел.
// Метод addMethod(name, function) вчить калькулятор нової операції. 
// параметр name - назва нового метода
// параметр function - код нового метода.
// За допомогою метода addMethod(name, function) додати в калькулятор новий функціонад який буде знаходити різницю 
// всіх введених цифр які отримали при використанні метода read();

 
function Calculator () {
    this.arr = [];
    this.ask = 0; 
    this.read = function(){    
      do { 
            this.ask = prompt ('Enter Number');
            if (this.ask === null) {
                break;
            } else if (!isNaN(this.ask) && this.ask !== ''){
                this.arr.push(Number(this.ask));
            } else {
                alert ('You have to enter number, try again please.')
            }
        } while (this.ask !== null)
        return this.arr 
    };

    this.sum = function(){
        return this.arr.reduce((acc, el) => acc + el)
    };
    
    this.mul = function(){
        return this.arr.reduce((acc, el) => acc*el) 
    };

    this.addMethod = function(name,fun) {
        this[name] = fun;
    }
}

function minus () {
   return this.arr.reduce((acc, el) => acc - el)
}
// Calculator.prototype.addMethod = function() {
//     this.minus = function(){
//         return arr.reduce((acc, el) => acc - el)
//      } 
//     }


let calculator = new Calculator();

console.log(calculator.read()); // вводимо 5 цифр (1,2,3,4,5) після цього натискаємо Cancel і метод read() зупиняє роботу

console.log(calculator.sum()) // 15

console.log(calculator.mul()) // 120

calculator.addMethod('minus', minus); // додається метод на віднімання

console.log(calculator.minus()) // -13