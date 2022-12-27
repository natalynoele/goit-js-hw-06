/*
Завдання 5
Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
*/

const nameInput = document.getElementById("name-input");
const output = document.getElementById("name-output");

if (nameInput) {
  nameInput.addEventListener("input", onNameInputInput);
}

function onNameInputInput(event) {
  event.currentTarget.value !== '' ? output.textContent = event.currentTarget.value : output.textContent = 'Anonymous';
  
}
