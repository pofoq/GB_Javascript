/*
 1.1 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6
(по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6),
конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта.
Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.
Имейте в виду, что метод make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип
(как объект transport в уроке).
 */

"use strict";

// es5
function Product_es5(name, price) {
    this.name = name;
    this.price = price;
}

Product_es5.prototype.make25PercentDiscount = function () {
    this.price *= 0.75;
}

let p_es5 = new Product_es5('phone', 999);
console.log(p_es5);
p_es5.make25PercentDiscount();
console.log(p_es5);


// es6
class Product_es6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount () {
        this.price *= 0.75;
    }
}

let p_es6 = new Product_es6('laptop', 1495);
console.log(p_es6);
p_es6.make25PercentDiscount();
console.log(p_es6);