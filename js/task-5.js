function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeButton = document.querySelector(".change-color");
const spanTextColor = document.querySelector(".color");

changeButton.addEventListener("click", changeColor);

function changeColor() {
  spanTextColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
  return
}
