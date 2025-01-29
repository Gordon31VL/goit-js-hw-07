const inputText = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

inputText.addEventListener('input', event => {
  const trimmedValue = event.currentTarget.value.trim();
  if (trimmedValue === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = trimmedValue;
  }
});
