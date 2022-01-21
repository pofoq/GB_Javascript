// JavaScript source code
/*
4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами. 
Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат.
Обязательно использовать оператор return. 
*/
"use strict;"

alert("Task 4");
let num1 = prompt("Введите первое число: "), num2 = prompt("Введите второе число: ");

if (checkNumber(num1) && checkNumber(num2)) {
    num1 = Number(num1);
    num2 = Number(num2);
    alert("Сумма: " + sum(num1, num2));
    alert("Деление: " + devide(num1, num2));
    alert("Вычитание: " + minus(num1, num2));
    alert("Умножение: " + multiplication(num1, num2));
}

function sum(a, b) {
    return a + b;
}

function devide(a, b) {
    //if (b == 0) {
    //    return "На 0 делить нельзя";
    //}
    return a / b;
}

function minus(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function checkNumber(n) {
    if (n === '') {
        alert('Вы ничего не ввели');
        return false;
    }
    if (n === null) {
        alert('Вы нажали "Отмена"');
        return false;
    }
    n = Number(n);
    if (isNaN(n)) {
        alert('Вы ввели некорректное значение');
        return false;
    }
    return true;
}