// JavaScript source code
/*
Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/

"use strict;"

// solving 1
for (i = 1; i < 21; i++) {
    console.log("x".repeat(i));
}

// solving 2
let str = "";
for (i = 1; i < 21; i++) {
    str += "x";
    console.log(str);
}
