'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/

const txt = document.querySelector('.text');
const tabs = document.querySelectorAll('.nav-link');
tabs.forEach(function (tab) {
    tab.addEventListener('click', clickHandler);
});
let tab = tabs[0];
tab.textContent

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
    changeText(event);
    changeActiveClass(event);
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(event) {
    const className = 'active';
    let t = tab.querySelector(`.${className}`);
    t.classList.remove(className);
    event.target.classList.add(className);
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(event) {
    let textToShow = '';
    switch (event.target.textContent) {
        case 'Link 1':
            textToShow = texts.text1;
            break;
        case 'Link 2':
            textToShow = texts.text2;
            break;
        case 'Link 3':
            textToShow = texts.text3;
            break;
    }
    txt.textContent = textToShow;
}