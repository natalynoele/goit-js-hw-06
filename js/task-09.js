/*Завдання 9
Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

*/


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widget = document.querySelector('.widget');
const changeColorBtn = widget.querySelector('.change-color');
const colorValue = widget.querySelector('.color');
const body = document.querySelector('body');

changeColorBtn.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick(event){
  body.style.backgroundColor = getRandomHexColor(); 
  colorValue.textContent = body.style.backgroundColor;
}