"use strict";

const buttonColorChange = document.querySelector("button.color-changer");
const colorChanges = document.querySelectorAll(".color-change");

buttonColorChange.addEventListener("click", () => {
  for (let colorChange of colorChanges) {
    colorChange.classList.add("red");
  }
});
