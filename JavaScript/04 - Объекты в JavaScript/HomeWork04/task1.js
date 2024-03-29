﻿/*
1. (это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
Вам может пригодиться:
 Number.isInteger(value) – функция проверяет, является ли переданное число целым, подробнее здесь https://mzl.la/2XCVSsx
 Math.floor(value) - метод возвращает целое число, которое меньше или равно данному числу (проще говоря округляет в меньшую сторону), 
    подробнее здесь https://mzl.la/2Qx42SO .
 Используйте также остаток от деления на 10, например 123 % 10 будет 3
 Вам также может пригодится делить число на 100 и на 10.
*/

"use strict";

// 1.
function number2Obj(num) {
    if (num == "") {
        console.log(`You haven't entered anything`);
        return {};
    }
    if (!Number.isInteger(+num)) {
        console.log(`${num} is not a Number`);
        return {};
    }
    if (num < 0 || num > 999) {
        console.log(`Number should be from 0 to 999`);
        return {};
    }

    const units = num % 10; //это единицы
    const tens = parseInt(num / 10) % 10; //это десятки
    const hundreds = parseInt(num / 100) % 10; //это сотни

    return {
        units: units,
        tens: tens,
        hundreds: hundreds
    }
}

let obj = number2Obj(prompt("Enter a number from 0 to 999"));
console.log(`units: ${obj.units}; tens: ${obj.tens}; hundreds: ${obj.hundreds}`);
