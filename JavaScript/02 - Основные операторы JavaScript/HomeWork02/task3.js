﻿// JavaScript source code
/*
 3. Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность (ноль можно считать положительным числом);
- если а и b отрицательные, вывести их произведение;
- * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;
 */
"use strict;"

alert("Task 3");
let a = +prompt("Введите число 'a': "), b = +prompt("Введите число 'b': "), res;

if (a >= 0 && b >= 0) {
    res = a - b;
} else if (a < 0 && b < 0) {
    res = a * b;
} else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
    res = a + b;
}

alert(res);