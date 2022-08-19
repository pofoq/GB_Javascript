document; // HTML разметка документа

console.dir(document); // документ в виде объектов

document.getElementById('one'); // один элемент

document.getElementsByTagName('div'); // все дивы в виде HTMLCollection

document.getElementsByClassName('cssClass'); // все элементы с классом

document.querySelectorAll('form [action="/feedback"] input'); // возвращает всегда NodeList

document.querySelector('.user'); // возвращает первый элемент с классом user

document.getElementsByName('user'); // все элементы с аттрибутом name='user'

document.head; // доступ к элементу head
document.body; // доступ к элементу body
document.forms; // доступ ко всем формам HTMLCollections
document.images; // доступ ко всем картинкам HTMLCollections
document.links; // доступ ко всем ссылкам с аттрибутом href

let prodName = document.querySelect('.prodName');
let parent = prodName.parentNode; // родитель элемента
let children = prodName.children; // теги элемента

let p = document.createElement('p'); // создать элемент 'p'
document.body.appendChild(p); // вставить p в body
p.innerText = "hello world!"; // добавить текст в p

let hello = document.createTextNode("hello world"); // создать текстовый узел, не тег
document.body.insertBefore(hello, document.querySelector('button')); // добавить элемент в список дочерних элементов родителя "body" перед указанным элементом "button"

let h2 = document.querySelector('h2');
h2.remove(); // удалить элемент со страницы

p.parentNode.replaceChild(h2, p); // заменить элемент p на элемент h2

<!-- beforebegin -->
<button>
<!-- afterbegin -->
Кнопка
<!-- beforeend -->
</button>
<!-- afterend -->

button.insertAdjacentHTML("beforebegin", "<u>hello</u>"); // вставить разметку HTML

let p = document.createElement('p');
p.innerText = 'paragraph';
button.insertAdjucentElemnt("beforebegin", p); // вставить элемент

button.className; // имя класса элемента
button.classList; // список классов элемента
button.classList.add('class5'); // добавить класс class5
button.classList.remove('class1'); // удалить класс class5
button.classList.toggle('class3'); // если есть class5, то удалит, если нет класса, то добавит
button.classList.contains('class5'); // проверяет наличие класса, возвращает true\false


let product = document.querySelector('.product');
product.getAttribute('data-lang'); // получить значение атрибута
product.setAttribute('id', 'first'); // доавить атрибут id со значением first

document.addEventListener('DOMContentLoaded', function () { 
	console.log('html загружен, возможно не загружены картинки и стили'); 
});
window.addEventListener('load', function () { 
	console.log('страница загружена'); 
});

button.addEventListener('click', function (event) { 
	console.log('click'); 
});
button.addEventListener('mouseover', function (event) { 
	console.log('mouseover'); 
}); // как hover в CSS
button.addEventListener('keydown', function (event) { 
	console.log(event); 
}); // событие нажатия клавиши 
button.addEventListener('keyup', function (event) { 
	console.log(event); 
}); // событие отпускания клавиши
