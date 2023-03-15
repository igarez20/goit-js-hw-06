function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesRef = document.querySelector("#boxes");
const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const inputRef = document.querySelector("input");

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const divRef = document.createElement("div");
    divRef.style.width = `${30 + i * 10}px`;
    divRef.style.height = `${30 + i * 10}px`;
    divRef.style.background = getRandomHexColor();
    boxesRef.appendChild(divRef);
  }
}

createBtnRef.addEventListener("click", () => createBoxes(inputRef.value));

destroyBtnRef.addEventListener("click", () => (boxesRef.innerHTML = ""));
