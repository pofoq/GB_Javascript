// JavaScript source code
/*
Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1 Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2 Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в
дополнительных видео в материалах урока.
*/
"use strict;"

const newProducts = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

console.log(newProducts);

//1-1
//console.log(Object.getPrototypeOf(newProducts));
//console.log(newProducts[0].__proto__);
// filter - создаёт копию массива
let arr = newProducts.filter(prod => prod.hasOwnProperty("photos") && prod.photos.length > 0);
console.log(arr);
//1-2
let arr2 = newProducts.filter(prod => ("photos" in prod) && (prod.photos.length > 0));
console.log(arr2);

//2
// sort - не создаёт копию массива, сортирует текущий массив
newProducts.sort((a, b) => a.price - b.price);
console.log(newProducts);
