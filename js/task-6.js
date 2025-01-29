function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBoxes = document.querySelector('#boxes');
const create = document.querySelector('[data-create]');
const clear = document.querySelector('[data-destroy]');
const number = document.querySelector('#controls input');

create.addEventListener('click', () => {
  if (number.value <= 100) {
    createBoxes(number.value);
  } else (alert(`Ваше число ${number.value}. Введіть число меньше за 100`));
  number.value = "";
});
clear.addEventListener('click', destroyBoxes);


function createBoxes(amount) {

  colorBoxes.innerHTML = '';
  const fragment = document.createDocumentFragment();

  for (let div = 0; div < amount; div++) {
    const colorBox = document.createElement('div');
    colorBox.style.backgroundColor = getRandomHexColor();
    colorBox.style.width = `${30 + div * 10}px`;
    colorBox.style.height = `${30 + div * 10}px`;
    fragment.append(colorBox);
  }

  colorBoxes.append(fragment);
}


function destroyBoxes() {
  colorBoxes.innerHTML = '';
}
