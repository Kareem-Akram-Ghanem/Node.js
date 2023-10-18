const body = document.getElementsByTagName("body")[0];
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const randomColorButton = document.getElementById("randomColor");
const lightModeButton = document.getElementById("light");
const darkModeButton = document.getElementById("dark");
const h1 = document.querySelector("h1");

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

function getRandomColor() {
  const rnd1 = `rgb(
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}
  )`;

  const rnd2 = `rgb(
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}
  )`;

  body.style.background = `linear-gradient(to right, ${rnd1}, ${rnd2})`;
}

function turnOnLightMode() {
  body.style.background = "#fff";
  h1.style.color = "#2d2d2d";
}

function turnOnDarkMode() {
  body.style.background = "#2d2d2d";
  h1.style.color = "#fff";
}

document.addEventListener("DOMContentLoaded", setGradient);

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomColorButton.addEventListener("click", getRandomColor);
lightModeButton.addEventListener("click", turnOnLightMode);
darkModeButton.addEventListener("click", turnOnDarkMode);
