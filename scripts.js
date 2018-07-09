const generateButton = document.querySelector('.btn-generate');
const letterDiv = document.querySelector('.letter');
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function randomLetter() {
  const lettersArray = [...letters];
  const randomNumber = Math.floor(Math.random() * [...letters].length);
  letterDiv.textContent = lettersArray[randomNumber];
}

generateButton.addEventListener('click', randomLetter);