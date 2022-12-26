/*
Завдання 10 (виконувати не обов'язково)
Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/
const boxesContainer = document.getElementById("boxes");
const controlsInput = document.querySelector("input");
const createElementsBtn = document.querySelector("[data-create]");
const removeElementsBtn = document.querySelector("[data-destroy]");

createElementsBtn.addEventListener("click", () =>
  createBoxes(controlsInput.value)
);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const appendedDivs = [];
  for (let i = 1; i <= amount; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.style.width = `${i > 1 ? i * 10 + 30 : 30}px`;
    div.style.height = `${i > 1 ? i * 10 + 30 : 30}px`;
    div.style.backgroundColor = getRandomHexColor();
    appendedDivs.push(div);
  }
  boxesContainer.append(...appendedDivs);
  controlsInput.value = null;
}

removeElementsBtn.addEventListener("click", destroyBoxes);

function destroyBoxes(event) {  
  boxesContainer.innerHTML = '';
}
