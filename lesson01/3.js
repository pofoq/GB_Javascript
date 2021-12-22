// JavaScript source code
"use strict;"

/*
1. 10 + 10 = 20         -> приоритет выполнения слева направо
2. 20 + "10" = "2010"   -> неявное приведение
result = "2010"
*/
let result = 10 + 10 + "10";
console.log(result);

/*
1. 10 + "10" = "1010"       -> неявное приведение 
2. "1010" + 10 = "101010"   -> неявное приведение
result = "101010"
*/
result = 10 + "10" + 10;
console.log(result);

/*
1. +"10" = 10           -> унарный плюс преобразует строку в число
2. 10 + 10 + 10 = 30
result = 30
*/
result = 10 + 10 + +"10"; //(обратите внимание на пробелы, пишите также)
console.log(result);

/*
1. -"" = -0             -> "" == 0
2. 10 / -0 = -Infinity  -> деление на 0 и -0 == бесконечность
result = -Infinity
*/
result = 10 / -"";
console.log(result);

/*
1. +"2,5" = NaN     -> Not a Number
2. 10 / NaN = NaN   -> Not a Number
result = NaN
*/
result = 10 / +"2,5"; //(да здесь запятая, это не опечатка)
console.log(result);
