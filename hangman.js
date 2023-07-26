"use strict";

const guessWord = document.querySelector(".guess-word");
const letters = document.querySelectorAll(".letters");
const livesElement = document.querySelector("#lives");

let lives = 9;
const alphabetGrid = document.querySelector(".alphabet-grid");
let guessedLetters = [];
let charArray = [
  "dolphin",
  "movie",
  "orange",
  "papaya",
  "calculator",
  "mango",
  "hyderabad",
  "cake",
];
let wordSelected = charArray[Math.floor(Math.random() * 8)];
console.log(wordSelected);
for (let i = 0; i < wordSelected.length; i++) {
  const HTML = `<span class= "dashWord"> _ &nbsp </span>`;
  guessWord.insertAdjacentHTML("beforeend", HTML);
}

function displayWord() {
  guessWord.innerHTML = "";

  for (let i = 0; i < wordSelected.length; i++) {
    const letter = wordSelected[i];

    const HTML = `<span class="dashWord">${
      guessedLetters.includes(letter) ? letter : "_" + "&nbsp"
    }</span>`;

    guessWord.insertAdjacentHTML("beforeend", HTML + " ");
  }
}

function letterPress(event) {
  const checkLetter = event.target.innerHTML.toLowerCase();
  event.target.style.color = "red ";
  console.log(checkLetter);
  guessedLetters.push(checkLetter);

  if (wordSelected.includes(checkLetter)) {
    displayWord();

    let flag = true;
    const spanElements = guessWord.querySelectorAll("span.dashWord");
    for (let i = 0; i < wordSelected.length; i++) {
      if (spanElements[i].textContent.trim() === "_") {
        //  if (guessWord[i] === "_ ") {
        flag = false;
        break;
      }
    }
    if (flag) {
      livesElement.textContent = "You Won! ";
    }
  } else {
    lives--;
    if (lives === 0) {
      livesElement.textContent = `Word is ${wordSelected} :( `;
    } else {
      livesElement.textContent = `Lives: ${lives}`;
    }
  }
}

letters.forEach(function (i) {
  i.addEventListener("click", letterPress);
});
