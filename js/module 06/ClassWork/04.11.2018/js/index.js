'use strict';

// Клас - ескіз(шаблон) обєкта з яким маємо працювати (машина) Атрибути класа це колеса, двигун і тд
// Методи - завестися, відкрити двері, збільшити швидкість
// Обєкт - екземпляр класа який створили з шаблона
// Інтерфейс - набір методів доступних для вмкористання іншими класами (приборна панель автомобіля, кнопки на автоматі з видачі вкусняшок)
// Абстракція - виділеня головних характеристик обєкту і відкидання незначних не вдаючисть в роздуми як методи працюють зсередини. (map, filter, sort)
// Інкапсуляція - приховання всіх внутрішніх процесів від користувача
// Наслідування - створення нового класу на базі існуюучого
// Поліморфізм - використання обєктів з однаковим інтерфейсом без інфи про внутрішню структуру.



// prototype /**********************************************************************/

// const Video = function (size, duration, title, format, hd, author) {
//     this.size = size;
//     this.duration = duration;
//     this.title = title;
//     this.format = format;
//     this.hd = hd;
//     this.author = author;
//   }
  
//   Video.prototype.getFullInfo = function () {
//     return `${this.author} ${this.title} ${this.duration}`;
//   }
  
//   Video.prototype.archive = function (num) {
//     this.size = parseFloat(this.size) / num + 'gb';
//   }
  
//   Video.prototype.changeAuthor = function (newAuthor) {
//     this.author = newAuthor;
//   }
  
//   Video.prototype.changeTitle = function (newTitle) {
//     this.title = newTitle;
//   }
  
//   const Stream = function(size, duration, title, format, hd, author, status) {
//     Video.call(this, size, duration, title, format, hd, author);
//     this.status = status;
//   }
  
//   Stream.prototype = Object.create(Video.prototype);
//   Stream.prototype.constructor = Stream;
  
//   Stream.prototype.changeStatus = function() {
//     this.status = !this.status;
//   }


// class /**********************************************************************/

// class Video {
//     constructor (size, duration, title, format, hd, author) {
//         this.size = size;
//         this.duration = duration;
//         this.title = title;
//         this.format = format;
//         this.hd = hd;
//         this.author = author;
//     };

//     static greet() { // static - метод, который нельзя вызвать из экземпляра.
//         //  Он только в коде. Можем вызвать только в контексте класса.
//         //  Служебная информация, информация для разработчиков.  
//         console.log('Hello I\'m staaic method')
//     }

//     getFullInfo() {
//         return `${this.author} ${this.title} ${this.duration}`;
//     };
    
//     archive(num) {
//     this.size = parseFloat(this.size) / num + 'gb';
//     }
    
//     changeAuthor(newAuthor) {
//         this.author = newAuthor;
//     }
    
//     changeTitle(newTitle) {
//         this.title = newTitle;
//     }
// }


// const video1 = new Video ('25Gb', '35min', 'My movie', 'MPG4', true, 'WB' )
// console.log(video1);

// video1.changeTitle('Ehehehe');
// console.log(video1);



// class Stream extends Video {
//     constructor (size, duration, title, format, hd, author, status){
//         super(size, duration, title, format, hd, author);
//         this.status = status;
//     };

//     changeStatus() {
//         this.status = !this.status;
//     };

//     getFullStreamInfo() {
//         this.getFullInfo() + this.status;
//     }
// }


// Video.greet();



class User {
    constructor(name, surname) {
    //   this.name = name;
    //   this.surname = surname;
      // private
      this._name = name;
      this._surname = surname;
    }
      getFullName() {
        return `${this.name} ${this.surname}.`
    }
  
    static methodSTATIC() {
        console.log(`HELLO`);
    }
  
    //
    // // getter
    //
    get name() {
      return this._name;
    }
  
    get surname() {
      return this._surname;
    }
    //
    // // // setter
    // //
  
    // get age() {
    //   return this._age;
    // }
  
    // set age(age) {
    //   this._age = age;
    // }
  
    // //
    // get age() {
    //     return this._age;
    // }
  }

  const user1 = new User('Jack', 'Frank')

  console.log(user1);
//   user1.name = "'bla";
  console.log(user1.getFullName()); 

/*************************************************************************************/

// Part 1
// Написати клас  Герой в якого будуть параметри (name, life, level, хр, stamina)
// name - імя
// life - житя =100
// level - рівень = 1
// хр - досвід = 0
// stamina - витривалість = 100
// Клас буде мати методи :
// 1) riseLevel - метод що збідьшує рівень героя на один, якщо хр = 1000
// 2) addXp - метод що приймає параметром хр і плюсує поки сума небуде 1000. Коли хр стає тисячу
//  метод обнуляє поле до 0.
// 3) walk - метод що виводить в консоль фразу "name walking"
// 4) rest - метод що відновлює поле stamina до початкового значення і виводить в консоль фразу 'Recovered' 
// Створити героя і викликати для нього метод addXp(50) і addXp(950)
// Далі викликати метод riseLevel() що збільшить рівень до 2.
// викликати метод walk.

// Part 2 
// Написати класи Людина, Гном, Маг які будуть насладувати все від класа Герой.
// Ці 3 класа будуть мати додаткову властивість race - раса.
// Людина додатково матиме поле - strength = 100
// Гном матиме додатково поле - rage = 100
// Маг матиме додаткове поле - mana = 100
// Для людини додати метод - wardenFight - який при кожному запуску зменьшує поле stamina на 20.
// Коли поле stamina стане 0 потрібно викликати метод rest() щоб відновити її значення.
// Для гнома додати метод berserk'sFury - який при кожному виклику збільшує поле 
// rage на 30. Якщо rage = 100 обнулити поле stamina і rage та викликати метод rest().
// Для мага додати метод spell який при виклику зменьшує занчення на 25 і stamina на 25.
// Коли значення stamina стає 0 потрібно викликати метод rest(). 
// Додати метод reload() який оновлює поле mana до 100

// Створити по одному екземпляру кожного класу для кожного з них 
// обнулити показник stamina викликом їхніх спеціальних методів,
// щоб в консолі зявилося повідомлення 'Recovered' 

// Part 3 
// Створити клас FireMage який наслідує всі властивості від Мага і має додаткову властивість skill
// skill - поле де додається навик 'fireball'
// Додати метод shootFireBall - який виведе в консоль фразу "Вогняний шар запущений і нанесен 
// шкоди на ${рандомне число від 1 до 30}" і запустить метод spell();
// Створити екземпляр класу FireMage і запустити 4 рази метод shootFireBall(). 
// після цього в консолі має зявитися напис 'Recovered'.

// 1

class Hero {
    constructor (name) {
        this.name = name;
        this.life = 100;
        this.level = 1;
        this.xp = 0;
        this.stamina = 100;
    };

    riseLevel(){
        if (this.xp >=1000) {
            this.level = this.level + Math.floor(this.xp/1000);
            this.xp = this.xp - Math.floor(this.xp/1000)*1000;
        }
    };

    addXp (xp) {
        this.xp = this.xp + xp;
        this.xp >= 1000 ? this.riseLevel() : null
        return this.xp
    };

    walk () {
        console.log(`${this.name} walking`);
    };

    rest () {
        this.stamina = 100; console.log('Resolved');
    }
}


const hero1 = new Hero('Jeck');
console.log(hero1);

hero1.addXp(600);
hero1.riseLevel()
console.log(hero1);

hero1.addXp(3500);
hero1.riseLevel()
console.log(hero1);

hero1.walk();
hero1.rest();


// 2

class Human extends Hero {
    constructor (name, race='Human',strength){
        super(name);
        this.race = race;
        this.strength = strength;
    };

    wardenFight() {
        this.stamina = this.stamina - 20;
        if (this.stamina === 0) {
            this.rest()
        }
        return this.stamina
    }
}

const hum1 = new Human('Man');
hum1.addXp(100);
hum1.wardenFight();
hum1.wardenFight();
hum1.wardenFight();
hum1.wardenFight();
console.log(hum1);
hum1.wardenFight();
console.log(hum1);



class Dwarf extends Hero {
    constructor (name, race='Dwarf', rage = 0){
        super(name);
        this.race = race;
        this.rage = rage;
    };

    berserksFury() {
        this.rage = this.rage + 30;
        if (this.rage >= 100) {
            this.rage = 0;
            this.stamina = 0;
            this.rest()
        }
        // return this.stamina
    }
}

const dwarf1 = new Dwarf('Gimli');

console.log(dwarf1);
dwarf1.berserksFury();
// console.log(dwarf1);
dwarf1.berserksFury();
dwarf1.berserksFury();
// console.log(dwarf1);
dwarf1.berserksFury();
console.log(dwarf1);


class Wizard extends Hero {
    constructor (name, race='Wizzard', mana = 100){
        super(name);
        this.race = race;
        this.mana = mana;
    };

    spell() {
        this.mana = this.mana - 25;
        this.stamina = this.stamina - 25;
        if (this.stamina === 0) {
            this.rest();
            this.reload()
        }
    }
    reload() {
        this.mana = 100;
    }
}

const wiz1 = new Wizard('Gendalf');
console.log(wiz1);
wiz1.spell();
console.log(wiz1);
wiz1.spell();
console.log(wiz1);
wiz1.spell();
wiz1.spell();
console.log(wiz1);


// 3 

// Part 3 
// Створити клас FireMage який наслідує всі властивості від Мага і має додаткову властивість skill
// skill - поле де додається навик 'fireball'
// Додати метод shootFireBall - який виведе в консоль фразу "Вогняний шар запущений і нанесен 
// шкоди на ${рандомне число від 1 до 30}" і запустить метод spell();
// Створити екземпляр класу FireMage і запустити 4 рази метод shootFireBall(). 
// після цього в консолі має зявитися напис 'Recovered'.

class FireMage extends Wizard{
    constructor (name, skill){
        super(name);
        this.skill = skill;
    };

    shortFireBall() {
       console.log(`Вогняний шар запущений і нанесен шкоди на ${Math.round(Math.random()*30)+1}`); 
       this.spell();
    }
}

const fire = new FireMage('Pony', 'Firemage', 'fireball');
console.log(fire);
fire.shortFireBall();
fire.shortFireBall();
fire.shortFireBall();
fire.shortFireBall();
console.log(fire);