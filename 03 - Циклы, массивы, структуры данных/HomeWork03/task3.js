// JavaScript source code
/*
Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
15%, можете использовать метод forEach https://mzl.la/1AOMMWX :
*/
"use strict;"

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

// solving 1
let arrMaped = products.map(function (n) { return Object.assign({}, n, { price: n.price * 0.85 }) });
console.log(arrMaped);

// solving 2
//products.forEach(function (el) { el.price = el.price * 0.85; });
products.forEach((el) => el.price = el.price * 0.85);
console.log(products);
