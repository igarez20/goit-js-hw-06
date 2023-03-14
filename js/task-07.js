const rangeSliderRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

rangeSliderRef.addEventListener("input", () => {
  textRef.style.fontSize = `${rangeSliderRef.value}px`;
});
