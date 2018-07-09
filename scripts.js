const generateButton = document.querySelector('.btn-generate');
const letterDiv = document.querySelector('.letter');
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lettersShowed = [];

function randomLetter() {
  const lettersArray = [...letters];
  const randomNumber = Math.floor(Math.random() * lettersArray.length);
  return lettersArray[randomNumber];
}

function printLetter(letter) {
  letterDiv.textContent = letter;
}

function generate() {
  const letter = randomLetter();
  printLetter(letter);
  lettersShowed.push(letter);
}

generateButton.addEventListener('click', generate);