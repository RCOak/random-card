/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const num = document.querySelector(".num");
  const topSim = document.querySelector(".topSim");
  const botSim = document.querySelector(".botSim");
  num.innerHTML = generateRandomNumber();
  const simbol = generateRandomSimbol();
  topSim.innerHTML = simbol;
  botSim.innerHTML = simbol;
  //if (simbol === "♥" || simbol === "♦")
  if (["♥", "♦"].includes(simbol)) {
    topSim.classList.add("red");
    botSim.classList.add("red");
    num.classList.add("red");
  }
};

const generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

const generateRandomSimbol = () => {
  let simbol = ["♥", "♦", "♠", "♣"];
  let indexSimbol = Math.floor(Math.random() * simbol.length);
  return simbol[indexSimbol];
};

//write your code here
console.log("Hello Rigo from the console!");
