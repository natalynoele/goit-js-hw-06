/*
Завдання 6
Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/

const validationInput = document.getElementById("validation-input");
const dataLength = Number(validationInput.dataset.length);
console.log(dataLength);
if (validationInput) {
  validationInput.addEventListener("blur", onValidationInputBlur);
}

function onValidationInputBlur(event) {
  let inputLength = event.currentTarget.value.length;
console.log(inputLength);
console.log(Number(event.currentTarget.dataset.length));
  if (inputLength === dataLength){    
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  }else{
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
    
}
