'use strict';


/************** 1 ***************/
/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
  В prototype функции-конструктора добавить метод getAccountInfo(), 
  который выводит в консоль значения полей login, email и friendsCount. 
  
  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

// const Account = function (login, email, friendsCount) {
//     this.login = login;
//     this.email = email;
//     this.friendsCount = friendsCount;
// }

// Account.prototype.getAccountInfo = function () {
//     console.log(`Login: ${this.login}, email: ${this.email}, friends: ${this.friendsCount} `); 
// }

// let user1 = new Account ('Jack', 'gjgjgj@gmail.com', 68);
// let user2 = new Account ('Barbie', 'ololololo_lololo@gmail.com', 1130);
// let user3 = new Account ('Tor', 'jglksjdgskdlg_dkfjkg@ukr.com', 4);

// user1.getAccountInfo();
// user2.getAccountInfo();
// user3.getAccountInfo();



// /************** 2 ***************/

// /*
//   Напишите функцию-конструктор StringBuilder.
  
//   На вход она получает один параметр string - строку.
  
//   Добавьте следующие методы в prototype функции-конструктора.
  
//     - getValue() - выводит в консоль текущее значение поля value
  
//     - append(str) - получает парметр str - строку и добавляет 
//       ее в конец значения поля value
    
//     - prepend(str) - получает парметр str - строку и добавляет 
//       ее в начало значения поля value
  
//     - pad(str) - получает парметр str - строку и добавляет 
//       ее в начало и в конец значения поля value
// */


// function StringBuilder(string = "") {
//     this.value = string;
//   }

// StringBuilder.prototype.showValue = function() {
//     console.log(this.value);
// }

// StringBuilder.prototype.append = function(str) {
//     myString.value = `${myString.value}${str}`;
// }

// StringBuilder.prototype.prepend = function(str) {
//     myString.value = `${str}${myString.value}`;
// }

// StringBuilder.prototype.pad = function(str) {
//     myString.value = `${str}${myString.value}${str}`;
// }

//   const myString = new StringBuilder('.');
  
//   myString.append('^'); 
//   myString.showValue(); // '.^'
  
//   myString.prepend('^'); 
//   myString.showValue(); // '^.^'
  
//   myString.pad('='); 
//   myString.showValue(); // '=^.^='



// /************** 3 ***************/

// /*
//   Создайте класс Car с указанными полями и методами.
// */

// class Car {
//     constructor(maxSpeed, value) {
//         this.speed = 0;
//         this.maxSpeed = maxSpeed;
//         this.running = false;
//         this.distance = 0;
//         this._value = value;
//       /*
//         Добавьте свойства:
//           - speed - для отслеживания текущей скорости, изначально 0.
          
//           - maxSpeed - для хранения максимальной скорости 
          
//           - running - для отслеживания заведен ли автомобиль, 
//             возможные значения true или false. Изначально false.
            
//           - distance - содержит общий киллометраж, изначально с 0
//       */
//     }
  
//     turnOn() {
//         return this.running = true;
//       // Добавьте код для того чтобы завести автомобиль
//       // Просто записывает в свойство running значание true
//     }
  
//     turnOff() {
//         return this.running = false;
//       // Добавьте код для того чтобы заглушить автомобиль
//       // Просто записывает в свойство running значание false
//     }
    
//     accelerate(spd) {
//         return this.speed = spd <= this.maxSpeed ? this.speed = spd : null;
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed
//     }
    
//     decelerate(spd) {
//         return this.speed = spd <= this.maxSpeed && spd > 0 ? this.speed = spd : null;
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed и не меньше нуля
//     }
  
//     drive(hours) {
//         return this.distance = this.running === true ? this.distance = hours*this.maxSpeed : null;
//       // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//       // но только в том случае если машина заведена!
//     }

//     getSpecs() {
//        return console.log(car1);
//     }

//     get value () {
//         return this._value
//     }

//     set value (value) {
//         this._value = value;
//       }
//   }
  
// const car1 = new Car (100,2000);
// console.log(car1);
// console.log(car1.turnOn());
// console.log(car1.accelerate(80));
// console.log(car1.decelerate(45));
// console.log(car1.drive(3));
// console.log(car1.turnOff());





// /************** 4 ***************/

// /*
//   Добавьте к классу Car из предыдущего задания статический
//   метод getSpecs, который получает объект-машину как аргумент
//   и выводит в консоль значения полей maxSpeed, running и distance.
  
//   Использование будет выглядеть следующим образом:
  
//   const someCar = new Car(100);
//   someCar.turnOn();
//   someCar.drive(2);
  
//   Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
// */

// car1.turnOn();
// car1.drive(2);
// car1.getSpecs(); // Car {_speed: 0, _maxSpeed: 100, _running: true, _distance: 200}




// /************** 5 ***************/

// /*
//   Добавьте классу Car свойство value - цена автомобиля.
  
//   Добавьте классу Car использование геттеров и сеттеров для свойства value.
  
//   Геттер вернет текущей значение поля this._value
//   Сеттер запишет в поле this._value то что ему присвоят
  
//   PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
//     не this.value а this._value
    
//   Использование выглядит следующим образом:
  
//   const myCar = new Car(50, 2000);
  
//   myCar.value; // 2000
//   myCar.value = 4000;
//   myCar.value; // 4000
// */

// // class Car {
// //     constructor(maxSpeed, value) {
// //       // ... код
// //       this._value = value;
// //     }
// //     // ... код
// //   }
//   car1._value;
//   car1._value = 4000;
//   car1._value;

//   console.log(car1.value);






  /***********/ // ТЕОРИЯ 

  // прото - поле с сылкой на объект. 

  let animal = {
    canEat: true,
    canSleep: true,
    canWalk: true,
    canJump() {
        return 'I can jump';
    }
 };

let dog = Object.create(animal); // таки образом мы создаем объект дог на основе енимал, 
dog.canBarck = true;
dog.canSwim = true;


console.log(animal);
console.log(dog.canEat); // true
console.log(dog.canBarck); // true


// [[Prototype]] это запись __proto__ в спецификации ECSMA....


function Human (name, age, gender) {
  // this
  // prototype - создает объект prototype когда мы запускаем функцию-конструктор. Только. 
  // Human.prortotype = {} - по дефолту в него записывается функция конструктор. и сами мы руками можем туда записывать свойства. 
  // Human.prototype - объект хран
  this.name = name;
  this.age = age;
  this.gender = gender;
}
// В конструктор мы записываем индивидуальные свойства, которые должны быть у экземпляра. Они будут разные.
// В прототип - те свойства, которые общие для всех экземпляровю


let poly = new Human ('Poly', 1, 'female' );
let mango = new Human ('Mango', 2, 'male' );


console.log(Human.prototype); // с помощью этого поля (это объект) можем к нему обратиться и записать в него что-то ( в нашем случае методы) 

console.log(poly);
console.log(mango);


// такой записью мы из конструктора вынесли в прототип. 
// Таким образомы мы вшиваем ее в прототипю Чтобы все созданые объекты имели доступ к этим функциям.
// Чтобы объект занимал меньше места и у нас не дублировался код.
// потому что при создании экземпляра дублируется все,что в свойствах конструктора написано. 
// а так свойство лежит в прототипе и не дублируется при создании экземпляров.
Human.prototype.fullInfo = function() {
    console.log(`I am ${this.name} ${this.age} old, ${this.gender}.`)
}
mango.fullInfo(); // функия подтягивается из прототипа, все хорошо работает. 

Human.prototype.breathe = function() {
  console.log(`${this.name} can breathe.`);
};
poly.breathe();

Human.prototype.walk = function(){
  console.log(`${this.name} can walk.`);
};
mango.walk();

Human.prototype.speak = function(words){
  console.log(`${this.name} say ${words}.`);
};
poly.speak('Hello!');

Human.prototype.friends = ['Bob', 'Jon', 'Tor'];

console.log(mango.friends);
poly.friends.pop()
console.log(mango.friends);


// __proto__ это ключ(ссылка) внутри нашего объекта, которая создала функция конструктор (Экземпляр) 
// prototype - поле внутри функции конструктора, где хранится объект. - его значением является объект. 



// __proto__ - ключ внутри экземпляра. В нем прототип   -------  это ссылка на склад
// prototype - объект ключ-значение, сохраняются ключ-значение       ------ это склад, на котором все хранится

// ссылка на который находится в __proto__.


// __proto__     - ключ внутри объекта (экземпляр)
// prototype     - объект, ссылка на который находится в __proto__ , и в котором хранятся ключи и значения


function Ukrainian (name, age, gender, national) {
  Human.call(this, name, age, gender);
  this.national = national;
}

Ukrainian.prototype = Object.create(Human.prototype); // мы установили наследование, теперь прототипом для укр стаенет прототип человека
Ukrainian.prototype.constructor = Ukrainian;

const user1 = new Ukrainian('Kate', 5, 'female','ukr')

console.log(user1);



console.log(typeof(Human));






/**********************************************************/

// 1) Створити конструктор User шо буде мати поля name, surname
// 2) Додати метод getFullName() що виводить на екран імя і прізвище
// 3) Створити конструктор Student шо буде наслідуватися від User
// 4) Властивості  name, surname буде наслідувати від User і буде мати власну властивість yearIn (рік вступу)
// 5) Для студента додати метод getCourse() що показує курс на якому навчається зараз студент (від поточного року відняти рік вступу)
// 6) Додати студенту метод getFullInfo() який бере інформацію з батьківського 
// метода getFullName() і свого getCourse() і виводить її на екран

 function User (name, surname) {
  this.name = name;
  this.surname = surname;
 }

User.prototype.getFullName = function() {
  return `Name: ${this.name}, Surname: ${this.surname}`
  
};

function Student (name, surname, yearIn) {
  User.call(this, name, surname, yearIn);
  this.yearIn = yearIn;
  this.year = 2018;
}

Student.prototype = Object.create(User.prototype); 
Student.prototype.constructor = Student;


Student.prototype.getCourse = function () {
  return this.year-this.yearIn;
}

Student.prototype.getFullInfo = function() {
  console.log(`${this.getFullName()}, Years of study: ${this.getCourse()}.`);
}

let user2 = new User('Jon', 'Snow');
console.log(user2);
user2.getFullName();
let stud1 = new Student('Max', 'Pain', 2016);
console.log(stud1);
stud1.getFullName();
stud1.getFullInfo();



/************************************************************/

let books = [];
let order = [];
// Part 1
// Створити конструктор Book який створює обєкти такого типу {title: title, author:author, pages: pages, price: price, curentPage: 0};
// Помістити в прототип метод  buy(arr) який приймає аргументом масив order додає ціну книжки в нього.
// Помістити в прототип метод read(num) який приймає аргументом кількість сторінок що прочитано і змінює значення поля curentPage;
// Створити 3 обєкта книжки викликати для них методи buy() та read(num); 
// Порахувати загальну вартість замовлення з масива order.
// Вивести в консоль змінене значення поля curentPage після запуску методів read(num); 
// Всі куплені книги додати в масив books.
//  Part 2
// Створити ф-ю констпуктор E-Book який наслідує всі властивості консруктора Book і додає до обєкта книги 
// додаткове поле fileSize де вказується розмір книги в кілобайтах.
// Додати в прототип E-Book метод download() який при виклику виводить в консоль напис 'Book {title} has been dowloaded, 
// app was downloaded {fileSize} kb';
// Створити 2 книги конструктором E-Book і викликати для них метод buy(arr) щоб додати їх до масиву order.
// Викликати для них метод download()
// Part 3 
// Створити корструктор PapperBook який наслідує всі властивості консруктора Book і додає до обєкта книги додаткове поле cover.
// Додати в прототип PapperBook метод burn(arr) який приймає аргументом масив books з частини №1 при виклику 
// виводить в консоль напис 'Book {title} has been burned' і видаляє з масива books ту книгу для якої викликаємо цей метод.

// Створити 3 книги конструктором PapperBook і викликати для них метод buy(arr) щоб додати їх до масиву order.
// Викликати для першої і другої книги методи burn(arr), щоб видатити їх з масива books


function Book (title, author, pages, price, curentPage = 0) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.price = price;
  this.currentPage = curentPage;
};

Book.prototype.buy = function (order) {
  return order.push(this.price);
};

Book.prototype.read = function (cur) {
  return this.currentPage = cur;
};

const book1 = new Book('Tails','Mark Tven', 355, 100);
const book2 = new Book('Horror', 'Devil', 500, 230);
const book3 = new Book('Love', 'Mary May', 150, 90)

console.log(book1);
console.log(book2);
console.log(book3);

book1.buy(order);
book2.buy(order);
book3.buy(order);
console.log(order);

book1.read(35);
book2.read(68);
book3.read(21);
console.log(book1);
console.log(book2);
console.log(book3);

const totalPrice = (order) => order.reduce((acc, el) => acc+ el);
console.log(totalPrice(order));

books = books.concat(book1,book2,book3);
console.log(books);

// 2

function EBook(title, author, pages, price, curentPage = 0, fileSize) {
  Book.call(this,title, author, pages, price, curentPage);
  this.fileSize = fileSize;
};

EBook.prototype = Object.create(Book.prototype);
EBook.prototype.constructor = EBook;


EBook.prototype.download = function () {
  console.log(`Book ${this.title} has been dowloaded, app was downloaded ${this.fileSize} kb`);
}


const book4 = new EBook('Rain', 'Clouds', 600, 100, 0, 32);
const book5 = new EBook('Tree', 'Forest', 349, 67, 0, 150);

book4.buy(order);
book5.buy(order);
console.log(book4);

book4.download();
book5.download();


// 3

function PapperBook (title, author, pages, price, curentPage = 0, cover) {
  Book.call(this, title, author, pages, price, curentPage);
  this.cover = cover;
}

PapperBook.prototype = Object.create(Book.prototype);
PapperBook.prototype.constructor = PapperBook;

PapperBook.prototype.burn = function (order,book) {
  // order.filter(el => el !== book.price)
  //  console.log(order.filter(el => el !== book.price));
  console.log(`Book ${this.title} has been burned`);
  order.splice(order.indexOf(book.price),1);
  
};

const book6 = new PapperBook('Snow', "weather", 34, 56, 0, 78);
const book7 = new PapperBook('Summer', "Seasons", 124, 65, 0, 31);
const book8 = new PapperBook('Autumn', "New Year", 67, 897, 0, 13);

book6.buy(order);
book7.buy(order);
book8.buy(order);
console.log(order);

book6.burn(order,book6);
// book7.burn(books);
console.log(order);