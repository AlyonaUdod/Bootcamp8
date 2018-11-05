'use strict';

/*
  Сеть фастфудов предлагает несколько видов гамбургеров.
  Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
	- маленькая (+30 денег, +50 калорий)
	- большая (+50 денег, +100 калорий)
  Гамбургер может быть с одной из нескольких видов начинок (обязательно):
	- сыром (+15 денег, +20 калорий)
	- салатом (+20 денег, +5 калорий)
	- мясом (+35 денег, +15 калорий)
  Дополнительно, гамбургер можно:
	- посыпать приправой (+10 денег, +0 калорий)
	- полить соусом (+15 денег, +5 калорий)
  Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход,
  создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин.
  Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать
  указанные методы, которые принимают и возвращают данные указанного типа.
*/

/**
 * Класс, объекты которого описывают параметры гамбургера.
 */
class Hamburger {
    /**
     * @constructor
     * @param {String} size - Размер
     * @param {String} stuffing - Начинка
     */
    constructor(size, stuffing) {
      this._size = size;
      this._stuffing = stuffing;
      this._toppings = [];
    }
  
    /**
     * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
     * @param {String} topping - Тип добавки
     */
    addTopping(topping) {
      return !this._toppings.includes(topping) ? this._toppings.push(topping) : null;
    };



    /**
     * Убрать topping, при условии, что она ранее была добавлена
     * @param {String} topping - Тип добавки
     */
    removeTopping(topping) {
      // return this._toppings.splice(this.toppings.indexOf(topping), 1);
      return this._toppings.includes(topping) ? this._toppings.splice(this._toppings.indexOf(topping),1) : null;
    }

  
    /**
     * Получить список toppings
     * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
     */

     get toppings () {
      return this._toppings;
     }
    
    /**
     * Узнать размер гамбургера
     * @returns {String} - размер гамбургера
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
     */

    get size () {
      return this._size;
     }
          
    // set size (topping) {
    //   this._size = size;
    // }

  
    /**
     * Узнать начинку гамбургера
     * @returns {String} - начинка гамбургера
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
     */

    get stuffing () {
      return this._stuffing;
     }
          
    // set stuffing(stuffing) {
    //   this._stuffing = stuffing;
    // }
  
    /**
     * Узнать цену гамбургера
     * @returns {Number} - Цена в деньгах
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
     */
    
     calculateToppingsPrices () {
        let total = 0;
        for (let el of this._toppings) {
          if (el !== Hamburger.TOPPINGS.el) {
            total += Hamburger.TOPPINGS[el].price
          } 
        } return total 
      } 

      get price() {
        return Hamburger.SIZES[this._size].price + 
        Hamburger.STUFFINGS[this._stuffing].price 
        + this.calculateToppingsPrices()
      }

    
    
    /**
     * Узнать калорийность
     * @returns {Number} - Калорийность в калориях
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
     */

    calculateToppingsCalories () {
      let total = 0;
      for (let el of this._toppings) {
        if (el !== Hamburger.TOPPINGS.el) {
          total += Hamburger.TOPPINGS[el].calories
        } 
      } return total 
    } 

    get calories() {
      return Hamburger.SIZES[this._size].calories + 
      Hamburger.STUFFINGS[this._stuffing].calories 
      + this.calculateToppingsCalories()
    }
  }
  

  /*
    Размеры, виды добавок и начинок объявите как статические поля класса.
    Добавьте отсутсвующие поля по аналогии с примером.
  */
  Hamburger.SIZE_SMALL = 'SIZE_SMALL';
  Hamburger.SIZE_LARGE = 'SIZE_LARGE';
  Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
      price: 30,
      calories: 50,
    },
    [Hamburger.SIZE_LARGE]: {
      price: 50,
      calories: 100,
    },
  };
  // console.log(Hamburger.SIZES[Hamburger.SIZE_SMALL].price);

  Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
  Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
  Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';
  
  Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
      price: 15,
      calories: 20,
    },
    [Hamburger.STUFFING_SALAD]: {
      price: 25,
      calories: 30,
    },
    [Hamburger.STUFFING_MEAT]: {
      price: 40,
      calories: 70,
    },
  };

  Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
  Hamburger.TOPPING_SAUSE = 'TOPPING_SAUSE';
  Hamburger.TOPPING_COF = 'TOPPING_COF';


  Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
      price: 10,
      calories: 0,
    },
    [Hamburger.TOPPING_SAUSE]: {
      price: 20,
      calories: 15,
    },
    [Hamburger.TOPPING_COF]: {
      price: 34,
      calories: 33,
    }
  };


  /* Вот как может выглядеть использование этого класса */
  
  // Маленький гамбургер с начинкой из сыра
  const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

  console.log(hamburger);
  // Добавка из приправы
  hamburger.addTopping(Hamburger.TOPPING_SAUSE);

  // Спросим сколько там калорий
  console.log("Ham1 Calories: ",hamburger.calories);
  
  // Сколько стоит?
  console.log("Ham1 Price: ",hamburger.price);
  
  // Я тут передумал и решил добавить еще соус
  hamburger.addTopping(Hamburger.TOPPING_SPICE);

  // А сколько теперь стоит?
  console.log("Ham1 Price with sause: ",hamburger.price);
  
  // Проверить, большой ли гамбургер?
  console.log("Is hamburger large: ", hamburger.size === Hamburger.SIZE_LARGE); // -> false
  
  // Убрать добавку
  hamburger.removeTopping(Hamburger.TOPPING_SPICE);

  // Смотрим сколько добавок
  console.log("Ham1. Hamburger has %d toppings", hamburger.toppings.length); // 1


  /*
    🔔 Обратите внимание на такие моменты:
          ✔️ класс не взаимодействует с внешним миром. Это не его дело, этим занимается
              другой код, а класс живет в изоляции от мира
          ✔️ обязательные параметры (размер и начинка) мы передаем через конструктор,
          чтобы нельзя было создать объект, не указав их
          ✔️ необязательные (добавка) добавляем через методы
          ✔️ типы начинок обозначены "константами" с понятными именами (на самом деле просто
              свойствами, написанным заглавными буквами, которые мы договорились считать "константами")
          ✔️ объект создается через конструктор - функцию, которая задает начальные значения полей.
          ✔️ в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки),
                а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории
          логично в тот момент, когда это потребуется, а не заранее.
  */


// console.log(hamburger._toppings);
// console.log(hamburger.calculateToppingsPrices());
// console.log(ham2.calculateToppingsCalories());
// console.log(ham2.calculateToppingsPrices());

const ham2 = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_MEAT)
  console.log(ham2);
  ham2.addTopping(Hamburger.TOPPING_SAUSE);
  console.log(`Ham2 Calories: ${ham2.calories}`);
  console.log(`Ham2 Price: ${ham2.price}`);
  ham2.removeTopping(Hamburger.TOPPING_SAUSE);
  ham2.addTopping(Hamburger.TOPPING_COF);
  ham2.addTopping(Hamburger.TOPPING_SPICE);
  console.log(ham2.toppings);

  console.log("Ham2. Hamburger has %d toppings", ham2.toppings.length);
  console.log(`Ham2. Calories after topping change: ${ham2.calories}`);
  console.log(`Ham2. Price after topping change: ${ham2.price} `);
  console.log("Ham2. Is hamburger stuffing with meat:",ham2.stuffing === Hamburger.STUFFING_MEAT);