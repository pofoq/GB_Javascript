// JavaScript source code
/*
5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
*/
"use strict;"
alert("Task 5");
let a = prompt("Введите число 'a'"),
    b = prompt("Введите число 'b'"),
    o = prompt('Введите имя операции \n sum - сложение \n min - вычитание \n dev - деление \n mul - умножение');

if (checkNumber(a) && checkNumber(b)) {
    a = +a;
    b = +b;
    alert(mathOperation(a, b, o));
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "sum":
            return sum(arg1, arg2);
        case "min":
            return minus(arg1, arg2);
        case "dev":
            return devide(arg1, arg2);
        case "mul":
            return multiplication(arg1, arg2);
        default:
            return "No operation";
    }
}
