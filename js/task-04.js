/*
Завдання 4
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.
*/
let counterValue = 0;
const span = document.getElementById('value');
console.log(span);

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

if (decrementButton) {
  decrementButton.addEventListener('click', onDecrementButtonClick);
}

if (incrementButton) {
  incrementButton.addEventListener('click', onIncrementButtonClick)
}

function onDecrementButtonClick() {
  counterValue -= 1;
  span.textContent = counterValue;
}

function onIncrementButtonClick() {
  counterValue += 1;
  span.textContent = counterValue;
}

console.log(decrementButton);