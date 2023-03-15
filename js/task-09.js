function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorNameRef = document.querySelector(".color");
const colorChangeButton = document.querySelector(".change-color");

colorChangeButton.addEventListener("click", () => {
  document.body.style.background = getRandomHexColor();
  colorNameRef.textContent = getRandomHexColor();
});
