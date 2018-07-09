const generateButton = document.querySelector('.btn-generate');
const letterDiv = document.querySelector('.letter');
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lettersShowed = [];

function randomLetter() {
  const lettersArray = [...letters];
  const randomNumber = Math.floor(Math.random() * lettersArray.length);
  return lettersArray[randomNumber];
}

function printLetter(element, letter) {
  element.textContent = letter;
}

function generate() {
  const letter = randomLetter();
  printLetter(letterDiv, letter);
  lettersShowed.push(letter);
}

generateButton.addEventListener('click', generate);