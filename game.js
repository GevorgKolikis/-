const form = document.querySelector("form");
const guess = form.querySelector("#guess-input");
const resultText = document.querySelector(".result-text");
const prevGuessDiv = document.querySelector(".prev-guesses");
const guessAttempt = document.querySelector(".guess-attempt");

const restartBtn = document.querySelector(".reset-btn");
let attempt = 1;
let prevGuesses = [];

let randomNumber = Math.floor(Math.random() * 100) + 1;

restartBtn.style.display = "none";

//event listeners



restartBtn.addEventListener("click", function () {
  restartBtn.style.display = "none";
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guess.value = "";
  resultText.textContent = "";
  prevGuessDiv.textContent = "";
  guessAttempt.textContent = `1․ Գուշակում`;
  attempt = 1;
  prevGuesses = [];
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (guess.value === "") {
    resultText.textContent = "Նախ Մի Թիվ Գուշակիր";
    setTimeout(() => {
      resultText.textContent = "";
    }, 2000);
  } else {
    const diff = Math.abs(guess.value - randomNumber);
    prevGuesses.push(guess);
    getAttempt();
    getResult(diff);
    showPrevGuesses();
    console.log(randomNumber, prevGuesses);
  }
});

//functions

function getResult(diff) {
  let msg;
  if (diff === 0) {
    msg = `Մալադեց ${
      attempt - 1
    }. գուշակումիցտ իմացար ։  `;
    restartBtn.style.display = "";
  } else if (diff < 5) {
    msg = "Շհատ մոտես! ";
  } else if (diff < 15) {
    msg = "Մի քիչ չարչարվես կքթնես";
  } else if (diff < 30) {
    msg = "Հեռույես";
  } else if (diff < 45) {
    msg = "Շատ հեռույես";
  } else {
    msg = "Հեռու գնա ստեղից";
  }
  resultText.textContent = msg;
}

function getAttempt() {
  attempt++;
  guessAttempt.textContent = `${attempt}․ Գուշակում`;
}

function showPrevGuesses() {
  const index = prevGuesses.length - 1;
  const guesses = document.createElement("li");
  guesses.textContent = prevGuesses[index].value;
  prevGuessDiv.appendChild(guesses);
}
